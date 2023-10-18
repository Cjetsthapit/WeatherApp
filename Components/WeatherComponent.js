import React from "react";
import { View , Text , StyleSheet, Image} from "react-native";
export default function WeatherComponent (props) {
    const temp = props ? props.temp : 0;
    const condition = props ? props.condition : "";
    const icon =  props ? props.icon : "";
    const feels = props ? props.feels : ""
    const desc = props ? props.desc : ""
    return (
        <View style={styles.weathercontainer}>
          
          <View style={styles.locationcontainer}>
            <Text style={styles.text}>Temperature: {temp} </Text>
            <Text style={styles.text}>Condition: {condition}  </Text>
            <Text style={styles.text}>Feels like {feels} C  </Text>
            <Image style={{ width:100, height:100 }}
                    source={{uri:`https://openweathermap.org/img/wn/${icon}@2x.png`}}
                />
          <Text style={styles.text}>{desc}</Text>

          </View>

        </View>
    );
}

const styles = StyleSheet.create({
    weathercontainer: {
        backgroundColor: "#bbb",
        width: '100%',
        flex: 1,
         alignItems: 'center',
        justifyContent: 'center'
    },
    locationcontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 25,
        color:'teal'
    }
})