import React from "react";
import { View , Text , StyleSheet} from "react-native";
export default function LocationComponent (props) {
    const lat = props ? props.lat : 0;
    const lon = props ? props.lon : 0;
      const cityName = props ? props.name : "";
    return (
        <View style={styles.weathercontainer}>
        <View style={styles.locationcontainer}>
            <Text style={styles.text}>Longitude: { lon} </Text>
            <Text style={styles.text}>Latitude: {lat} </Text>
            <Text style={styles.text}>{ cityName }</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        color:'white'

    },
    weathercontainer: {
       
        width: '100%',
        flex: 1,
         alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'teal'
    },
    locationcontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})