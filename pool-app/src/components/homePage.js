import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';

const HomePage = ({ navigation }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <ImageBackground source={require('./assets/CustomPoolBallBackground.png')} style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('./assets/BadBoy2.jpg')} style={styles.logo} />
      </View>
      <TouchableOpacity style={styles.menuIcon} onPress={toggleMenu}>
        <Text style={styles.menuIconLines}></Text>
        <Text style={styles.menuIconLines}></Text>
        <Text style={styles.menuIconLines}></Text>
      </TouchableOpacity>
      {isMenuOpen && (
        <View style={styles.menu}>
          <TouchableOpacity onPress={() => navigation.navigate('Play')}>
            <Text style={styles.menuItem}>Play</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Help')}>
            <Text style={styles.menuItem}>Help</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Options')}>
            <Text style={styles.menuItem}>Options</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Add Funds')}>
            <Text style={styles.menuItem}>Add Funds</Text>
          </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Game')}>
        <Text style={styles.buttonText}>Play</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const buttonSize = 100; // Define the button size

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 50,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  logoContainer: {
    position: 'absolute',
    top: -20,
    right: 0,
    paddingTop: 20,
    paddingLeft: 20,
  },
  logo: {
    width: 75,
    height: 75,
  },
  menuIcon: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  menuIconLines: {
    backgroundColor: '#FFFF',
    height: 3,
    width: 25,
    marginBottom: 5,
    borderRadius: 5,
  },
  menu: {
    position: 'absolute',
    top: 25,
    left: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    zIndex: 1,
  },
  menuItem: {
    fontSize: 16,
    paddingVertical: 5,
  },
  button: {
    backgroundColor: '#DC143C',
    width: buttonSize,
    height: buttonSize,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: buttonSize / 2,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default HomePage;
