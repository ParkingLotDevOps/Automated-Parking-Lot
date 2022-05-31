import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useGlobalState, setGlobalState } from "../myGlobalState";

const BookedSpaceDetails = (props) => {
  const [isDone, setIsDone] = useState(false);

  const duration = useGlobalState("duration")[0];
  let price = useGlobalState("price")[0];
  price = parseInt(duration) * parseInt(price);

  setTimeout(() => {
    setGlobalState("needToPay", true);
    setIsDone(true);
  }, 3000);

  return (
    <View style={styles.container}>
      {isDone && (
        <View>
          <Text> Awesome! You are done parking</Text>
        </View>
      )}
      <View style={styles.row}>
        <Text>Booked Space:</Text>

        <Text style={{ width: "50%" }}>{useGlobalState("title")[0]}</Text>
      </View>

      <View style={styles.breakLine}></View>

      <View style={styles.row}>
        <Text style={styles.title}>Check-In Time:</Text>
        <View style={{ width: "35%" }}>
          <Text style={styles.detail}>{useGlobalState("checkInTime")[0]}</Text>
        </View>
      </View>

      <View style={styles.row}>
        <Text style={styles.title}>Check-Out Time:</Text>
        <View style={{ width: "35%" }}>
          <Text style={styles.detail}>{useGlobalState("checkOutTime")[0]}</Text>
        </View>
      </View>
      {isDone && <View style={styles.breakLine}></View>}
      {isDone && (
        <View style={styles.row}>
          <Text style={styles.title}>Total</Text>
          <View style={{ width: "35%" }}>
            <Text style={styles.detail}>{price + " LEI"}</Text>
          </View>
        </View>
      )}
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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
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
