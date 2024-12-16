import { Image, StyleSheet, Text, View } from "react-native";
import React, { FC, useEffect } from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import { StatusBar } from "expo-status-bar";
import { hp, wp } from "@/helpers/common";
import { theme } from "@/constants";
import { Redirect, router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { STORAGE_KEY } from "@/utils/constants";

type WelcomeProps = {};

const Welcome: FC<WelcomeProps> = ({}) => {
  const checkAccessToken = async () => {
    const access_token = await AsyncStorage.getItem(STORAGE_KEY.ACCESS_TOKEN);    
    if (access_token) {
      router.push("/(tabs)");
    } else {
      router.push("/(tabs)");
    }
  };

  useEffect(() => {
    checkAccessToken();
  }, []);

  // return <Redirect href="/(auth)" />;
  return (
    <ScreenWrapper bg={"white"}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Image
          style={styles.welcomeImage}
          source={require("../assets/images/welcome.png")}
          resizeMode="contain"
        />

        <View style={{ gap: 20 }}>
          <Text style={styles.title}>Nam Robot</Text>
          <Text style={styles.punchLine}>
            Where you can find everything to make your home clean as your mama
            always do.
          </Text>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "white",
    paddingHorizontal: wp(4),
  },
  welcomeImage: {
    height: hp(30),
    width: wp(100),
    alignSelf: "center",
  },
  title: {
    color: theme.colors.text,
    fontSize: hp(4),
    textAlign: "center",
    fontWeight: theme.fonts.extraBold as any,
  },
  punchLine: {
    textAlign: "center",
    paddingHorizontal: wp(10),
    fontSize: hp(1.7),
    color: theme.colors.text,
  },
});
