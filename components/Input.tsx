import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { FC } from "react";
import { theme } from "@/constants";
import { hp } from "@/helpers/common";

type InputProps = {
  containerStyle?: any;
  icon?: any;
  inputRef?: any;
  placeHolder?: string;
  secureTextEntry?: any;
  onChangeText?: (text: string) => void;
};

const Input: FC<InputProps> = ({
  containerStyle,
  icon,
  inputRef,
  placeHolder,
  secureTextEntry,
  onChangeText,
  ...props
}) => {
  const handleChangeText = (text: string) => {
    if (onChangeText) {
      onChangeText(text);
    }
  };
  return (
    <View style={[styles.container, containerStyle && containerStyle]}>
      {icon && icon}
      <TextInput
        style={{ flex: 1 }}
        placeholderTextColor={theme.colors.textLight}
        ref={inputRef && inputRef}
        placeholder={placeHolder}
        secureTextEntry={secureTextEntry}
        onChangeText={handleChangeText}
        {...props}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: hp(7.2),
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.4,
    borderColor: theme.colors.text,
    borderRadius: theme.radius.xxl,
    borderCurve: "continuous",
    paddingHorizontal: 18,
    gap: 12,
  },
});
