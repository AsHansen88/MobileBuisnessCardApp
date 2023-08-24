import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Linking } from 'react-native';
import React from 'react';



export default function App() {

  const handleEmailPress = () => {

      Linking.openURL('ande970s@stud.kea.dk');
    };

    const handleFacebookPress = () => {

      Linking.openURL('https://www.facebook.com/anders.s.hansen.5');
    };

  return (

  <View style={styles.container}>

        <Image source={require('./pictures/Anders.png')} style={styles.image} />

        <Text style={styles.name}>Anders</Text>
        <Text style={styles.jobTitle}>Software Developer</Text>
        <Text style={styles.email}>Ande970s@stud.kea.dk</Text>

        <View style={styles.buttonContainer}>
                <Button title="Email" onPress={handleEmailPress} />
                <Button title="Facebook" onPress={handleFacebookPress} />
              </View>
        <Text style={styles.phone}>50405381</Text>
      </View>

)
}

//CSS

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

    padding: 20,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        margin: 20,
      },
      name: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      jobTitle: {
        fontSize: 18,
        color: '#666',
      },
      email: {
        fontSize: 16,
        color: '#333',
      },
      phone: {
        fontSize: 16,
        color: '#333',
        marginTop: 5,

  },

  image: {
    width: 100, // Adjust the width as needed
    height: 100, // Adjust the height as needed
    borderRadius: 50, // Make it a circle
    marginBottom: 10,
  },

});

