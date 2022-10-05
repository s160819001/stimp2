import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,NativeModules } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home';
import About from "./screens/about";
import ProductDetail from './screens/productdetail';
import Product from "./screens/product";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator,DrawerContentScrollView,DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import AddResep from './screens/addresep';
import Quiz from './screens/quiz';
import Login from './screens/login';
import React, {Component} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


export default class App extends Component {

   Nav2() {
      return (
        <Stack.Navigator>
          <Stack.Screen name="Product List" component={Product} />
          <Stack.Screen name="Product Detail" component={ProductDetail} />
        </Stack.Navigator>
      );
    }
    
     NavDrawer(){
      return (
      <Drawer.Navigator initialRouteName="   ">
               <Drawer.Screen name= "Home" component={Home}  
               options={{ headerShown: false }} />
               <Drawer.Screen name="About" component={About} />
            </Drawer.Navigator>
      );
    }
  
  Nav1(){ return (
<Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="About" component={About} />
        </Tab.Navigator>  
    );
  }

  cekLogin = async () => {
      try {
        const value = await AsyncStorage.getItem('username');
        //alert(value);
        if(value !== null) {
          global.activeuser=value;
          return value;
        }
      } catch(e) {
        // error reading value
      }
    }

    
  constructor(props){
    super(props);
    this.state = {
        islogin:false
    }
    this.cekLogin().then((item)=>{
      if(item!=null){
      this.setState(
        this.state = {
          islogin:true
        })
      }
    })
  }

 CustomDrawerContent(props) {
      return (
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <DrawerItem label={() => <Text>Logout</Text>}
            onPress={() => {
               AsyncStorage.removeItem('username')
              alert('logged out');
               NativeModules.DevSettings.reload();
            }}
          />
        </DrawerContentScrollView>
      );
    }
    
 

      
  render() {
      if(!this.state.islogin ){
       return(
      <NavigationContainer><Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
      </NavigationContainer>);
     }else
     {
    
return (
<NavigationContainer>
<Drawer.Navigator drawerContent={props => <this.CustomDrawerContent {...props} />}>

               <Drawer.Screen name= "Main" component={this.Nav1}  
               options={{ headerShown: true }} />
               <Drawer.Screen name="About" component={About} />

               <Drawer.Screen name="Product" component={Product} />

               <Drawer.Screen name="Add Resep" component={AddResep} />

               <Drawer.Screen name="Quiz" component={Quiz} />
            </Drawer.Navigator>

      </NavigationContainer>

    );
    } //elseif
  } //render
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
