import React, { createContext, useContext, useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, ActivityIndicator } from "react-native";
import { onAuthStateChanged } from "firebase/auth";
import Chat from "./screens/Chat";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Settings from "./screens/Settings";
import Signup from "./screens/Signup";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { auth } from "./config/firebase";
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Stack = createStackNavigator();
const AuthenticatedUserContext = createContext({});
const Tab = createBottomTabNavigator();
const homeName = "Home";
const settingsName = "Settings";
const chatName = "Chat";

const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <AuthenticatedUserContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};

function ChatStack() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === chatName) {
              iconName = focused
                ? "chatbox-ellipses"
                : "chatbox-ellipses-outline";
            } else if (rn === settingsName) {
              iconName = focused ? "settings" : "settings-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        // eslint-disable-next-line
        tabBarOptions={{
          activeTintColor: "#da9100",
          inactiveTintColor: "gray",
          labelStyle: { paddingBottom: 1, fontSize: 10 },
          style: { padding: 10, height: 70 },
        }}
      >
        {/* <Stack.Navigator defaultScreenOptions={Home} > */}
        <Tab.Screen name={homeName} component={Home} />
        <Stack.Screen name="Chat" component={Chat} />
        <Tab.Screen name={settingsName} component={Settings} />
      </Tab.Navigator>
      {/* /* </Stack.Navigator> */}
    </NavigationContainer>
  );
}

function AuthStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        defaultScreenOptions={Login}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function RootNavigator() {
  const { user, setUser } = useContext(AuthenticatedUserContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (authenticatedUser) => {
      authenticatedUser ? setUser(authenticatedUser) : setUser(null);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [user]);
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    // <NavigationContainer>
    user ? <ChatStack /> : <AuthStack />
    // </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthenticatedUserProvider>
      <RootNavigator />
    </AuthenticatedUserProvider>
  );
}
