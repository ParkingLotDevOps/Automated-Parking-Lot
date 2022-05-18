import MapView, { Marker, ImageMarker } from 'react-native-maps';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import img from '../../assets/fii.png';
import img2 from '../../assets/iconPark.png'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Text } from 'react-native';

const height = Dimensions.get('window').height * 0.95;
const edgePadding = { bottom: 40, right: 0, left: 0, top: 25};
const ImageUri = Image.resolveAssetSource(img).uri
const ImageUri2 = Image.resolveAssetSource(img2).uri

var lat = 47.17387201124383;
var long = 27.574846627023366;

export const Map = () => {
const [location, setLocation] = useState(null);
const [errorMsg, setErrorMsg] = useState(null);

var XMLHttpRequest = require('xhr2');


const [region, setRegion] = useState({
  latitude: lat,
  longitude: long,
  latitudeDelta: 0.006,
  longitudeDelta: 0.006,
});

var pointMarker = new Array();

const [state, setState] = useState({markers: []})
let mapMarkers = () => {
  return state.markers.map((marker) => <Marker
    key = {marker.id}
    coordinate={{ latitude: marker.lat, longitude: marker.lng }}
    title={marker.name}
    description={marker.description}
    image={{uri:ImageUri2, scale:1}}
    >
    <MapView.Callout tooltip={false}
    style={{
        backgroundColor: "#fffffe",
        borderRadius: 10,
        zIndex: 10
     }}
    >
        <View>
           <Text style={{color:"#E16162", padding: 6}}>{marker.title}{"\n"}{marker.description}</Text>
        </View>
    </MapView.Callout>
  </Marker >)
}
useEffect(() => {
  (async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }
    let location = await Location.getCurrentPositionAsync({timeInterval:10000, 
      accuracy: Location.Accuracy.Balanced});

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
      provider='google'
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
            longitudeDelta: 0.006
        }}
        title='FII'
        description='Place of suffering'
        image={{uri:ImageUri, scale:1}}
    />
    {mapMarkers()}
    </MapView>
    <View style={{position: 'absolute',
                  top: 90,
                  padding: 5,
                  maxHeight: '100%',
                  left: '5%', 
                  width: '90%',
                  backgroundColor: '#004643',
                  borderRadius: 10 }}>
      <GooglePlacesAutocomplete fetchDetails={true}
        placeholder='Enter location'
        onPress={(data, details = null) => {
        let lat1 = details.geometry.location.lat;
        let lng1 = details.geometry.location.lng;
        setRegion({latitude: lat1,
          longitude: lng1,
          latitudeDelta: 0.006,
          longitudeDelta: 0.006});

        const http = new XMLHttpRequest()
        let params = `latitude=${lat1}&longitude=${lng1}`;
        console.log(params);
        http.open("POST", "https://fierce-oasis-90524.herokuapp.com/api/user/parkinglots", true)
        http.setRequestHeader("Content-Type", "application/json");
        http.send(JSON.stringify({"latitude" : lat1, "longitude" : lng1}));
        http.onload = () => {
          console.log(http.responseText);
          let newMarkers=[]
          let myLots = JSON.parse(http.responseText);
          console.log(myLots);
          for(lot in myLots ){
            newMarkers.push({
              id: myLots[lot].id,
              lat:myLots[lot].latitude,
              lng: myLots[lot].longitude,
              description: `Price: ${myLots[lot].price}`,
              title: `Name: ${myLots[lot].name}`
            });
          }
          setState(previousState => {
            return { ...previousState, markers: newMarkers}
          });
        }
      }}
      query={{
          key: 'AIzaSyD4QNalLAtJskSa8Hf2DPHzxU4i6R3MEf4',
          language: 'ro',
          components: 'country:ro'
      }}
      />
      </View>
    </>
)
}

const styles = StyleSheet.create({
  map: {
    height
  },
  callout: {
    backgroundColor: '#E16162',
    borderRadius: 10
  }
})
