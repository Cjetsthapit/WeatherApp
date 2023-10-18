import { StyleSheet, View } from 'react-native';
import { useEffect , useState} from 'react';
import * as Location from 'expo-location';
import WeatherComponent from './Components/WeatherComponent';
import LocationComponent from './Components/LocationComponent';
// npx expo install expo-location
export default function App() {

  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [name, setName] = useState("");
  const [temp, setTemp] = useState(0);
  const [icon, setIcon] = useState("");
  const [condition, setCondition] = useState("");
  const [feels, setFeels] = useState("");
  const [desc, setDesc] = useState("");


  const fetchWeather = async(lat, lon) => { 
    await fetch("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=ecf5553cc5b15522aea8026824cb8085&units=metric").
      then((response) => response.json()).
      then((json) => {
        console.log(json)
        console.log(json.main.temp);
        console.log(json.name);
        console.log(json.weather[0].main);
         console.log(json.weather[0].icon);
        setName(json.name);
        setTemp(json.main.temp);
        setCondition(json.weather[0].main);
        setIcon(json.weather[0].icon);
        setFeels(json.main.feels_like);
        setDesc(json.weather[0].description.toUpperCase())
       })
      .catch((error) => {     
      })
  }
  const gettingGeoLocation = async () => {
    // step 0 ask for user permission
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }
     // step 1 get lat, log
    await Location.watchPositionAsync({
      accuracy: Location.Accuracy.BestForNavigation,
      distanceInterval: 10,
      timeInterval: 1000
    }, (location) => {
      console.log(location.coords.latitude);
      console.log(location.coords.longitude);
      setLat(location.coords.latitude);
      setLon(location.coords.longitude);
       // step 2 send openweathermap api request with log and lat
      fetchWeather(location.coords.latitude, location.coords.longitude);
    });
  }

  useEffect(() => { 
    gettingGeoLocation();
  }, []);

  return (
    <View style={styles.container}>
      <WeatherComponent temp={ temp} condition={condition} icon={icon} feels={feels} desc={desc}></WeatherComponent>
      <LocationComponent lat={ lat } lon={ lon } name={name}></LocationComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
