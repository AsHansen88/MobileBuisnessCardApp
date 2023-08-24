import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Linking } from 'react-native';
import React from 'react';


export default function App() {
  const handleEmailPress = () => {
    Linking.openURL('mailto:ande970s@stud.kea.dk');
  };

  const handleFacebookPress = () => {
    Linking.openURL('https://www.facebook.com/anders.s.hansen.5');
  };

  return (


    <View style={styles.container}>
       <Image source={require('./pictures/dong.png')} style={styles.logoContainer} />
      <Image source={require('./pictures/Anders.png')} style={styles.image} />
      <Text style={styles.name}>Anders Hansen</Text>
      <Text style={styles.jobTitle}>Software Developer</Text>
      <Text style={styles.email}>Ande970s@stud.kea.dk</Text>

      <View style={styles.buttonContainer}>
        <Button title="Email" onPress={handleEmailPress} />
        <Button title="Facebook" onPress={handleFacebookPress} />
      </View>

      <Text style={styles.phone}>50405381</Text>

      <Text style={styles.sectionTitle}>About</Text>
      <Text style={styles.sectionText}>
        First app created by an android student at KEA
      </Text>

      <Text style={styles.sectionTitle}>Interests</Text>
      <Text style={styles.sectionText}>
        Games, internet fanatic, programming, documentaries, etc.
      </Text>
    </View>
  );
}

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
    position: 'relative', // Add this line
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  phone: {
    fontSize: 16,
    color: '#333',
    marginTop: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },

  // Logo styles
  logoContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 10,
  },
  logo: {
    width: 20,
    height: 10,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  sectionText: {
    fontSize: 16,
    color: '#333',
    marginTop: 10,
    textAlign: 'center',
  },
});

