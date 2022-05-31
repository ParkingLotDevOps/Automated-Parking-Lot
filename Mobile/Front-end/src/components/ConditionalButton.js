import { View, Text } from 'react-native'
import React, {useState} from 'react'
import MainButton from './MainButton'
import { useNavigation } from '@react-navigation/native'
import { useGlobalState } from './myGlobalState'

const ConditionalButton = () => {

  const [needToPay, setNeedToPay] = useState(useGlobalState("needToPay")[0]);
  const navigation = useNavigation();
  return (
    <View style={{width: "100%"}}>
      {needToPay ? (
            <MainButton
              text="Pay Up"
              onPress={() => navigation.navigate("MakePayment")}
            />
          ) : (
            <MainButton
              text="View Booking Details"
              onPress={() => navigation.navigate("QR")}
            />
          )}
    </View>
  )
}

export default ConditionalButton