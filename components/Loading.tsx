import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { theme } from "@/constants";

type LoadingProps = {
  size?: any;
  color?: any;
};

const Loading: FC<LoadingProps> = ({
  color = theme.colors.primary,
  size = "large",
}) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({});
