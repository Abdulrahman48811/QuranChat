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
// import { FontAwesome } from "expo-vector-icons";
import { Entypo } from "@expo/vector-icons";


const topLogo = require("../assets/logo.png");

const Home = () => {

    const navigation = useNavigation();

    useEffect(() => {
      navigation.setOptions({
        headerLeft: () => (
            <Text>Hi</Text>
            // <FontAwesome name="search" size={24} color="gray" style={{marginLeft: 15}}/>
        ),
        headerStyle: {
            backgroundColor: '#F5F3F3'
          },
        headerRight: () => (
            <Image 
            source={topLogo}
            style={{
                width: 40,
                height: 40,
                marginRight: 15,
            }}/>

            ),
        });
    }, [navigation]);
    return (
        <View style={styles.container}>
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
    container: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "flex-end",
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