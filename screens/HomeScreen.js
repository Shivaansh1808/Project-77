import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar, ImageBackground, Image, Touchable} from 'react-native';

export default class HomeScreen extends React.Component {
    render() {
        return(
            <View style = {{flex: 1,}}>
                <SafeAreaView style = {styles.androidSafeArea}/>

                <ImageBackground source = {require('../assets/stars.gif')} style = {styles.bgImage}>

              <View style = {styles.titleBar}>
                <Text style = {styles.titleText}>Stellar App</Text>
              </View>

              <TouchableOpacity onPress = {()=>{this.props.navigation.navigate("SpaceCrafts")}} style = {styles.button }>
                  <Text style = {styles.buttonText}>
                      Space Crafts
                  </Text>

                <Text style = {styles.digit}> 1 </Text>

                <Image source = {require('../assets/space_crafts.png')} style = {styles.iconImage}></Image>

              </TouchableOpacity>

              <TouchableOpacity onPress = {()=>{this.props.navigation.navigate("StarMap")}} style = {styles.button2 }>
                  <Text style = {styles.buttonText}>
                      Star Map
                  </Text>

                <Text style = {styles.digit}> 2 </Text>

                <Image source = {require('../assets/star_map.png')} style = {styles.iconImage}></Image>

              </TouchableOpacity>

              <TouchableOpacity onPress = {()=>{this.props.navigation.navigate("DailyPic")}} style = {styles.button }>
                  <Text style = {styles.buttonText}>
                      DailyPictures
                  </Text>

                <Text style = {styles.digit}> 3 </Text>

                <Image source = {require('../assets/daily_pictures.png')} style = {styles.iconImage}></Image>

              </TouchableOpacity>

              

              </ImageBackground>

            </View>)
    }
}

const styles = StyleSheet.create({
    androidSafeArea: {
        marginTop: Platform.OS === "android"?StatusBar.currentHeight: 0
    },
    titleBar: {
        alignItems: "center",
        justifyContent: "center"
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 40,
        color: 'white'
    },
    button: {
        flex: 0.25,
        alignSelf: "center",
        justifyContent: "center",
        borderRadius: 30,
        backgroundColor: 'white',
        marginTop: 50,
    },
    button2: {
        flex: 0.25,
        alignSelf: "center",
        justifyContent: "center",
        borderRadius: 30,
        backgroundColor: 'white',
        marginTop: 50,
        width: 200
    },
    buttonText: {
        fontSize: 35,
        fontWeight: 'bold'
    },
    bgImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    iconImage: {
        position: 'absolute',
        height: 100,
        width: 100,
        resizeMode: 'contain',
        top: -40,
        right: -40,
    },
    digit: {
        position: 'absolute',
        color: 'rgba(183,183,183,0.5)',
        fontSize: 120,
        right: 30,
        bottom: -15
    }
})