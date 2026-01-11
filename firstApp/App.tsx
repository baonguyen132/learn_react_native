import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Platform, StyleSheet, Text, View, Button, TextInput } from 'react-native';
import FormComponent from './components/FormComponent';
import FlatComponent from './components/FlatComponent';
export default function App() {

  let [count , setCount] = useState(0);
  let [username , setUsername] = useState('nnss');
  let [password , setPassword] = useState('uuuss');
   
  return (
    <View style={styles.container}>
      <Text style={styles.count}>{count}</Text>
      <Button  title="Increase Count" onPress={() => setCount(count + 1)} color='blue'  />
      <>
        {Platform.select({
          ios: <Text style = {styles.textIos}>Welcome to the iOS App!</Text>,
          android: <Text style = {styles.textAndroid}>Welcome to the Android App!</Text>,
        })}
      </>
      
      <StatusBar style="auto" />
      <FormComponent username={username} password={password} setUsername={setUsername} setPassword={setPassword} />
      <FlatComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 50,
    ...Platform.select({
      ios: {
        backgroundColor: 'lightblue',
      },
      android: {
        backgroundColor: 'lightgreen',
      },
    }),

  },
  count: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textIos: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',

  },
  textAndroid: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
    textAlign: 'center',
  },
});
