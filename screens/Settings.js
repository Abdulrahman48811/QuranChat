// import React from "react";
// import { View, Text } from "react-native";

// export default function Settings() {
//   return (
//     <View>
//       <Text>hello</Text>
//     </View>
//   );
// }

import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Touchable,
  Image,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import FeatherIcon from 'react-native-vector-icons/Feather';

const SECTIONS = [
  {
    header: "Prefrences",
    icon: "settings",
    items: [
      { icons: "globe", color: "#fe9400", label: "Language", type: "link" },
      {
        id: "darkMode",
        icon: "moon",
        color: "#007afe",
        label: "Dark Mode",
        type: "toggle",
      },
      {
        id: "wifi",
        icon: "wifi",
        color: "#007afe",
        label: "Use Wifi",
        type: "toggle",
      },
      { icon: "navigation", color: "#32c759", label: "Location", type: "link" },
      {
        id: "showCollaborators",
        icon: "users",
        color: "#32c759",
        label: "Show collaborators",
        type: "toggle",
      },
      {
        id: "accessibilityMode",
        icon: "airplay",
        color: "#fd2d54",
        label: "Accessibility mode",
        type: "toggle",
      },
    ],
  },
  {
    header: "Help",
    icon: "help-circle",
    items: [
      { icon: "flag", color: "#8e8d91", label: "Report Bug", type: "link" },
      { icon: "mail", color: "#007afe", label: "Contact Us", type: "link" },
    ],
  },
  {
    header: "Content",
    icon: "align-center",
    items: [
      { icon: "save", color: "#32c759", label: "Saved", type: "link" },
      { icon: "download", color: "#fd2d54", label: "Downloads", type: "link" },
    ],
  },
];

const PROFILE_PICTURE = "https://cdn.sanity.io/images/vleyd5bv/production/271848966f956012881d89afa883dfc54d87d7bb-1186x1186.jpg";

export default function Settings() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.profile}>
          <TouchableOpacity
            onPress={() => {
              //handle onPress
            }}
          >
            <View style={styles.profileAvatarWrapper}>
              <Image
                alt="Profile Picture"
                source={{ uri: PROFILE_PICTURE }}
                style={styles.profileAvatar}
              />

              <View style={styles.profileAction}>
                <FeatherIcon name='edit-3' size={15} color='#fff'/>
              </View>
            </View>
          </TouchableOpacity>
          <Text style={styles.profileName}>Abdul Mohd</Text>
          <Text style={styles.profileAddress}>
            48811 DD Street, RDTown, SD, 99112
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
  },
  profile: {
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  profileName: {
    marginTop: 20,
    fontSize: 19,
    fontWeight: "600",
    color: "#414d63",
    textAlign: "center",
  },
  profileAddress: {
    marginTop: 5,
    fontSize: 16,
    color: "#989898",
    textAlign: "center",
  },
  profileAvatar: {
    width: 72,
    height: 72,
    borderRadius: 9999,
  },
  profileAvatarWrapper: {
    position: 'relative'
  },
  profileAction: {
    width: 20,
    height: 20,
    borderRadius: 9999,
    backgroundColor: "#007bff",
    position: "absolute",
    right: -3,
    bottom: -10,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
