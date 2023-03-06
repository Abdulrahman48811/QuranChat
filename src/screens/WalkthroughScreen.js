import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import Home from "../../screens/Home";
import Swiper from "react-native-swiper";
import Images from "../images";
import { useNavigation } from "@react-navigation/native";

export default function WalkthroughScreen() {
  const navigation = useNavigation();
  const walkthroughList = [
    {
      id: 1,
      title: "Chat Room Rules",
      image: Images.selfie,
      text: "○   No personal attacks or harrassment \n○   No personal business & promotions \n○   No spamming and no trolling \n○   No bad language (cuss/swear words)",
    },
    { id: 2, title: "App Regulations", image: Images.searching },
    { id: 3, title: "Enjoy The App", image: Images.instashot },
  ];
  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: "#F5F3F3",
      },
      headerRight: () => <TouchableOpacity style={{}}></TouchableOpacity>,
    });
  }, [navigation]);
  return (
    <View style={{ flex: 1, backgroundColor: "#FFF" }}>
      <Swiper
        paginationStyle={{
          position: "absolute",
          bottom: "20%",
        }}
        activeDotColor="#da9100"
        activeDotStyle={{ width: 20, height: 8 }}
      >
        {walkthroughList.map((i) => {
          return (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Text style={styles.titleStyle}>{i.title}</Text>
              <Text style={styles.textStyle}>{i.text}</Text>
              <Image style={styles.imageContainer} source={i.image} />
            </View>
          );
        })}
      </Swiper>
      <View
        style={{
          position: "absolute",
          bottom: "5%",
          left: 0,
          right: 0,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.textStartedStyle}>Got It!</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{ color: "gray", fontWeight: "bold" }}
            onPress={() => navigation.navigate("Chat")}
          >
            Join Chat
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    // marginTop: 50,
    marginBottom: 40,
  },
  textStyle: {
    fontSize: 18,
    // marginTop: 10,
    // textAlign: "center",
    // marginBottom: 30,
    marginRight: 20,
    // marginLeft: 10,
    lineHeight: 39,
  },
  imageContainer: {
    height: "50%",
    width: "80%",
    resizeMode: "contain",
    marginHorizontal: 15,
  },
  buttonStyle: {
    backgroundColor: "#da9100",
    paddingHorizontal: 90,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  textStartedStyle: {
    fontWeight: "bold",
  },
});
