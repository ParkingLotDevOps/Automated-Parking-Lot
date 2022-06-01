import { View, Text, StyleSheet } from "react-native";
import React from "react";
import SideMenuBar from "../components/SideMenuBar";
import ProfilePicture from "react-native-profile-picture";

import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Settings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SideMenuBar />
        <Text style={styles.headerTitle}>Settings</Text>
      </View>
      <View
        style={{
          width: "85%",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={styles.choice}>
          <Ionicons name="notifications-circle" size={40} color="#E16162" />
          <Text>Notifications</Text>
        </View>
        <View style={styles.choice}>
          <MaterialIcons name="account-circle" size={40} color="#E16162" />
          <Text>Account</Text>
        </View>
        <View style={styles.choice}>
          <MaterialIcons name="language" size={40} color="#E16162" />
          <Text>Language</Text>
        </View>
        <View style={styles.choice}>
          <AntDesign name="questioncircle" size={40} color="#E16162" />
          <Text>Terms of use</Text>
        </View>
        <View style={styles.choice}>
          <MaterialIcons name="privacy-tip" size={40} color="#E16162" />
          <Text>Privacy Policy</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#004643",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontWeight: "700",
    color: "#FFFFFE",
    fontSize: 18,
  },
  header: {
    flexDirection: "row",
    width: "85%",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 50,
  },
  choice: {
    width: "40%",
    margin: "5%",
    aspectRatio: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Settings;
