import MapView, { Marker } from 'react-native-maps';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import img from '../../assets/fii.png';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { render } from 'react-dom';

const height = Dimensions.get('window').height * 0.95;
const edgePadding = { bottom: 40, right: 0, left: 0, top: 25};
const ImageUri = Image.resolveAssetSource(img).uri;

var lat = 47.17387201124383;
var long = 27.574846627023366;

export const Map = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const [region, setRegion] = useState({
    latitude: lat,
    longitude: long,
    latitudeDelta: 0.006,
    longitudeDelta: 0.006,
  });

  const iconList = {
    icon1: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Flag--Right-Chartreuse.png',
    icon2: 'https://cdn2.iconfinder.com/data/icons/IconsLandVistaMapMarkersIconsDemo/256/MapMarker_Marker_Outside_Chartreuse.png',
    icon3: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Ball-Right-Azure.png',
    icon4: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Marker-Outside-Pink.png'
  }

  const markerList = [
    { key: 0, coordinate : {latitude: 47.17, longitude: 27.574846627023300, latitudeDelta: 0.006, longitudeDelta: 0.006}, icon: iconList.icon1 },
    { key: 1, coordinate : {latitude: 47.18, longitude: 27.574846627023320, latitudeDelta: 0.006, longitudeDelta: 0.006}, icon: iconList.icon2 },
    { key: 2, coordinate : {latitude: 47.19, longitude: 27.574846627023340, latitudeDelta: 0.006, longitudeDelta: 0.006}, icon: iconList.icon3 },
    { key: 3, coordinate : {latitude: 47.20, longitude: 27.574846627023360, latitudeDelta: 0.006, longitudeDelta: 0.006}, icon: iconList.icon4 }
  ]

  function Markers() {
    return (
      <Marker
        key={markerList.keys}
        coordinate={markerList[1].coordinate}
        title='Parking lot'
        description='testing'
        image={{uri:ImageUri, scale:1}}
      />
    );
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

  let text = 'Waiting..';
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
        moveOnMarkerPress
        mapPadding={edgePadding}
        region={region}        
        // onRegionChangeComplete={(region) => setRegion(region)}
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
      <Markers/>
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
          placeholder='Enter destination'
          onPress={(data, details = null) => {
          // console.log(data, details);
          let lat1 = details.geometry.location.lat;
          let lng1 = details.geometry.location.lng;
          setRegion({latitude: lat1,
            longitude: lng1,
            latitudeDelta: 0.006,
            longitudeDelta: 0.006,});
          console.log(lat1, lng1);
          }}
          query={{
              key: 'AIzaSyCrm5UQ-u92dMHxd8MwJnzH4Yc1Hr1OALk',
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
  }
})
