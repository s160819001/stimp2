import { View,ScrollView, Animated} from "react-native";
import { Text, Card, Image } from '@rneui/base';
import React from "react";
import style from "../assets/style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Animatable from 'react-native-animatable';

export default class HighScore extends React.Component {

    constructor(props) {
        super(props);
        this.highscore();

        this.state = {
            rank1:0,
            rank2:0,
            rank3:0,
            name1:'',
            name2:'',
            name3:'',
            none:'"This rank still available for you, '+global.activeuser+'"',
            // fadeAnim: new Animated.Value(0)
        };
        
              
            
    }

    // fadeIn = () => {
    //     // Will change fadeAnim value to 1 in 5 seconds
    //     Animated.timing(this.state.fadeAnim, {
    //       toValue: 1,
    //       duration: 5000,
    //       useNativeDriver: true
    //     }).start();
    //   };

    // componentDidMount() {
    //     this.fadeIn();
    // }

    highscore = async () => {
        try {
            // await AsyncStorage.removeItem('result');
          const value = await AsyncStorage.getItem('result');
          let storage = JSON.parse(value);
          let arrSkor=[];
          for(let i=0; i<storage.length;i++){
            arrSkor.push(storage[i][1]);
          }
          arrSkor.sort(function(a, b){return b - a});
          this.setState(
            this.state = {
                rank1:arrSkor[0],
                rank2:arrSkor[1],
                rank3:arrSkor[2]
            }
            )
          for(let i=0; i<storage.length;i++){
            if(storage[i][1]==this.state.rank1){
                console.debug(storage[i][1]);
                this.setState(
                    this.state = {
                name1:storage[i][0]
                    }
                )
            }else if(storage[i][1]==this.state.rank2){
                this.setState(
                    this.state = {
                name2:storage[i][0]
                    }
                )
            }else if(storage[i][1]==this.state.rank3){
                this.setState(
                    this.state = {
                name3:storage[i][0]
                    }
                )
            }
          }
        } catch (e) {
          // error reading value
        }
    }

    render(){
        return (
            // console.log(check[0]),
            // console.log('halo'),
            <ScrollView style={style.container}>
                {/* <Text style={style.text_judul}>High Scores</Text> */}
                <Animatable.View
                    animation="fadeInDown"
                >
                <Card
                    containerStyle={{
                        borderRadius: 10,
                        backgroundColor: '#f0952a',
                    }}>
                    <View style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        alignContent:'center',
                    }}>
                        <Image source={require('../assets/images/rank1.png')}
                        style={style.img}/> 
                        <View style={{}}>
                            <Text style={{
                                fontSize: 22,
                                fontWeight: 'bold',
                                color: '#f1dd95',
                                margin: 5,
                            }}>
                                {this.state.name1 ?this.state.name1:this.state.none}
                            </Text>
                            <Text style={{
                                fontSize: 26,
                                fontWeight: 'bold',
                                color: '#f1dd95',
                                margin: 5,
                            }}>
                                {this.state.rank1}
                            </Text>
                        </View>
                    </View>
    
                </Card>
                </Animatable.View>
                <Animatable.View
                    animation="fadeInDown"
                    delay={500}
                >
                    <Card
                containerStyle={{
                    borderRadius: 10,
                    backgroundColor: '#f0952a',
                }}>
                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    alignContent:'center',
                }}>
                    <Image source={require('../assets/images/rank2.png')}
                    style={style.img}/> 
                    <View style={{}}>
                        <Text style={{
                            fontSize: 22,
                            fontWeight: 'bold',
                            color: '#f1dd95',
                            margin: 5,
                        }}>
                            {this.state.name2?this.state.name2:this.state.none}
                        </Text>
                        <Text style={{
                            fontSize: 26,
                            fontWeight: 'bold',
                            color: '#f1dd95',
                            margin: 5,
                        }}>
                            {this.state.name2?this.state.rank2:''}
                        </Text>
                    </View>
                </View>

                    </Card>
                </Animatable.View>
                <Animatable.View
                    animation="fadeInDown"
                    delay={1000}
                >
                    <Card
                    containerStyle={{
                        borderRadius: 10,
                        backgroundColor: '#f0952a',
                    }}>
                    <View style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        alignContent:'center',
                    }}>
                        <Image source={require('../assets/images/rank3.png')}
                        style={style.img}/> 
                        <View style={{}}>
                            <Text style={{
                                fontSize: 22,
                                fontWeight: 'bold',
                                color: '#f1dd95',
                                margin: 5,
                            }}>
                                {this.state.name3?this.state.name3:this.state.none}
                            </Text>
                            <Text style={{
                                fontSize: 26,
                                fontWeight: 'bold',
                                color: '#f1dd95',
                                margin: 5,
                            }}>
                                {this.state.name3?this.state.rank3:''}
                            </Text>
                        </View>
                    </View>
    
                </Card>
                </Animatable.View>
            </ScrollView>
        );
    }
    
}

//  const check = async() => {
//     try {
//         const
//         value= await AsyncStorage.getItem('result');
//         console.log('berhasil membaca');
//         return value != null ? value : "";
        
//         } catch (e) {
//             // saving error
//             console.log(e);
//         }
// }

