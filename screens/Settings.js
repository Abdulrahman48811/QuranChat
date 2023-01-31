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
  Switch,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import FeatherIcon from "react-native-vector-icons/Feather";

const SECTIONS = [
  {
    header: "Prefrences",
    icon: "settings",
    items: [
      { icon: "globe", color: "#fe9400", label: "Language", type: "link" },
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

const PROFILE_PICTURE = "https://i.pravatar.cc/300";

export default function Settings() {
  const [form, setForm] = React.useState({
    darkMode: false,
    wifi: true,
    showCollaborators: true,
    accessibilityMode: false,
  });

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
                <FeatherIcon name="edit-3" size={15} color="#fff" />
              </View>
            </View>
          </TouchableOpacity>
          <Text style={styles.profileName}>Abdul Mohd</Text>
          <Text style={styles.profileAddress}>
            48811 DD Street, RDTown, SD, 99112
          </Text>
        </View>

        {SECTIONS.map(({ header, items }) => (
          <View style={styles.section} key={header}>
            <Text style={styles.sectionHeader}>{header}</Text>

            {items.map(({ id, label, type, icon, color }) => (
              <TouchableOpacity
                key={icon}
                onPress={() => {
                  //handle onPress
                }}
              >
                <View style={styles.row}>
                  <View style={[styles.rowIcon, { backgroundColor: color }]}>
                    <FeatherIcon name={icon} color="#fff" size={18} />
                  </View>
                  <Text style={styles.rowLabel}>{label}</Text>

                  <View style={{ flex: 1 }} />

                  {type === "toggle" && (
                    <Switch
                      value={form[id]}
                      onValueChange={(value) =>
                        setForm({ ...form, [id]: value })
                      }
                    />
                  )}

                  {type === "link" && (
                    <FeatherIcon
                      name="chevron-right"
                      color="#0c0c0c"
                      size={22}
                    />
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ))}
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
    position: "relative",
  },
  profileAction: {
    width: 20,
    height: 20,
    borderRadius: 9999,
    backgroundColor: "#007bff",
    position: "absolute",
    right: -2.5,
    bottom: -8,
    alignItems: "center",
    justifyContent: "center",
  },
  section: {
    paddingHorizontal: 24,
  },
  sectionHeader: {
    paddingVertical: 12,
    fontSize: 12,
    fontWeight: "600",
    color: "#9e9e9e",
    textTransform: "uppercase",
    letterSpacing: 1.1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 50,
    backgroundColor: "lightgray",
    borderRadius: 8,
    marginBottom: 12,
    paddingHorizontal: 12,
  },
  rowLabel: {
    fontSize: 16,
    color: "#0c0c0c",
  },
  rowIcon: {
    width: 32,
    height: 32,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
});
