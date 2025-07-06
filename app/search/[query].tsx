import { View, Text, FlatList, Image, RefreshControl } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "@/constants";
import SearchInput from "@/components/SearchInput";
import EmptyState from "@/components/EmptyState";
import VideoCard from "@/components/VideoCard";

import { searchPosts } from "@/lib/appwrite";
import useAppwrite from "@/lib/useAppwrite";
import { useLocalSearchParams } from "expo-router";

// Define the type for posts from Appwrite
type Post = {
  $id: string;
  title: string;
  thumbnail: string;
  video: string;
  author?: {
    username: string;
    avatar: string;
  } | null;
};

const Search = () => {
  const { query } = useLocalSearchParams();
  const queryString = Array.isArray(query) ? query[0] : query;

  const { data: posts, refetch } = useAppwrite(() =>
    searchPosts(queryString)
  ) as {
    data: Post[];
    refetch: () => void;
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <VideoCard video={item} />}
        ListHeaderComponent={() => (
          <View className="my-6 px-4">
            <Text className="font-pmedium text-sm text-gray-100">
              Search Results
            </Text>
            <Text className="font-psemibold text-2xl text-white">
              {queryString}
            </Text>

            <View className="mt-6 mb-8">
              <SearchInput initialQuery={queryString} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="No videos found for this search query"
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Search;
