import React, { useEffect } from "react";
import {
    StyleSheet,
    Text,
    Button,
    View,
    Image,
    TouchableOpacity,
  } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { signOut } from "firebase/auth";
// import { FontAwesome } from "expo-vector-icons";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { auth } from "../config/firebase";

const topLogo = require("../assets/logo.png");

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
            backgroundColor: '#F5F3F3'
          },
        headerLeft: () => (
            <Image 
            source={topLogo}
            style={{
                width: 40,
                height: 40,
                marginLeft: 15,
            }}/>

            ),
        });
    }, [navigation]);
    return (
        <View style={styles.chatview}>
            <View style={styles.container}>

                <Text>HI</Text>
                
            </View>
            <Text style={{top: -65, flex:5, fontSize: 15, color:"#4C4646", }}>Welcome To The Main Chat Room!</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("Chat")}
                style={styles.chatButton}
                >
                <Entypo name="chat" size={24} color="blue"/>
            </TouchableOpacity>
        </View>
        )
}

export default Home;

const styles = StyleSheet.create({
    chatview: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        backgroundColor: "white",
        flexDirection: 'row',
    },
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        backgroundColor: "white",
    },
    chatButton: {
        backgroundColor: "yellow",
        height: 50,
        width: 50,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "orange",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: .9,
        shadowRadius: 8,
        marginRight: 20,
        marginBottom: 50,

    },
})