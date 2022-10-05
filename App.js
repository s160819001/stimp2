import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentScrollView,DrawerItem, DrawerItemList  } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

import style from './assets/style';
import Home from './screens/home';
import ColorMixer from './screens/colormixer';
import HighScore from './screens/highscore';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={DrawerNav} options={{ title: 'Color Mixer', headerShown: false }} />
        <Stack.Screen name="ColorMixer" component={ColorMixer} />
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
          title: 'Color Mixer' ,
          drawerItemStyle: { height: 0}
        }} />
      <Drawer.Screen 
        name="HighScore" 
        component={HighScore}
        options={{
          drawerIcon: ({focused, size}) => (
            <Ionicons
               name="podium"
               size={size}
               color={focused ? 'blue' : 'gray'}
            />
        )
        }} />
    </Drawer.Navigator>
  )
}


function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView{...props}>
      <View style={style.container}>
        <Text>BRO</Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem label={() => <Text>Logout</Text>}
      options={{
        drawerIcon: ({focused, size}) => (
          <Ionicons
             name="log-out"
             size={size}
             color={focused ? 'blue' : 'gray'}
          />
      )
      }}
      />
    </DrawerContentScrollView>
  );
}
