import { TouchableOpacity, Text } from "react-native";
import React from "react";

interface CustomButtonProps {
  title: string;
  handlePress: () => void;
  containerStyles?: string;
  textStyles?: string;
  isLoading?: boolean;
}

/**
 * A customizable button component.
 *
 * @param title - The text to display on the button.
 * @param handlePress - The function to call when the button is pressed.
 * @param containerStyles - Optional additional styles for the button container.
 * @param textStyles - Optional additional styles for the button text.
 * @param isLoading - If true, the button will be disabled and have reduced opacity.
 */

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
