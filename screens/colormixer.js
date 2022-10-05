import { View, } from "react-native";
import { Text, Button,} from '@rneui/base';
import React from "react";
import style from "../assets/style";

export default function ColorMixer({navigation}) {
    return (
        <View>
            <Text style={style.text_judul}>Color Mixer</Text>
        </View>
    );
}