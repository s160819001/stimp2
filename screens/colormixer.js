import { View, } from "react-native";
import { LinearProgress,Text, Button, } from '@rneui/base';
import React from "react";
import style from "../assets/style";

export default class ColorMixer extends React.Component {
    batas=10;
    state={
        count:this.batas,
        oneSecInterval : setInterval(() => { 
            this.setState(
                this.state = { count:this.state.count-1
            }) }, 1000)
    };

    render(){
        return(
            <View style={style.container}>
                <LinearProgress variant='determinate'
                    value={1-(this.state.count/this.batas)+0.2}
                    color="primary" />
            </View>
        )
    }
}

function toHHMMSS (v) {
    var sec_num = parseInt(v, 10);
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds;
}