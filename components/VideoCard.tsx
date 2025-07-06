import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { icons } from "@/constants";
import { VideoView, useVideoPlayer } from "expo-video";

interface VideoCardProps {
  video: {
    title: string;
    thumbnail: string;
    video: string;
    author?: {
      username: string;
      avatar: string;
    } | null;
  };
}

const VideoCard = ({
  video: { title, thumbnail, video, author },
}: VideoCardProps) => {
  const [play, setPlay] = useState(false);
  const player = useVideoPlayer(video, (player) => {
    player.loop = false;
    player.muted = false;
  });

  const username = author?.username || "Unknown";
  const avatar = author?.avatar || "";

  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);

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

  // Add error and status listeners
  React.useEffect(() => {
    const statusSub = player.addListener(
      "statusChange",
      ({ status, error }) => {
        setStatus(status);
        if (error) {
          setError(error.message);
          console.error("Video error:", error.message);
        }
      }
    );
    return () => {
      statusSub?.remove();
    };
  }, [player]);

  // console.log("Video URL:", video);

  return (
    <View className="flex-col items-center px-4 mb-14">
      <View className="flex-row gap-3 items-start">
        <View className="justify-center items-center flex-row flex-1">
          <View className="w-[46px] h-[46px] rounded-lg border border-secondary justify-center items-center p-0.5">
            <Image
              source={{ uri: avatar }}
              className="w-full h-full rounded-lg"
              resizeMode="cover"
            />
          </View>

          <View className="justify-center flex-1 ml-3 gap-y-1">
            <Text
              className="text-white font-psemibold text-sm"
              numberOfLines={1}
            >
              {title}
            </Text>
            <Text
              className="text-gray-100 font-pregular text-xs"
              numberOfLines={1}
            >
              {username}
            </Text>
          </View>
        </View>

        <View className="pt-2">
          <Image source={icons.menu} className="w-5 h-5" resizeMode="contain" />
        </View>
      </View>

      {play ? (
        error ? (
          <View
            style={{
              width: "100%",
              height: 240,
              borderRadius: 12,
              marginTop: 12,
              backgroundColor: "#222",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "red", textAlign: "center" }}>
              Video failed to load.\n{error}
            </Text>
          </View>
        ) : (
          <VideoView
            player={player}
            style={{
              width: "100%",
              height: 240, // h-60
              borderRadius: 12,
              marginTop: 12,
            }}
            allowsFullscreen
            allowsPictureInPicture
          />
        )
      ) : (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
          className="w-full h-60 rounded-xl mt-3 relative justify-center items-center"
        >
          <Image
            source={{ uri: thumbnail }}
            className="w-full h-full rounded-xl mt-3"
            resizeMode="cover"
          />
          <Image
            source={icons.play}
            className="w-12 h-12 absolute"
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default VideoCard;
