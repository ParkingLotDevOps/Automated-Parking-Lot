import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import ParkDetails from "../../components/ParkDetails/ParkDetails";
import BookedSpaceDetails from "../../components/BookedSpaceDetails";
import MainButton from "../../components/MainButton/mainButton";
import { useNavigation } from "@react-navigation/native";
const ActiveBooking = () => {
  const [time, setTime] = useState("11:00 AM");
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.wrapperContainer}>
        <View style={styles.mainContainer}>
          <View style={styles.drept}>
            <ParkDetails
              title="Faculty of Computer Science Park A"
              details="Space 4c"
            ></ParkDetails>
          </View>

          <BookedSpaceDetails time={time} duration="6 hours" />

          <MainButton text="View Booking Details" onPress={() => navigation.navigate()}></MainButton>
          <View></View>
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
    width: "100%",
  },
  wrapperContainer: {
    width: "100%",
    marginTop: 70,
  },
  mainContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  drept: {
    width: "100%",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 200,
  },
});
export default ActiveBooking;
