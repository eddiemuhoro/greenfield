import { View, Text, StyleSheet, Image, TouchableNativeFeedbackBase, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS } from '../constants'
import * as Font from 'expo-font';

//import image from assets folder

const loginImage = require('../assets/login.png')

const Login = ({navigation}) => {
    const [fontLoaded, setFontLoaded] = useState(false);

    const loadFonts = async () => {
      await Font.loadAsync({
        'Roboto-Black': require('../assets/fonts/Roboto-Black.ttf'),
      });
      setFontLoaded(true);
    };
  
    useEffect(() => {
        loadFonts();
    }, [fontLoaded]);
  return (
    <View style={styles.container}> 
      <View style={styles.imageContainer}>
        <Image source={loginImage} style={styles.image} />
      </View>

      <View>
        <Text style={styles.headerText}>All the best Mentors, all in one place</Text>
      </View>

      <View>
        <Text style={styles.normalText}>Mentors on Prener will help you achieve your most ambititous goals. Come on, let’s smash them together!</Text>
      </View>

      <View>
        <TouchableOpacity style={styles.button}> 
            <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.lowerDeck} onPress={()=> navigation.navigate('Home')}> 
            <Text style={styles.textLowerDeck}>Log in</Text>
        </TouchableOpacity>
      </View>


    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent:'center',
        padding: 20

    },
    imageContainer: {
        width: 280,
        height: 262,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    headerText:{
        fontSize: 34,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Roboto-Bold',
    },
    normalText: {
        fontSize: 15,
        textAlign: 'center',
        color: '#96A7AF',
        marginTop: 20,
        fontWeight: 500,
        width: 291,
    },
    button: {
        backgroundColor: COLORS.button,
        width: 280,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    lowerDeck: {
        backgroundColor: COLORS.white,
        width: 280,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        borderWidth: 1,
        borderColor: COLORS.gray
    },
    buttonText: {
        fontWeight: 500,
        color: COLORS.white,
        fontSize: 18,
    },
    textLowerDeck: {
        fontWeight: 500,
        color: COLORS.green,
        fontSize: 18,
    }
})