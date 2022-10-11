import { View, NativeModules} from "react-native";
import { Text, Card, Image } from '@rneui/base';
import React from "react";
import style from "../assets/style";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class HighScore extends React.Component {

    constructor(props) {
        super(props);
        this.highscore();
    }

    highscore = async () => {
        try {
          const value = await AsyncStorage.getItem('result');
          console.debug(value);
          alert(value);
          if (value !== null) {
            return value;
          }
        } catch (e) {
          // error reading value
        }
    }

    render(){
        return (
            // console.log(check[0]),
            // console.log('halo'),
            <View style={style.container}>
                <Text style={style.text_judul}>High Scores</Text>
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
                                fontSize: 28,
                                fontWeight: 'bold',
                                color: '#f1dd95',
                                margin: 5,
                            }}>
                                Nama
                            </Text>
                            <Text style={{
                                fontSize: 28,
                                fontWeight: 'bold',
                                color: '#f1dd95',
                                margin: 5,
                            }}>
                                Score
                            </Text>
                        </View>
                    </View>
    
                </Card>
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
                                fontSize: 28,
                                fontWeight: 'bold',
                                color: '#f1dd95',
                                margin: 5,
                            }}>
                                Nama
                            </Text>
                            <Text style={{
                                fontSize: 28,
                                fontWeight: 'bold',
                                color: '#f1dd95',
                                margin: 5,
                            }}>
                                Score
                            </Text>
                        </View>
                    </View>
    
                </Card>
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
                                fontSize: 28,
                                fontWeight: 'bold',
                                color: '#f1dd95',
                                margin: 5,
                            }}>
                                Nama
                            </Text>
                            <Text style={{
                                fontSize: 28,
                                fontWeight: 'bold',
                                color: '#f1dd95',
                                margin: 5,
                            }}>
                                Score
                            </Text>
                        </View>
                    </View>
    
                </Card>
            </View>
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

