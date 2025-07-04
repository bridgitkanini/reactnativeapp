import { View, Text } from "react-native";
import React from "react";

interface VideoCardProps {
  video: {
    title: string;
    thumbnail: string;
    video: string;
    author: {
      username: string;
      avatar: string;
    };
  };
}

const VideoCard = ({
  video: {
    title,
    thumbnail,
    video,
    author: { username, avatar },
  },
}: VideoCardProps) => {
  return (
    <View className="flex-col items-center px-4 mb-14">
      <Text className="text-2xl text-white">{title}</Text>
    </View>
  );
};

export default VideoCard;
