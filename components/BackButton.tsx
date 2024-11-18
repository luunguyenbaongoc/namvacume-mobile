import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import Icon from "@/assets/icons/index";
import Home from "@/assets/icons/Home";
import { theme } from "@/constants";
import { useRouter } from "expo-router";

type BackButtonProps = {
  size?: any;
};

const BackButton: FC<BackButtonProps> = ({ size = 26 }) => {
  const router = useRouter();
  return (
    <Pressable onLongPress={() => router.back()} style={styles.button}>
      <Icon
        name="arrowLeft"
        strokeWidth={2.5}
        size={size}
        color={theme.colors.text}
      />
    </Pressable>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  button: {
    alignSelf: "flex-start",
    padding: 5,
    borderRadius: theme.radius.sm,
    backgroundColor: "rgba(0,0,0,0.07)",
  },
});
