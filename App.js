import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button } from '@rneui/base';
import { Component } from 'react';

import style from './assets/style';
import Home from './screens/home';
import ColorMixer from './screens/colormixer';
import HighScore from './screens/highscore';
import Login from './screens/login';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogin: false
    }

    this.cekLogin().then((item) => {
      if (item != null) {
        this.setState(
          this.state = {
            islogin: true
          });
      }
    });
  }

  cekLogin = async () => {
    try {
      const value = await AsyncStorage.getItem('username');
      global.activeuser = value;
      console.debug(value);
      //  alert(value);
      if (value !== null) {
        return value;
      }
    } catch (e) {
      // error reading value
    }
  }


  DrawerNav() {
    return (
      <Drawer.Navigator initialRouteName=" "
        drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Home"
          component={Home}
          options={{
            headerShown: true,
            title: 'Color Mixer',
            headerStyle: {
              backgroundColor: '#917f54',
            },
            headerTintColor: '#fff',
            // drawerItemStyle: { height: 0 }
          }} />
        <Drawer.Screen
          name="HighScore"
          component={HighScore}
          options={{
            title: 'High Scores',
            headerStyle: {
              backgroundColor: '#917f54',
            },
            headerTintColor: '#fff',
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name="podium"
                size={size}
                color={focused ? 'blue' : 'gray'}
              />
            )
          }}
        />
      </Drawer.Navigator>
    )
  }


  render() {
    if (!this.state.islogin) {
      return (
        <NavigationContainer><Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        </Stack.Navigator>
        </NavigationContainer>);
    } else {
      return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={this.DrawerNav}
              options={{
                title: 'Color Mixer',
                headerShown: false,
                headerStyle: {
                  backgroundColor: '#917f54',
                }
              }} />
            <Stack.Screen
              name="ColorMixer"
              component={ColorMixer}
              options={{
                title: 'Color Mixer',
                headerStyle: {
                  backgroundColor: '#917f54',
                },
                headerTintColor: '#fff',
              }} />
          </Stack.Navigator>
        </NavigationContainer >
      )
    }
  }
}



const doLogout = async () => {
  try {
    await AsyncStorage.removeItem('username')
    alert('Logged out');
    NativeModules.DevSettings.reload();
  } catch (e) {
  }
}

function CustomDrawerContent(props) {
  return (
    <View style={style.drawer}>
      <DrawerContentScrollView{...props}
        contentContainerStyle={{ backgroundColor: '#265e80' }}>
        <View style={style.drawer_header}>
          <Text style={style.text_drawer_header}>
            Welcome,{'\n'}
            {global.activeuser}
          </Text>
        </View>
        <View style={style.drawer}>
          <DrawerItemList{...props} />
        </View>
      </DrawerContentScrollView>
      <View style={style.container_logout}>
        {/* <DrawerItem label={() => <Text style={style.btn_style}><Ionicons
          name="log-out"
          size='30'
          color={'#265e7f'}
        /> Logout</Text>}
        /> */}
        <Button
          buttonStyle={style.btn_style}
          containerStyle={style.btn_container}
          onPress={() => {doLogout()}}>
          <Ionicons
            name="log-out"
            size='30'
            color={'#fff'}
          /> Logout
        </Button>
      </View>
    </View>
  )
}





