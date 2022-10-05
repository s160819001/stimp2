import { StyleSheet, View, Text,Image,ImageBackground,ScrollView } from "react-native";
import React from "react";
export default function About() {
return (
    
    <ScrollView>
        <ScrollView horizontal={true}>

            <ImageBackground style={styles.imgkucing} source={{uri: 'http://placekitten.com/300/400?image=1'}}>
            <Image style={styles.imgmissing}
    source={require('../assets/images/missing.png')}
    />
            </ImageBackground>

            <ImageBackground style={styles.imgkucing} source={{uri: 'http://placekitten.com/300/400?image=2'}}>
            <Image style={styles.imgmissing}
    source={require('../assets/images/missing.png')}
    />
            </ImageBackground>

            <ImageBackground style={styles.imgkucing} source={{uri: 'http://placekitten.com/300/400?image=3'}}>
            <Image style={styles.imgmissing}
    source={require('../assets/images/missing.png')}
    />
            </ImageBackground>

            </ScrollView>

            <ScrollView horizontal={true}>
            <ImageBackground style={styles.imgkucing} source={{uri: 'http://placekitten.com/300/400?image=6'}}>
            <Image style={styles.imgmissing}
    source={require('../assets/images/missing.png')}
    />
            </ImageBackground>

            <ImageBackground style={styles.imgkucing} source={{uri: 'http://placekitten.com/300/400?image=8'}}>
            <Image style={styles.imgmissing}
    source={require('../assets/images/missing.png')}
    />
            </ImageBackground>

            <ImageBackground style={styles.imgkucing} source={{uri: 'http://placekitten.com/300/400?image=9'}}>
            <Image style={styles.imgmissing}
    source={require('../assets/images/missing.png')}
    />
            </ImageBackground>


            </ScrollView>

            <ScrollView horizontal={true}>
            <ImageBackground style={styles.imgkucing} source={{uri: 'http://placekitten.com/300/400?image=11'}}>
            <Image style={styles.imgmissing}
    source={require('../assets/images/missing.png')}
    />
            </ImageBackground>

            <ImageBackground style={styles.imgkucing} source={{uri: 'http://placekitten.com/300/400?image=12'}}>
            <Image style={styles.imgmissing}
    source={require('../assets/images/missing.png')}
    />
            </ImageBackground>

            <ImageBackground style={styles.imgkucing} source={{uri: 'http://placekitten.com/300/400?image=13'}}>
            <Image style={styles.imgmissing}
    source={require('../assets/images/missing.png')}
    />
            </ImageBackground>


            </ScrollView>
        </ScrollView>
);
}

const styles = StyleSheet.create({
    vparent:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    },
    vparent2:{
        justifyContent: 'center',
        alignItems: 'center',
        width:300
        },
    imgkucing: {
    width: 300,
    height: 400,
    },
    imgmissing: {
        width: 300,
        height: 100,
        },
    });