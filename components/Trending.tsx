import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import React, { useState } from "react";
import * as Animatable from "react-native-animatable";
import { VideoView, useVideoPlayer } from "expo-video";

import { icons } from "@/constants";

interface TrendingProps {
  posts: Array<{ $id: string; thumbnail: string; video: string }>;
}

interface TrendingItemProps {
  activeItem: { $id: string };
  item: { $id: string; thumbnail: string; video: string };
}

const zoomIn = {
  from: { transform: [{ scale: 0.9 }] },
  to: { transform: [{ scale: 1.1 }] },
};

const zoomOut = {
  from: { transform: [{ scale: 1 }] },
  to: { transform: [{ scale: 0.9 }] },
};

const TrendingItem = ({ activeItem, item }: TrendingItemProps) => {
  const [play, setPlay] = useState(false);
  const player = useVideoPlayer(item.video, (player) => {
    player.loop = false;
    player.muted = false;
  });

  // Handle video end
  React.useEffect(() => {
    const subscription = player.addListener("playToEnd", () => {
      setPlay(false);
    });

    return () => {
      subscription?.remove();
    };
  }, [player]);

  // Control playback
  React.useEffect(() => {
    if (play) {
      player.play();
    } else {
      player.pause();
    }
  }, [play, player]);

  return (
    <Animatable.View
      className="mr-5"
      animation={activeItem.$id === item.$id ? zoomIn : zoomOut}
      duration={500}
    >
      {play ? (
        <VideoView
          player={player}
          style={{
            width: 208, // w-52
            height: 288, // h-72
            borderRadius: 35,
            marginTop: 12,
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          }}
          allowsFullscreen
          allowsPictureInPicture
        />
      ) : (
        <TouchableOpacity
          className="relative justify-center items-center"
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
        >
          <ImageBackground
            source={{ uri: item.thumbnail }}
            className="w-52 h-72 rounded-[35px] my-5 overflow-hidden shadow-lg shadow-black/40"
            resizeMode="cover"
          />

          <Image
            source={icons.play}
            className="absolute w-12 h-12"
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </Animatable.View>
  );
};

const Trending = ({ posts }: TrendingProps) => {
  const [activeItem, setActiveItem] = useState(posts[1]);

  const viewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: Array<{
      key: string;
      item: { $id: string; thumbnail: string; video: string };
    }>;
  }) => {
    if (viewableItems.length > 0) {
      setActiveItem(viewableItems[0].item);
    }
  };

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => `${item.$id}`}
      renderItem={({ item }) => (
        <TrendingItem activeItem={activeItem} item={item} />
      )}
      onViewableItemsChanged={viewableItemsChanged}
      viewabilityConfig={{ itemVisiblePercentThreshold: 70 }}
      contentOffset={{ x: 170, y: 0 }}
      horizontal
    />
  );
};

export default Trending;
