import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  Button,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { signOut } from "firebase/auth";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { auth } from "../config/firebase";
import Ionicons from "@expo/vector-icons/Ionicons";

const topLogo = require("../assets/logo.png");
const fatiha = require("../assets/quranimg.jpeg");

const onSignOut = () => {
  signOut(auth).catch((error) => console.log(error));
};

const Home = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        // <Text>Hi</Text>
        <TouchableOpacity
          style={{
            marginRight: 10,
          }}
          onPress={onSignOut}
        >
          <AntDesign
            name="logout"
            size={24}
            color={"#818589"}
            style={{ marginRight: 10 }}
          />
        </TouchableOpacity>
        // <FontAwesome name="search" size={24} color="gray" style={{marginLeft: 15}}/>
      ),
      headerStyle: {
        backgroundColor: "#F5F3F3",
      },
      headerLeft: () => (
        <Image
          source={topLogo}
          style={{
            width: 40,
            height: 40,
            marginLeft: 15,
          }}
        />
      ),
    });
  }, [navigation]);
  return (
    <View style={styles.chatview}>
      <View style={styles.container}>
        <Image
          source={fatiha}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 280,
            height: 170,
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Chat")}
        style={styles.chatButton}
      >
        <Entypo name="chat" size={22} color="orange" style={styles.icon1}>
          <Text style={styles.text}>
            {"  "}
            Chat Room{"                                 "}
          </Text><Entypo
              name="chevron-right"
              size={22}
              color="white"
            ></Entypo></Entypo>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  chatview: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    // justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
  },
  chatButton: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 15,
    backgroundColor: "lightgray",
    marginRight: 35,
    marginLeft: 35,
    marginBottom: 50,
  },
  text: {
    fontSize: 15,
    fontWeight: "900",
    fontFamily: "Arial",
    letterSpacing: 0.25,
    color: "white",
  },
  icon1: {
    marginLeft: -25,
  },
});
