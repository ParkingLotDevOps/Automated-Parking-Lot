import { View, Text, StyleSheet, Dimensions } from "react-native";
import React, { useState } from "react";
import ParkDetails from "../../components/ParkDetails/ParkDetails";
import BookedSpaceDetails from "../../components/BookedSpaceDetails";
import MainButton from "../../components/MainButton/mainButton";
import { useNavigation } from "@react-navigation/native";
import { useGlobalState, setGlobalState } from "../../components/myGlobalState";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

const ActiveBooking = () => {
  const [time, setTime] = useState(useGlobalState("checkInTime")[0]);
  const [selectedSpace, setSelectedSpace] = useState(
    useGlobalState("selectedSpace")[0]
  );
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        loadingEnabled
        showsUserLocation
        showsMyLocationButton
        showsPointsOfInterest
        showsCompass
        toolbarEnabled
      />
      <View style={[styles.miniContainer, { top: 100 }]}>
        <Text>{selectedSpace}</Text>
        <ParkDetails
          title={useGlobalState("title")[0]}
          details={selectedSpace}
        ></ParkDetails>
      </View>
      <View style={[styles.miniContainer, { bottom: 150 }]}>
        <BookedSpaceDetails />
      </View>

      <View style={[styles.miniContainer, { bottom: 100 }]}>
        <MainButton
          text="View Booking Details"
          onPress={() => navigation.navigate()}
        />
      </View>
    </View>
  );
  {
    /* <View
        style={[
          styles.container,
          { position: "absolute", top: 0, left: 0, right: 0, zIndex: 1 },
        ]}
      >
        <View style={styles.wrapperContainer}>
          <View style={styles.mainContainer}>
            <View style={styles.drept}>
              <ParkDetails
                title="Faculty of Computer Science Park A"
                details="Space 4c"
              ></ParkDetails>
            </View>

            <BookedSpaceDetails time={time} duration="6 hours" />

            <MainButton
              text="View Booking Details"
              onPress={() => navigation.navigate()}
            ></MainButton>
            <View></View>
          </View>
        </View>
      </View> */
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  miniContainer: {
    width: "100%",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
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
