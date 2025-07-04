import { View, Text } from "react-native";
import React from "react";

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
  const username = author?.username || "Unknown";
  const avatar = author?.avatar || "";

  return (
    <View className="flex-col items-center px-4 mb-14">
      <Text className="text-2xl text-white">{title}</Text>
    </View>
  );
};

export default VideoCard;
