import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  Button,
  View,
  ScrollView,
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
const background = require("../assets/background.png");
const bismillah = require("../assets/bismillah.jpg");
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
    <ScrollView style={styles.chatview} showsVerticalScrollIndicator={false}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={bismillah}
          style={{
            width: 400,
            height: 100,
            marginTop: -5,
            marginBottom: -5,
          }}
        />
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          border: "solid",
          borderRadius: 7,
          borderWidth: 1,
          marginTop: 15,
          marginRight: 20,
          marginLeft: 20,
          borderColor: "lightgray",
          alignItems: "flex-start",
        }}
      >
        <Text
          style={{
            marginTop: 5,
            marginLeft: 15,
            color: "gray",
          }}
        >
          Quran Chat:
        </Text>
        <Entypo name="globe" size={22} color="#da9100" style={styles.icon2}>
          <Text
            style={{
              color: "black",
              fontSize: 16,
            }}
          >
            {" "}
            Daily Reminders
          </Text>
        </Entypo>
        <Text
          style={{
            marginLeft: 15,
            marginTop: 7,
            marginBottom: 10,
            marginRight: 15,
          }}
        >
          Discuss important concerns with people around the world.
        </Text>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          border: "solid",
          borderRadius: 10,
          //   borderWidth: 1,
          marginTop: 15,
          marginRight: 20,
          marginLeft: 20,
          alignItems: "flex-start",
          backgroundColor: "#F5F3F3",
        }}
      >
        <Image
          source={background}
          style={{ width: 387.5, height: 150, marginRight: 30 }}
        ></Image>
        <Text
          style={{
            marginTop: 15,
            marginLeft: 15,
            fontSize: 15,
            color: "#1F75FE",
          }}
        >
          Discuss Your Questions?
        </Text>
        <Text style={{ marginTop: 10, marginLeft: 15, marginRight: 15 }}>
          Looking for a group of people to discuss your thoughts & questions
          with? Quran Chat allows you to learn something new everyday.
        </Text>
        <TouchableOpacity style={styles.goto}>
          <Text style={styles.gotoText}>
            Rules & Regulations{/* add fatiha beginning */}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ justifyContent: "space-between" }}>
        <Text
          style={{
            marginLeft: 20,
            marginTop: 15,
            marginRight: 20,
            fontSize: 24,
            fontWeight: "bold",
          }}
        >
          Pages
          {"                                                   "}
          <Ionicons
            name="ellipsis-horizontal-outline"
            size={24}
            style={{
              color: "#da9100",
              marginLeft: 2,
            }}
          />
        </Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View
          style={{
            border: "solid",
            borderRadius: 7,
            borderWidth: 1,
            marginTop: 15,
            marginRight: 20,
            marginLeft: 20,
            marginBottom: 10,
            borderColor: "lightgray",
            alignItems: "flex-start",
          }}
        >
          <Text
            style={{
              marginLeft: 20,
              marginRight: 20,
              marginBottom: 5,
              marginTop: 15,
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Join The Chat Room!
          </Text>
          <Text
            style={{
              marginLeft: 20,
              marginRight: 20,
              color: "gray",
              fontSize: 15,
            }}
          >
           <Ionicons name="alert-circle-outline" color="red" size={22}/> Note:
          </Text>

          <Text style={{ marginLeft: 20, marginTop: 5, marginRight: 20 }}>
            Please look over the Rules & Regulations {"\n"}upon entering the
            chat room. 
          </Text>
          <TouchableOpacity
          onPress={() => navigation.navigate("Chat")}
            style={{
              marginLeft: 70,
              marginRight: 30,
              marginTop: 15,
              borderRadius: 10,
              backgroundColor: "#4B4B4B",
              marginBottom: 15,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 15,
                fontWeight: "bold",
                marginTop: 10,
                marginBottom: 10,
                alignItems: "center",
                justifyContent: "center",
                marginLeft: 30,
                marginRight: 20,
              }}
            >
              Chat Room {"  "}
              <Ionicons name="chevron-forward-outline" size={20}/>
            </Text>
          </TouchableOpacity>
        </View>



        <View
          style={{
            border: "solid",
            borderRadius: 7,
            borderWidth: 1,
            marginTop: 15,
            marginRight: 20,
            marginLeft: 20,
            marginBottom: 10,
            borderColor: "lightgray",
            alignItems: "flex-start",
          }}
        >
          <Text
            style={{
              marginLeft: 20,
              marginRight: 20,
              marginBottom: 5,
              marginTop: 15,
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Need Some Help?
          </Text>
          <Text
            style={{
              marginLeft: 20,
              marginRight: 20,
              color: "gray",
              fontSize: 15,
            }}
          >
           <Ionicons name="information-circle-outline" color="red" size={22}/> Note:
          </Text>

          <Text style={{ marginLeft: 20, marginTop: 5, marginRight: 20 }}>
            Review your privacy settings in order to{"\n"}make your desired changes, if needed.
          </Text>
          <TouchableOpacity
          onPress={() => navigation.navigate("Settings")}
            style={{
              marginLeft: 80,
              marginRight: 30,
              marginTop: 15,
              borderRadius: 10,
              backgroundColor: "#4B4B4B",
              marginBottom: 15,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 15,
                fontWeight: "bold",
                marginTop: 10,
                marginBottom: 10,
                alignItems: "center",
                justifyContent: "center",
                marginLeft: 30,
                marginRight: 20,
              }}
            >
              Settings{"  "}
              <Ionicons name="chevron-forward-outline" size={20}/>
            </Text>
          </TouchableOpacity>
        </View>
       
      </ScrollView>
      {/* <View style={styles.container}>
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
      </View> */}
      {/* <TouchableOpacity
        onPress={() => navigation.navigate("Chat")}
        style={styles.chatButton}
      >
        <Entypo name="chat" size={22} color="orange" style={styles.icon1}>
          <Text style={styles.text}>
            {"  "}
            Chat Room
          </Text>
        </Entypo>
        <Entypo
          name="chevron-with-circle-right"
          size={24}
          color="white"
          style={{
            marginLeft: 270,
            top: -10,
          }}
        ></Entypo>
      </TouchableOpacity> */}
    </ScrollView>
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
    // paddingVertical: 12,
    // paddingHorizontal: 32,
    borderRadius: 15,
    backgroundColor: "lightgray",
    marginRight: 60,
    marginLeft: 60,
    marginBottom: 25,
  },
  text: {
    fontSize: 15,
    fontWeight: "900",
    fontFamily: "Arial",
    letterSpacing: 0.25,
    color: "white",
    float: "right",
  },
  icon1: {
    marginLeft: 6,
    top: 10,
  },
  icon2: {
    marginLeft: 15,
    marginTop: 5,
  },
  goto: {
    marginLeft: 70,
    marginTop: 15,
    borderRadius: 10,
    backgroundColor: "#4B4B4B",
    marginBottom: 15,
  },
  gotoText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 60,
    marginRight: 60,
  },
});
