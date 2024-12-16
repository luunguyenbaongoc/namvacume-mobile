import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import React, { FC } from "react";
import { hp } from "@/helpers/common";
import { theme } from "@/constants";
import { Image, ImageStyle } from "expo-image";

interface AvatarProps {
  uri: string;
  size?: number;
  rounded?: number;
  style?: StyleProp<ImageStyle> | undefined;
}

const Avatar: FC<AvatarProps> = ({
  size = hp(4.5),
  uri,
  rounded = theme.radius.md,
  style = {},
}) => {
  return (
    <Image
      source={uri}
      transition={100}
      style={[
        styles.avatar,
        { height: size, width: size, borderRadius: rounded },
        style,
      ]}
    />
  );
};

export default Avatar;

const styles = StyleSheet.create({
  avatar: {
    borderCurve: "continuous",
    borderWidth: 1,
    borderColor: theme.colors.darkLight,
  },
});
