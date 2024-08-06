import { View, Text, Image, StyleSheet } from "react-native";

import {
  Nunito_400Regular,
  Nunito_600SemiBold,
} from "@expo-google-fonts/nunito";
import { Raleway_700Bold } from "@expo-google-fonts/raleway";

import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import { router } from "expo-router";
import { commonStyles } from "@/styles/common/common.styles";
import { onboardingSwiperData } from "@/constants/constants";
import { styles } from "@/styles/onboarding/onboard";

export default function WelcomeIntroScreen() {
  let [fontsLoaded, fontError] = useFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const renderItem = ({ item }: { item: onboardingSwiperDataType }) => (
    <LinearGradient
      colors={["#e5ecf9", "#f6f7f9", "#e8eef9"]}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <View style={{ marginTop: 80 }}>
        <Image source={item.image} />
        <Text style={[commonStyles.title, { fontFamily: "Raleway_700Bold" }]}>
          {item.title}
        </Text>
        <View style={{ marginTop: 15 }}>
          <Text
            style={[
              commonStyles.description,
              { fontFamily: "Nunito_400Regular" },
            ]}
          >
            {item.description}
          </Text>
          <Text
            style={[
              commonStyles.description,
              { fontFamily: "Nunito_400Regular" },
            ]}
          >
            {item.sortDescrition}
          </Text>
          <Text
            style={[
              commonStyles.description,
              { fontFamily: "Nunito_400Regular" },
            ]}
          >
            {item.sortDescrition2}
          </Text>
        </View>
      </View>
    </LinearGradient>
  );

  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={onboardingSwiperData}
      onDone={() => {
        router.push("/login");
      }}
      onSkip={() => {
        router.push("/login");
      }}
      renderNextButton={() => (
        <View style={styles.welcomeButton}>
          <Text
            style={[
              commonStyles.buttonText,
              { fontFamily: "Nunito_600SemiBold" },
            ]}
          >
            Next
          </Text>
        </View>
      )}
      renderDoneButton={() => (
        <View style={styles.welcomeButton}>
          <Text
            style={[
              commonStyles.buttonText,
              { fontFamily: "Nunito_600SemiBold" },
            ]}
          >
            Done
          </Text>
        </View>
      )}
      showSkipButton={false}
      dotStyle={commonStyles.dot}
      bottomButton={true}
      activeDotStyle={commonStyles.activeDot}
    />
  );
}
