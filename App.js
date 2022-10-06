import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

import style from './assets/style';
import Home from './screens/home';
import ColorMixer from './screens/colormixer';
import HighScore from './screens/highscore';
import { Button } from '@rneui/base';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={DrawerNav}
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
    </NavigationContainer>
  );
}

function DrawerNav() {
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


function CustomDrawerContent(props) {
  return (
    <View style={style.drawer}>
      <DrawerContentScrollView{...props}
        contentContainerStyle={{ backgroundColor: '#265e80' }}>
        <View style={style.drawer_header}>
          <Text style={style.text_drawer_header}>
            Welcome,{'\n'}
            (namausernya)
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
          containerStyle={style.btn_container}>
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

