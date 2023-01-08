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

const topLogo = "https://cdn.sanity.io/images/vleyd5bv/production/642bce851ff2e944351b09b63ca084b59cbe6bf8-1080x1080.png"

const Home = () => {

    const navigation = useNavigation();

    useEffect(() => {
      navigation.setOptions({
        headerLeft: () => (
            <Text>Hi</Text>
            // <FontAwesome name="search" size={24} color="gray" style={{marginLeft: 15}}/>
        ),
        headerRight: () => (
            <Image 
            source={{ uri: topLogo }}
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
                style={styles.chatButtton}
            >
                <Entypo name="chat" size={24} color="grey"/>
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
        backgroundColor: "#fff",
    },
    chatButton: {
        backgroundColor: "blue",
        height: 50,
        width: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 25,

    },
})