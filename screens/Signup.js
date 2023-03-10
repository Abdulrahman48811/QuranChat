import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Alert,
} from "react-native";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
const backImage = require("../assets/logo.png");

export default function Signup({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onHandleSignup = () => {
    if (email != "" && password !== "") {
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => console.log("Sign-Up Success"))
        .catch((err) => Alert.alert("Login error", err.message));
    }
  };

  return (
    <View style={styles.container}>
        <Image source={backImage} style={styles.backImage} />
        <View style={styles.whiteSheet} />
        <SafeAreaView style={styles.form}>
            <Text style={styles.title}>Sign Up</Text>
            <TextInput
            style={styles.input}
            placeholder="Enter Email"
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoFocus={true}
            value={email}
            onChangeText={(text) => setEmail(text)}
            />
            <TextInput
            style={styles.input}
            placeholder="Enter Password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            textContentType="password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity style={styles.button} onPress={onHandleSignup}>
                <Text style={{fontWeight: "bold", color: "#fff", fontSize: 18}}>Sign Up</Text>
            </TouchableOpacity>
            <View style={{marginTop: 20, flexDirection: "row", alignItems: "center", alignSelf: "center"}}>
                <Text style={{color: "gray", fontWeight: "600", fontSize: 14}}>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text style={{color: "#da9100", fontWeight: "600", fontSize: 14}}> Log In</Text>
                </TouchableOpacity>
                </View>
        </SafeAreaView>
        <Text
          style={{
            color: "#da9100",
            fontSize: 18,
            fontFamily: "Cochin",
            fontWeight: "bold",
            marginBottom: 35,
            padding: 15,
            textAlign: 'center',
          }}
        >
          <Text style={{ color: "#4C4646" }}>Welcome To </Text>Quran Chat
          <Text style={{ color: "#4C4646" }}>!</Text>
        </Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "fff",
    },
    title: {
        fontFamily: "Cochin",
        fontSize: 36,
        fontWeight: "bold",
        color: "#da9100",
        alignSelf: "center",
        paddingBottom: 24,
        paddingTop: 40,
    },
    input: {
        backgroundColor: "#f6f7fb",
        height: 58,
        marginBottom: 20,
        fontSize: 16,
        borderRadius: 10,
        padding: 12,
    },
    backImage: {
        width: 200,
        height: 200,
        position: "absolute",
        alignSelf: "center",
        top: 41,
        resizeMode: "cover",
    },
    whiteSheet: {
        width: "100%",
        height: "72%",
        position: "absolute",
        bottom: 0,
        backgroundColor: "#fff",
        borderTopLeftRadius: 60,
    },
    form: {
        flex: 1,
        justifyContent: "center",
        marginHorizontal: 30,
    },
    button: {
        backgroundColor: "#da9100",
        height: 50,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
    },
})