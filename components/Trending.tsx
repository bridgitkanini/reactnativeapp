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
import { Video, ResizeMode } from "expo-av";

import { icons } from "@/constants";

interface TrendingProps {
  posts: Array<{ $id: string; thumbnail: string }>;
}

interface TrendingItemProps {
  activeItem: { $id: string };
  item: { $id: string; thumbnail: string };
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

  return (
    <Animatable.View
      className="mr-5"
      animation={activeItem === item.$id ? zoomIn : zoomOut}
      duration={500}
    >
      {play ? (
        <Video 
        source={{ uri: item.video }} 
        className="w-52 h-72 rounded-[35px] mt-3 bg-white/10" 
        resizeMode={ResizeMode.CONTAIN} 
        useNativeControls 
        shouldPlay 
        onPlaybackStatusUpdate={(staus) => {
          if (staus.didJustFinish) {
            setPlay(false);
          }
        }}
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
            source={icons.play} className="absolute w-12 h-12" resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </Animatable.View>
  );
};

const Trending = ({ posts }: TrendingProps) => {
  const [activeItem, setActiveItem] = useState(posts[1]);

  const viewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveItem(viewableItems[0].key);
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
      contentOffset={{ x: 170}}
      horizontal
    />
  );
};

export default Trending;
