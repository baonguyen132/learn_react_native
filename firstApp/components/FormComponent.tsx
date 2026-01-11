import { Component, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

interface FormComponentProps {
  // Define any props if needed
  username: string;
  password: string;

  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
}


const FormComponent = (props: FormComponentProps) => {

    const {username, password , setUsername , setPassword} : FormComponentProps = props;
    

  return (
    <View style={formStyles.container}>
        <Text style={formStyles.title}>Login Form</Text>
        <Text style={formStyles.label}>Username: </Text>
        <TextInput placeholder="Username" value={username} onChangeText={setUsername} style={formStyles.input} />
        <Text style={formStyles.label}>Password: </Text>
        <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry style={formStyles.input} />
        <Button title="Submit" onPress={() => {
            alert(`Username: ${username}\nPassword: ${password}`);
         }} />
      </View>
    )
    
}

export default FormComponent;


const formStyles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginTop: 30,
    width: '100%',
    display: 'flex',
    gap: 20,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    width: '100%',

  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  button: {
    marginTop: 10,
    width: '100%',
    textAlign: 'center',
    backgroundColor: 'blue',
    color: 'white',

  },
});