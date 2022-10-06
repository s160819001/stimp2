import { View, } from "react-native";
import { LinearProgress, Text, Button, Slider } from '@rneui/base';
import React from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';
import style from "../assets/style";

export default class ColorMixer extends React.Component {
    batas = 255;

    constructor() {
        super();
        this.state = {
            count: this.batas,
            oneSecInterval: setInterval(() => {
                this.setState(
                    this.state = {
                        count: this.state.count - 1
                    })
            }, 1000),
            redVal: 0,
            greenVal: 0,
            blueVal: 0,
            hint: '',
        }
    }

    showHint() {
        this.setState(
            this.state = {
                hint: "Hint : "+'xxx'
                //disini nanti juga setskornya diminus
            }
        )
    }

    render() {
        return (
            //#region GAMEON
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
                    alignItems: 'flex-start',
                    marginTop: 20,
                }}>
                    <View style={{
                        width: '50%',
                    }}>
                        <Text style={{
                            fontSize: 18,
                            color: '#265e80',
                            width: '100%',
                            textAlign: 'center',
                        }}>Guess this color!</Text>
                        <View style={{
                            width: 100,
                            height: 100,
                            margin: 10,
                            backgroundColor: "#a1346f",
                            alignSelf: 'center',
                            borderColor: '#000',
                            borderWidth: 2,
                        }}></View>
                    </View>
                    <View style={{
                        width: '50%',
                    }}>
                        <Text style={{
                            fontSize: 18,
                            color: '#265e80',
                            width: '100%',
                            textAlign: 'center',
                        }}>Your color</Text>
                        <View style={{
                            width: 100,
                            height: 100,
                            margin: 10,
                            backgroundColor: 'rgba(' + this.state.redVal + ',' + this.state.greenVal + ',' + this.state.blueVal + ',1)',
                            alignSelf: 'center',
                            borderColor: '#000',
                            borderWidth: 2,
                        }}></View>
                    </View>
                </View>
                <View>
                    <Text style={{
                        fontSize: 18,
                        color: '#265e80',
                        margin: 20,
                        alignSelf: 'center',
                    }}>{this.state.hint}</Text>
                    <Button
                        title="Show Hint"
                        onPress={() => { this.showHint() }}
                        buttonStyle={style.btn_style}
                        containerStyle={style.btn_container} />
                </View>
                {/* ---Start Container Slider--- */}
                <View style={style.container}>
                    {/* ---Start Red Slider--- */}
                    <View style={style.slider_container}>
                        <Text
                            style={{
                                fontSize: 18,
                                color: 'red',
                                margin: 20,
                                alignSelf: 'center',
                            }}
                        >
                            Red: {this.state.redVal}
                        </Text>
                        <Slider
                            value={this.state.value}
                            minimumValue={0}
                            maximumValue={255}
                            step={1}
                            thumbStyle={{
                                backgroundColor: 'red',
                            }}
                            onValueChange={(value) => {
                                this.setState({
                                    redVal: value
                                })
                            }}

                        ></Slider>
                    </View>
                    {/* ---End Red Slider--- */}
                    {/* ---Start Green Slider--- */}
                    <View style={style.slider_container}>
                        <Text
                            style={{
                                fontSize: 18,
                                color: 'green',
                                margin: 20,
                                alignSelf: 'center',
                            }}
                        >
                            Green: {this.state.greenVal}
                        </Text>
                        <Slider
                            minimumValue={0}
                            maximumValue={255}
                            step={1}
                            thumbStyle={{
                                backgroundColor: 'green',
                            }}
                            onValueChange={(value) => {
                                this.setState({
                                    greenVal: value
                                })
                            }}

                        ></Slider>
                    </View>
                    {/* ---End Green Slider--- */}
                    {/* ---Start Blue Slider--- */}
                    <View style={style.slider_container}>
                        <Text
                            style={{
                                fontSize: 18,
                                color: 'blue',
                                margin: 20,
                                alignSelf: 'center',
                            }}
                        >
                            Blue: {this.state.blueVal}
                        </Text>
                        <Slider
                            minimumValue={0}
                            maximumValue={255}
                            step={1}
                            thumbStyle={{
                                backgroundColor: 'blue',
                            }}
                            onValueChange={(value) => {
                                this.setState({
                                    blueVal: value
                                })
                            }}

                        ></Slider>
                    </View>
                    {/* ---End Blue Slider--- */}
                </View>
                {/* ---End Container Slider--- */}
                <View style={{
                    bottom: 20,
                }}>
                    <Button
                        title="Guess Color"
                        buttonStyle={style.btn_style}
                        containerStyle={style.btn_container} />
                </View>
            </View>
            //#endregion

            //#region GAMEOVER
            // <View style={style.container}>

            // </View>
            //#endregion
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