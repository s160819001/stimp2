import React, {Component} from "react";
import { StyleSheet, View} from "react-native";
import { LinearProgress, Text, Button,Chip } from '@rneui/base';
import Question from "../classes/question.js" ;

function toHHMMSS (v) {
    var sec_num = parseInt(v, 10);
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);
    if (hours < 10) {hours = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds;
    }


class Quiz extends Component{
    batas = 100;
    state = {
        count:this.batas,
        oneSecInterval : setInterval(() => {
            // count:this.state.count-1
            this.setState(
            this.state = {
            count:this.state.count-1
            })
            if(this.state.count==0)
            {
                if(this.state.nomor==(this.state.quiz.length-1))
                {
                    this.setState(
                    this.state = {
                    count:this.batas,
                    nomor:0,
                    selesai:true
                    })
                }else
                {
                    this.setState(
                    this.state = {
                    count:this.batas,
                    nomor:this.state.nomor+1
                    })
                }
            }
            }, 1000),
                quiz : [
                new Question('Not a member of Avenger ', 'Ironman',
                'Spiderman', 'Thor', 'Hulk Hogan', 'Hulk Hogan'),
                new Question("Not a member of Teletubbies", 'Dipsy',
                'Patrick', 'Laalaa', 'Poo', 'Patrick'),
                new Question("Not a member of justice league", 'batman',
                'superman', 'flash', 'aquades', 'aquades')
                ],
                nomor:0,
                skor:0,
                selesai:false
    };
    
    checkAnswer(s) {
        var temp2;
        var temp3=this.state.skor;
        
        if (s == this.state.quiz[this.state.nomor].answer) {
        temp3=temp3 + 100;
        
        }
        temp2=this.state.nomor+1;
        if(temp2>=this.state.quiz.length) 
        {
            this.setState(
                this.state = {
                    selesai:true
                    ,skor:temp3
                })
        }else{

            this.setState(
                this.state = {
                count:this.batas,
                nomor:temp2,
                skor:temp3
                })
        }
        };
        refresh () {
            this.setState(
                this.state = {
                     count : this.batas,
                     nomor : 0,
                     skor : 0,
                     selesai : false
                }
            );
        };
    render(){
        if(this.state.selesai==true)
        {
            return <View style={styles.vparent}>
            <Text h3>You Score:</Text>
            <Chip
            title={this.state.skor}
            icon={{
            name: "star",
            type: "font-awesome",
            size: 20,
            color: 'white',
             }}
            />
            <Button title="Main Lagi"
            onPress={() => 
                
                this.refresh()
                
            }
            />
            </View>
        }
        else
        {
            return(
                <View style={styles.vparent}>
                {/* <p>Count : {toHHMMSS(this.state.count)}</p>
                <button onClick={() => this.setState({count:this.state.count +1})}>+</button> */}
                <LinearProgress variant='determinate'
                value={1-(this.state.count/this.batas)}
                color="primary" />
                <Text style={styles.time}>{toHHMMSS(this.state.count)}</Text>
                <Text h3>{this.state.quiz[this.state.nomor].question}</Text>
                <View style={styles.vparentleft}>
                <Button onPress={() => {this.checkAnswer(this.state.quiz[this.state.nomor].option_a)}}
                title={"A. "+this.state.quiz[this.state.nomor].option_a} type="outline" />
                <Button onPress={() => {this.checkAnswer(this.state.quiz[this.state.nomor].option_b)}}
                title={"B. "+this.state.quiz[this.state.nomor].option_b} type="outline" />
                <Button onPress={()=> {this.checkAnswer(this.state.quiz[this.state.nomor].option_c)}}
                title={"C. "+this.state.quiz[this.state.nomor].option_c} type="outline" />
                <Button onPress={() => {this.checkAnswer(this.state.quiz[this.state.nomor].option_d)}}
                title={"D. "+this.state.quiz[this.state.nomor].option_d} type="outline" />
                </View>
                </View>
                );
            }
        }
}

export default Quiz;


const styles = StyleSheet.create({
    vparent:{
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    },
    vparentleft:{
        justifyContent:'flex-start',
        alignItems:'flex-start'
    },
    time:{
        fontSize:30
    }
    });