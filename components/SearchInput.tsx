import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  TextInputProps,
} from "react-native";
import React, { useState } from "react";

import { icons } from "@/constants";

interface SearchInputProps extends TextInputProps {
  title: string;
  value: string;
  placeholder?: string;
  handleChangetext: (text: string) => void;
  otherStyles?: string;
}

const SearchInput = ({
  title,
  value,
  placeholder,
  handleChangetext,
  otherStyles,
  ...props
}: SearchInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View
      className={`border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl items-center flex-row space-x-4 ${
        isFocused ? "border-secondary" : ""
      }`}
    >
      <TextInput
        className="text-base mt-0.5 text-white flex-1 font-pregular"
        value={value}
        onChangeText={handleChangetext}
        placeholder="Search for a video topic"
        placeholderTextColor="#7b7b8b"
        secureTextEntry={title === "Password" && !showPassword}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />

      <TouchableOpacity>
        <Image
          source={icons.search}
          className="w-5 h-5"
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
