import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { theme } from "@/constants";
import { hp } from "@/helpers/common";
import Loading from "./Loading";

type ButtonProps = {
  buttonStyle?: any;
  textStyle?: any;
  title?: string;
  onPress?: () => void;
  loading?: boolean;
  hasShadow?: boolean;
};

const Button: FC<ButtonProps> = ({
  buttonStyle,
  loading = false,
  onPress,
  textStyle,
  title,
  hasShadow = true,
}) => {
  const handleOnPress = () => {
    if (onPress) {
      onPress();
    }
  };

  const shadowStyle = {
    shadowColor: theme.colors.dark,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    evevation: 4,
  };

  if (loading) {
    return (
      <View style={[styles.button, buttonStyle, { backgroundColor: "white" }]}>
        <Loading />
      </View>
    );
  }

  return (
    <Pressable
      onPress={handleOnPress}
      style={[styles.button, buttonStyle, hasShadow && shadowStyle]}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    height: hp(6.6),
    justifyContent: "center",
    alignItems: "center",
    borderCurve: "continuous",
    borderRadius: theme.radius.xl,
  },
  text: {
    fontSize: hp(2.5),
    color: "white",
    fontWeight: theme.fonts.bold as any,
  },
});
