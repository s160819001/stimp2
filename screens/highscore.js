import { View, NativeModules} from "react-native";
import { Text, Card, Image } from '@rneui/base';
import React from "react";
import style from "../assets/style";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
            name3:''
        }
    }

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
                                {this.state.name1}
                            </Text>
                            <Text style={{
                                fontSize: 28,
                                fontWeight: 'bold',
                                color: '#f1dd95',
                                margin: 5,
                            }}>
                                {this.state.rank1}
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
                                {this.state.name2}
                            </Text>
                            <Text style={{
                                fontSize: 28,
                                fontWeight: 'bold',
                                color: '#f1dd95',
                                margin: 5,
                            }}>
                                {this.state.rank2}
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
                                {this.state.name3}
                            </Text>
                            <Text style={{
                                fontSize: 28,
                                fontWeight: 'bold',
                                color: '#f1dd95',
                                margin: 5,
                            }}>
                                {this.state.rank3}
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

