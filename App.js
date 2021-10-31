import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';

const theNumber = Math.floor(Math.random() * 100) + 1

export default function App() {

  const [notification, setNotification] = useState('Guess a number between 1-100')
  const [guess, setGuess] = useState('')
  const [numberOfGuesses, setNumberOfGuesses] = useState(1)

  
  const compareNumbers = () => {

    setNumberOfGuesses(numberOfGuesses + 1)

    if(guess > theNumber) {

      
      setNotification(`Your guess ${guess} is too high`)
      
      setGuess('')
    }

    else if (guess < theNumber) {

      
      setNotification(`Your guess ${guess} is too low`)
      
      setGuess('')

    }

    else {

      if (numberOfGuesses === 1) {

        Alert.alert(`You guessed the right number '${theNumber}' in ${numberOfGuesses} guess`)

      }

      else {

        Alert.alert(`You guessed the right number '${theNumber}' in ${numberOfGuesses} guesses`)

      }
     
      setNotification('Guess a number between 1-100')

      setGuess('')
      
      setNumberOfGuesses(1)
            

    }

  } 


  return (
    <View style={styles.container}>
      <Text>{notification}</Text>
      <TextInput 
        style={styles.input}
        onChangeText={guess => setGuess(guess)}
        value={guess}
        keyboardType="numeric"
      />
      <Button onPress={compareNumbers} title="make guess" />      

      <StatusBar style="auto" />
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
  input: {
    height: 30,
    width: 50,
    borderColor: 'gray',
    borderWidth: 1
  }
});
