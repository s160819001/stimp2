import { View, } from "react-native";
import { LinearProgress, Text, Button, Slider } from '@rneui/base';
import React from "react";
import style from "../assets/style";

export default class ColorMixer extends React.Component {
    batas = 255;
    state = {
        count: this.batas,
        oneSecInterval: setInterval(() => {
            this.setState(
                this.state = {
                    count: this.state.count - 1
                })
        }, 1000)
    };

    render() {
        return (
            <View style={style.container}>
                <View style={style.linear_progress}>
                    <LinearProgress variant='determinate'
                        value={1 - (this.state.count / this.batas)}
                        color="primary"
                        //warna e mengikuti soal
                        style={style.linear_progress} />
                    <Text style={style.text_linear_progress}>{toHHMMSS(this.state.count)}</Text>
                </View>
                <Text style={style.text_score}>Score: (score di state)</Text>
                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    alignItems: 'flex-start'
                }}>
                    <View style={{
                        width: '50%',
                    }}>
                        <Text style={{
                            fontSize: 18,
                            color: '#265e80',
                            margin: 20,
                            width: '50%',
                        }}>Guess this color!<View style={{
                            width: 100,
                            height: 100,
                            margin: 20,
                            backgroundColor: "#a1346f",
                        }}></View></Text>
                    </View>
                    <View style={{
                        width: '50%',
                    }}>
                        <Text style={{
                            fontSize: 18,
                            color: '#265e80',
                            margin: 20,
                        }}>Your color</Text><View style={{
                            width: 100,
                            height: 100,
                            margin: 20,
                            backgroundColor: "red",
                        }}></View>
                    </View>




                </View>
                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    alignItems: 'flex-start',
                }}>

                </View>
                <View>
                    <Text>Hint: xxx</Text>
                </View>
                <View>

                </View>
            </View>
        )
    }
}

function toHHMMSS(v) {
    var sec_num = parseInt(v, 10);
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }
    return hours + ':' + minutes + ':' + seconds;
}