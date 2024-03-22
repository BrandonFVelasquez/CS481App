import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Text, Animated } from 'react-native';

const PoolBallAnimation = ({ onAnimationComplete }) => {
  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    setTimeout(() => { // Add a delay here
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 1,
          duration: 1000, // Adjust the duration as needed
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 0,
          duration: 1000, // Adjust the duration as needed
          useNativeDriver: true,
          delay: 2000, // Wait for 2 seconds after the first animation finishes
        }),
      ]).start(() => {
        onAnimationComplete();
      });
    }, 1000); // Adjust the delay time as needed (in milliseconds)
  }, []);

  const ballStyle = {
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -250], // Adjust the distance as needed
        }),
      },
      {
        rotate: '90deg' // Rotate the image by 90 degrees
      }
    ],
  };

  return (
    <Animated.View style={[styles.container, { transform: ballStyle.transform }]}>
    <Image source={require('./assets/BadBoyLong.png')} style={styles.ballImage} />
    </Animated.View>
  );
};

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Uncomment the line below to navigate to SplashScreen after 3 seconds
    // setTimeout(() => navigation.navigate('SplashScreen'), 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('./assets/BadBoy2.jpg')} style={styles.logo} />
      <View style={styles.optionsContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')} style={styles.option}>
          <Text style={styles.optionText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={styles.option}>
          <Text style={styles.optionText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')} style={styles.option}>
          <Text style={styles.optionText}>Forgot Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1386c7', // Change the background color to blue
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  optionsContainer: {
    alignItems: 'center',
  },
  option: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#000000',
    borderRadius: 5,
    width: 200,
    alignItems: 'center',
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
  },
  ballImage: {
    width: 844,
    height: 500,
    position: 'absolute', // Position the ball image over the background
  },
});

const InitalPage = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  return (
    <>
      {!animationComplete && <PoolBallAnimation onAnimationComplete={() => setAnimationComplete(true)} />}
      {animationComplete && <SplashScreen />}
    </>
  );
};

export default InitalPage;
