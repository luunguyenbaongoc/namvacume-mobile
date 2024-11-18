import { View, Text, ColorValue } from "react-native";
import React, { FC, ReactNode } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type ScreenWrapper = {
  children?: ReactNode;
  bg?: ColorValue | undefined;
};

const ScreenWrapper: FC<ScreenWrapper> = ({ children, bg }) => {
  const { top } = useSafeAreaInsets();
  const paddingTop = top > 0 ? top + 5 : 30;
  return (
    <View style={{ flex: 1, paddingTop, backgroundColor: bg }}>{children}</View>
  );
};

export default ScreenWrapper;
