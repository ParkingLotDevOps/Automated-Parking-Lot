import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";

const BookedSpaceDetails = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text>Booked Space:</Text>

        <Text style={{ width: "50%" }}>Faculty of Computer Science Park A</Text>
      </View>

      <View style={styles.breakLine}></View>

      <View style={styles.row}>
        <Text style={styles.title}>Check-In Time:</Text>
        <View style={{ width: "35%" }}>
          <Text style={styles.detail}>{props.time}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <Text style={styles.title}>Estimated Duration:</Text>
        <View style={{ width: "35%" }}>
          <Text style={styles.detail}>{props.duration}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <Text style={styles.title}>Unique ID:</Text>
        <View styles={{width: "35%"}}>
        <Text style={styles.detail}>{props.id}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    width: "85%",
    alignItems: "center",
    borderRadius: 6,
    padding: 10,
    marginBottom: 20,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  breakLine: {
    height: 0.7,
    backgroundColor: "#A6AAB4",
    opacity: 0.5,
    width: "100%",
  },
  title: {
    fontWeight: "400",
    fontSize: 16,
  },
  detail: {
    fontWeight: "600",
    fontSize: 16,
  },
});

export default BookedSpaceDetails;
