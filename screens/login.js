import React, { Component } from "react";
import { View, NativeModules } from "react-native";
import { Card, Input, Button } from '@rneui/base';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Ionicons from 'react-native-vector-icons/Ionicons';

import style from "../assets/style";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      score:0
    };

  }

  doLogin = async (username, password) => {

      try {
        await AsyncStorage.setItem('username', username);
        alert('login sukses, login tersimpan');
        NativeModules.DevSettings.reload()
      } catch (e) {
        // saving error
      }

  }


  render() {
    return (
      // <Card>
      //   <Card.Title>Silakan Login</Card.Title>
      //   <Card.Divider/>

      //   <View style={styles.viewRow}>
      //       <Text>Username </Text>
      //       <TextInput style={styles.input}
      //       onChangeText={(username) => this.setState({username})}
      //       />
      //   </View>
      //   <View style={styles.viewRow}>
      //       <Text>Password </Text>
      //       <TextInput secureTextEntry={true} style={styles.input}
      //       onChangeText={(password) => this.setState({password})}
      //        />
      //   </View>
      //   <View style={styles.viewRow}>
      //   <Button style={styles.button} title="Submit"
      //   onPress={()=>
      //       {
      //         this.doLogin(this.state.username, this.state.password)}
      //       } 

      //    />
      //   </View>


      // </Card>
      <View style={{
        flex: 1,
        backgroundColor: '#907f54',
        justifyContent: 'center',
      }}>
        <Card containerStyle={style.card}>
          <Card.Title>Silahkan Login</Card.Title>
          <Card.Divider />
          <Input
            onChangeText={(username) => this.setState({ username })}
            disabledInputStyle={{ background: "#ddd" }}
            leftIcon={<Ionicons name='person' size={15} />}
            placeholder="username"
          />
          <Input
            onChangeText={(password) => this.setState({ password })}
            disabledInputStyle={{ background: "#ddd" }}
            secureTextEntry={true}
            leftIcon={<Ionicons name='key' size={15} />}
            placeholder="password"
          />
          <Button
            onPress={() => { this.doLogin(this.state.username, this.state.password) }}
            title="LOGIN"
            buttonStyle={style.btn_style}
            containerStyle={style.btn_container}
          />
        </Card>
      </View>

    );
  }
}

export default Login;



// const styles = StyleSheet.create({
//   input: {
//     height: 40,
//     width: 200,
//     borderWidth: 1,
//     padding: 10,
//   },
//   button: {
//     height: 40,
//     width: 200,
//   },
//   viewRow: {
//     flexDirection: "row",
//     justifyContent: "flex-end",
//     alignItems: 'center',
//     paddingRight: 50,
//     margin: 3
//   }
// })
