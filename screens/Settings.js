// import React from "react";
// import { View, Text } from "react-native";

// export default function Settings() {
//   return (
//     <View>
//       <Text>hello</Text>
//     </View>
//   );
// }

// import React from "react";
// import { View, Text, SafeAreaView, ScrollView, StyleSheet } from "react-native";

const SECTIONS = [
  {
    header: "Prefrences",
    icon: "settings",
    items: [
      { icons: "globe", color: "#fe9400", label: "Language", type: "link" },
      {
        id: 'darkMode',
        icon: 'moon',
        color: "#007afe",
        label: "Dark Mode",
        type: "toggle",
      },
      {
        id: "wifi",
        icon: 'wifi',
        color: "#007afe",
        label: "Use Wifi",
        type: "toggle",
      },
      { icon: "navigation", color: "#32c759", label: "Location", type: "link" },
      {
        id: 'showCollaborators',
        icon: 'users',
        color: "#32c759",
        label: "Show collaborators",
        type: "toggle",
      },
      {
        id: 'accessibilityMode',
        icon: 'airplay',
        color: "#fd2d54",
        label: "Accessibility mode",
        type: "toggle",
      },
    ],
  },
  {
    header: 'Help',
    icon: "help-circle",
    items: [
      { icon: 'flag', color: '#8e8d91', label: 'Report Bug', type: 'link'},
      { icon: 'mail', color: '#007afe', label: 'Contact Us', type: 'link'},
    ],
  },

];
