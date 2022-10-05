import { View, } from "react-native";
import { Text, Button,} from '@rneui/base';
import React from "react";
import style from "../assets/style";

export default function Home({navigation}) {
    return (
        <View style={style.container}>
            <Text style={style.text_judul}>Welcome, BRO !</Text>
            <Text style={style.text_body}>
                The goal of this game is to produce the exact color
                as shown within a time limit. Provide the RGB values (0 to 255),
                then press the Guess Color button to answer.
                {'\n'}
                {'\n'}
                Your score is determined by the remaining time. When the time
                is up, then it's a game over!
                {'\n'}
                {'\n'}
                See if you can reach top 5!
            </Text>
            <Button 
            title="Play Game" 
            onPress={() => navigation.navigate("ColorMixer")}
            buttonStyle={style.btn_style}
            containerStyle={style.btn_container} />
        </View>
    );
}