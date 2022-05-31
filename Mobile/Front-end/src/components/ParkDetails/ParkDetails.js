import { View, Text, StyleSheet } from "react-native";
import React from "react";

const ParkDetails = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{props.title}</Text>
      </View>

      <View style={styles.details}>
        <View style={styles.price}>
          <Text style={styles.priceText}>
            {props.details} {props.priceUnit}
          </Text>
        </View>
        <View style={styles.timeUnit}>
          <Text style={styles.timeUnitText}> {props.timeUnit}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "85%",
    backgroundColor: "#FCFCFF",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    borderRadius: 6,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  title: {
    width: "55%",
  },
  details: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    flexWrap: "nowrap",
  },
  titleText: {
    fontSize: 16,
    textAlign: "right",
    padding: 5,
    color: "#3B414B",
  },
  price: {},
  priceText: {
    fontSize: 20,
    // width: '60%',
    fontWeight: "bold",
    color: "#3B414B",
  },
  timeUnit: {},
  timeUnitText: {
    color: "#757F8C",
    fontSize: 16,
  },
});

export default ParkDetails;
