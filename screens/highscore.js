import { View, } from "react-native";
import { Text, Button,} from '@rneui/base';
import React from "react";
import style from "../assets/style";

export default function HighScore({navigation}) {
    return (
        <View style={style.container}>
            <Text style={style.text_judul}>High Score</Text>
        </View>
    );
}