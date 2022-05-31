import MapView, { Marker } from "react-native-maps";
import { View, StyleSheet, Dimensions, Image, Text } from "react-native";
import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import img from "../../../assets/fii.png";
import img2 from "../../../assets/iconPark.png";
import { useNavigation } from "@react-navigation/native";
import { useGlobalState } from "../../components/myGlobalState";
import BookedSpaceDetails from "../../components/BookedSpaceDetails";
import ParkDetails from "../../components/ParkDetails"

const height = Dimensions.get("window").height * 0.95;
const edgePadding = { bottom: 40, right: 0, left: 0, top: 25 };
const ImageUri = Image.resolveAssetSource(img).uri;
const ImageUri2 = Image.resolveAssetSource(img2).uri;

var lat = 47.17387201124383;
var long = 27.574846627023366;

export const ActiveBooking = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isActive, setIsActive] = useState(useGlobalState("isActive")[0]);


  var XMLHttpRequest = require("xhr2");

  const navigation = useNavigation();
 


  const [region, setRegion] = useState({
    latitude: lat,
    longitude: long,
    latitudeDelta: 0.006,
    longitudeDelta: 0.006,
  });

  const [shouldShow, setShouldShow] = useState(false);

  const [state, setState] = useState({ markers: [] });
  let mapMarkers = () => {
    return state.markers.map((marker) => (
      <Marker
        key={marker.id}
        coordinate={{ latitude: marker.lat, longitude: marker.lng }}
        title={marker.name}
        description={marker.description}
        image={{ uri: ImageUri2, scale: 1 }}
        onPress={() => setShouldShow(!shouldShow)}
        onCalloutPress={() => setShouldShow(!shouldShow)}
      >
        <MapView.Callout
          tooltip={false}
          style={{
            backgroundColor: "#fffffe",
            borderRadius: 10,
            zIndex: 10,
          }}
        >
          <View>
            <Text style={{ color: "#E16162", padding: 6 }}>
              {marker.title}
              {"\n"}
              {marker.description}
            </Text>
          </View>
        </MapView.Callout>
      </Marker>
    ));
  };
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({
        timeInterval: 10000,
        accuracy: Location.Accuracy.Balanced,
      });

      setLocation(location);
      lat = location.coords.latitude;
      long = location.coords.longitude;
      setRegion({
        latitude: lat,
        longitude: long,
        latitudeDelta: 0.006,
        longitudeDelta: 0.006,
      });
    })();
  }, []);

  

  let text;

  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
    lat = Number(JSON.stringify(location.coords.latitude));
    long = Number(JSON.stringify(location.coords.longitude));
  }

  return (
    <>
      <MapView
        style={styles.map}
        provider="google"
        loadingEnabled
        showsUserLocation
        showsMyLocationButton
        showsPointsOfInterest
        showsCompass
        toolbarEnabled
        mapPadding={edgePadding}
        region={region}
        onRegionChangeComplete={(region) => setRegion(region)}
      >
        <Marker
          coordinate={{
            latitude: 47.17387201124383,
            longitude: 27.574846627023366,
            latitudeDelta: 0.006,
            longitudeDelta: 0.006,
          }}
          title="FII"
          description="Place of suffering"
          image={{ uri: ImageUri, scale: 1 }}
        />
        {mapMarkers()}
      </MapView>

 
        <View style={[styles.miniContainer, { top: 70 }]}>
          <ParkDetails
            title={useGlobalState("title")[0]}
            details={"Space " + useGlobalState("selectedSpace")[0]}
          ></ParkDetails>
        </View>

        <View style={[styles.miniContainer, { bottom: 60 }]}>
          <BookedSpaceDetails />
        </View>
   

    </>
  );
};

const styles = StyleSheet.create({
  map: {
    height,
  },
  miniContainer: {
    width: "100%",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  callout: {
    backgroundColor: "#E16162",
    borderRadius: 10,
  },
});
