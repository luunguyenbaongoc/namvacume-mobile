import { View, Text, StyleSheet } from "react-native";
import React, { FC } from "react";
import ColorList from "../../components/ColorList";
import ScreenWrapper from "@/components/ScreenWrapper";
import Home from "@/assets/icons/Home";
import { theme } from "@/constants";
import Icon from "@/assets/icons/index";
import { StatusBar } from "expo-status-bar";
import BackButton from "@/components/BackButton";
import { hp, wp } from "@/helpers/common";
import Input from "@/components/Input";
import Button from "@/components/Button";

type LoginProps = {};

const Login: FC<LoginProps> = ({}) => {
  const handleLogin = () => {};
  return (
    <ScreenWrapper>
      <StatusBar style="dark"></StatusBar>
      <View style={styles.container}>
        <Icon
          name="lock"
          strokeWidth={2.5}
          size={26}
          color={theme.colors.text}
        />
        <View>
          <Text style={styles.welcomeText}>Đăng nhập</Text>
        </View>

        <View style={styles.form}>
          {/* <Text style={{ fontSize: hp(1.5), color: theme.colors.text }}>
            Vui lòng đăng nhập để tiếp tục
          </Text> */}
          <Input
            icon={<Icon name="call" size={26} strokeWidth={1.6} />}
            placeHolder="Nhập số điện thoại"
            onChangeText={(text) => {
              console.log(text);
            }}
          />
          <Input
            icon={<Icon name="lock" size={26} strokeWidth={1.6} />}
            placeHolder="Nhập mật khẩu"
            secureTextEntry
            onChangeText={(text) => {
              console.log(text);
            }}
          />
          <Text style={styles.forgotPassword}>Quên mật khẩu?</Text>
          <Button title="Đăng nhập" onPress={handleLogin}></Button>
          {/* <View style={styles.footer}>
            <Text style={styles.footerText}>Nam Robot</Text>
          </View> */}
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 45,
    paddingHorizontal: wp(5),
  },
  welcomeText: {
    fontSize: hp(4),
    fontWeight: theme.fonts.bold as any,
    color: theme.colors.text,
  },
  form: {
    gap: 25,
  },
  forgotPassword: {
    textAlign: "right",
    fontWeight: theme.fonts.semibold as any,
    color: theme.colors.text,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  footerText: {
    textAlign: "center",
    color: theme.colors.text,
    fontSize: hp(1.6),
  },
});
