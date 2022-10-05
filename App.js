import { StatusBar } from 'expo-status-bar';
import React,{useEffect, useState, Component} from 'react';
import { Button, StyleSheet, Text, View,NativeModules } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { createDrawerNavigator, DrawerContentScrollView,DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Home from './screens/home';
import About from "./screens/about";
import Product from "./screens/product";
import Setting from "./screens/setting";
import ProductDetail from "./screens/productdetail";
import AddProduct from './screens/addproduct';
import Books from './screens/books';
import AddBook from './screens/addbook';
import Quiz from './screens/quiz';
import Counter from './screens/counter';
import Login from './screens/login';
import Animation1 from './screens/animation1';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();



export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      islogin:false
    }

    this.cekLogin().then((item)=>{
      if(item!=null){
          this.setState(
          this.state = {
              islogin:true
          });
      }
    });
  }

  cekLogin = async () => {
    try {
        const value = await AsyncStorage.getItem('username');
        global.activeuser=value;
        //  alert(value);
        if(value !== null) {
            return value;
        }
    } catch(e){
        // error reading value
    }
  }

  Nav2(){
    return (
      <Stack.Navigator>
        <Stack.Screen name="Product List" component={Product} /> 
        <Stack.Screen name="Product Detail" component={ProductDetail} />
      </Stack.Navigator>
    );
  }

  DrawerNav(){
    return(
      <Drawer.Navigator initialRouteName=""
      screenOptions={({ route }) => ({drawerIcon: ({focused}) => {var iconName;
        if(route.name=='Dashboard')
          { iconName='home'; var iconColor=(focused)? 'blue':'gray';}
        if(route.name == 'Add Book')
          { iconName='add-circle'; var iconColor=(focused)? 'blue':'gray';} 
        if(route.name == 'Add Product')
          { iconName='add-circle'; var iconColor=(focused)? 'blue':'gray';} 
        if(route.name == 'Setting')
          { iconName='cog'; var iconColor=(focused)? 'blue':'gray';} 
        if(route.name == 'Books')
          { iconName='book'; var iconColor=(focused)? 'blue':'gray';} 
        if(route.name == 'Quiz')
          { iconName='document-text'; var iconColor=(focused)? 'blue':'gray';} 
        if(route.name == 'Counter')
          { iconName='timer-outline'; var iconColor=(focused)? 'blue':'gray';} 
        return <Ionicons name={iconName} size={30} color={iconColor}/>;},
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
        })}
        drawerContent={props => <CustomDrawerContent {...props} />}
      >
          <Drawer.Screen name= "Dashboard" component={Home} options={{ headerShown: true}} />
          <Drawer.Screen name="Add Product" component={AddProduct} options={{}} />
          <Drawer.Screen name="Books" component={Books} />
          <Drawer.Screen name="Add Book" component={AddBook} options={{}} />
          <Drawer.Screen name="Quiz" component={Quiz} />
          <Drawer.Screen name="Counter" component={Counter} />
          <Drawer.Screen name="Animation1" component={Animation1} />
          <Drawer.Screen name="Setting" component={Setting} />
      </Drawer.Navigator>
    );
  }

  
    

  render() {
    if(!this.state.islogin){
      return(
        <NavigationContainer><Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false}}/>
          </Stack.Navigator>
        </NavigationContainer>);
    }else{
      return (
          // #region w1
        // <NavigationContainer> 
        //   <Stack.Navigator>
        //     <Stack.Screen name="Home" component={Home} />
        //     <Stack.Screen name="About" component={About} /> 
        //     <Stack.Screen name="Product" component={Product} /> 
        //     <Stack.Screen name="Product Detail" component={ProductDetail} /> 
        //   </Stack.Navigator>
        // </NavigationContainer>
        // <NavigationContainer>
        //   <Drawer.Navigator initialRouteName="Home">
        //     <Drawer.Screen name= "Main" component={TabNav} options={{ headerShown: true }} />
        //     <Drawer.Screen name="Setting" component={Setting} />
        //   </Drawer.Navigator>
        // </NavigationContainer>
        // #endregion

        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({tabBarIcon: ({focused}) => {var iconName;
            if(route.name=='Home')
              { iconName='home'; var iconColor=(focused)? 'blue':'gray';} 
            if(route.name == 'About')
              { iconName='help'; var iconColor=(focused)? 'blue':'gray';} 
            if(route.name == 'Product')
              { iconName='cube'; var iconColor=(focused)? 'blue':'gray';} 
            if(route.name == 'Books')
              { iconName='book'; var iconColor=(focused)? 'blue':'gray';} 
            return <Ionicons name={iconName} size={30} color={iconColor}/>;},
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'gray',
            })}
          >
            <Tab.Screen name="Home" component={this.DrawerNav} options={{headerShown:false}}/>
            <Tab.Screen name="Product" component={this.Nav2} options={{headerShown: false}} />
            <Tab.Screen name="Books" component={Books} />
            <Tab.Screen name="About" component={About} /> 
          </Tab.Navigator>
        </NavigationContainer>
      );
    }
  }
}


// function TabNav(){
//   return(
//     <Tab.Navigator
//         screenOptions={({ route }) => ({tabBarIcon: ({focused}) => {var iconName;
//         if(route.name=='Home')
//           { iconName='home'; var iconColor=(focused)? 'blue':'gray';} 
//         if(route.name == 'About')
//           { iconName='help'; var iconColor=(focused)? 'blue':'gray';} 
//         if(route.name == 'Product')
//           { iconName='cube'; var iconColor=(focused)? 'blue':'gray';} 
//         return <Ionicons name={iconName} size={30} color={iconColor}/>;},
//       tabBarActiveTintColor: 'blue',
//       tabBarInactiveTintColor: 'gray',
//     })}
//     >
//       <Tab.Screen name="Home" component={DrawerNav} />
//       <Tab.Screen name="Product" component={Nav2} options={{headerShown: false}} />
//       <Tab.Screen name="About" component={About} /> 
//     </Tab.Navigator>
//   );
 
// }

doLogout = async () => {
  try {
    await AsyncStorage.removeItem('username')
    alert('Logged out');
    NativeModules.DevSettings.reload();
  } catch (e) {
  }
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView{...props}>
      <DrawerItemList {...props} />
      <DrawerItem label={() => <Text><Ionicons name={'log-out'} size={30} color={'black'}/>&nbsp;Logout</Text>}
          onPress={() => doLogout()}
          style={styles.bottomdrawer}
      />
    </DrawerContentScrollView>
  );
}
  

// function DrawerNav(){
//   return(
//     <Drawer.Navigator initialRouteName=""
//     screenOptions={({ route }) => ({drawerIcon: ({focused}) => {var iconName;
//       if(route.name=='Dashboard')
//         { iconName='home'; var iconColor=(focused)? 'blue':'gray';}
//       if(route.name == 'Add Book')
//         { iconName='add-circle'; var iconColor=(focused)? 'blue':'gray';} 
//       if(route.name == 'Add Product')
//         { iconName='add-circle'; var iconColor=(focused)? 'blue':'gray';} 
//       if(route.name == 'Setting')
//         { iconName='cog'; var iconColor=(focused)? 'blue':'gray';} 
//       if(route.name == 'Books')
//         { iconName='book'; var iconColor=(focused)? 'blue':'gray';} 
//       if(route.name == 'Quiz')
//         { iconName='document-text'; var iconColor=(focused)? 'blue':'gray';} 
//       if(route.name == 'Counter')
//         { iconName='timer-outline'; var iconColor=(focused)? 'blue':'gray';} 
//       return <Ionicons name={iconName} size={30} color={iconColor}/>;},
//       tabBarActiveTintColor: 'blue',
//       tabBarInactiveTintColor: 'gray',
//       })}
//       drawerContent={props => <CustomDrawerContent {...props} />}
//     >
//         <Drawer.Screen name= "Dashboard" component={Home} options={{ headerShown: true}} />
//         <Drawer.Screen name="Add Product" component={AddProduct} options={{}} />
//         <Drawer.Screen name="Books" component={Books} />
//         <Drawer.Screen name="Add Book" component={AddBook} options={{}} />
//         <Drawer.Screen name="Quiz" component={Quiz} />
//         <Drawer.Screen name="Counter" component={Counter} />
//         <Drawer.Screen name="Animation1" component={Animation1} />
//         <Drawer.Screen name="Setting" component={Setting} />
//     </Drawer.Navigator>
//   );
// }

// function Nav2(){
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Product List" component={Product} /> 
//       <Stack.Screen name="Product Detail" component={ProductDetail} />
//     </Stack.Navigator>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bg:{
    flex:1,
    backgroundColor:'#000',
    alignItems: 'center',
    justifyContent:'center',
  },
  hello:{
    fontSize:'28',
    color:'#fff',
  },
  text:{
    fontSize:'18',
    color:'#fff',
  },
  bottomdrawer:{
    
  }
});

function w1(){
  <View style={styles.bg}>
  <Text style={styles.hello}>Hello World</Text>
  <Pet type='cat'/>
  <Pet type='dog'/>
  <Pet type='duck'/>
  <Text style={styles.hello}>Latihan 1</Text>
  <Nilai/>
  <Text style={styles.hello}>Latihan 2</Text>
  <Kotak/>
  <StatusBar style="light" />
</View>
}

const Pet = (prop) => {
  const [action, setAction] = useState(prop.type);
  return (
    <View>
      <Text style={styles.text}>I am your pet! I am a {prop.type}. {voice(action)}</Text>
      <Text style={{flexDirection:'row'}}>
        <Button title="Feed me"
          onPress={()=>setAction('feed')}/>
        <Button title="Cuddle me"
          onPress={()=>setAction('cuddle')}/>
        <Button title="Play with me"
          onPress={()=>setAction(prop.type)}/>
      </Text>
    </View>
  );
};

const voice =(jenis)=>{ 
    if(jenis=="cat"){
      return "Meow meow 🐈"
    }else if(jenis=="dog"){
      return "Woof woof 🐶"
    }else if(jenis=="duck"){
      return "Quak quak 🦆"
    }if(jenis=='feed')return "Nyam nyam"
    if(jenis=='cuddle') return "Zzzz zzz"
}


var n=99;
const Nilai = () => {
  const [action, setAction] = useState(n);
  useEffect(()=>setAction(n),[]);
  return (
    <View>
      <Text style={styles.text}>Skor anda {n} dengan predikat {predikat(action)}</Text>
      <Text style={{flexDirection:'row',alignSelf:'center'}}>
        <Button title='-5'
          onPress={()=>{ var a=n-5; a<0 ? setAction(n=4) :setAction(n-=5)}}/>
        <Button title='+5'
          onPress={()=> {var a=n+5; a>100 ? setAction(n=99) :setAction(n+=5)}}/>
      </Text>
    </View>
  );
};

const predikat=(p)=>{
  if(p>=86 && p<=100) return "Sangat Baik (A)"
  else if(p>=71 && p<=85) return "Baik (B)"
  else if (p>=56 && p<=70) return "Cukup (C)"
  else if (p<=55) return "Kurang (D)"
};

const Kotak=()=>{
  var font=50;
  var cR=0;
  var cG=0;
  var cB=0;
  const [action,setAction] = useState(font);
  const [actionCR,setActionCR] = useState(cR);
  const [actionCG,setActionCG] = useState(cG);
  const [actionCB,setActionCB] = useState(cB);
  useEffect(()=>setAction(font),[]);
  useEffect(()=>setActionCR(cR),[]);
  useEffect(()=>setActionCG(cG),[]);
  useEffect(()=>setActionCB(cB),[]);
  return(
    <View>
      <Text style={{ fontSize:action, backgroundColor:'rgb('+actionCR+','+actionCG+','+actionCB+')' }} >&nbsp;&nbsp;&nbsp;&nbsp;</Text>
      <Button title='Press Me' onPress={()=>{var a=action; setAction(a+=1)}}/>
      <Text style={{flexDirection:'row'}}>
        <Button title='R+' onPress={()=>{var a=actionCR; setActionCR(a+=10)}}/>
        <Button title='R-' onPress={()=>{var a=actionCR; setActionCR(a-=10)}}/>
        <Button title='G+' onPress={()=>{var a=actionCG; setActionCG(a+=10)}}/>
        <Button title='G-' onPress={()=>{var a=actionCG; setActionCG(a-=10)}}/>
        <Button title='B+' onPress={()=>{var a=actionCB; setActionCB(a+=10)}}/>
        <Button title='B-' onPress={()=>{var a=actionCB; setActionCB(a-=10)}}/>
      </Text>
    </View>
  );
};
