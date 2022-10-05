import { StyleSheet, View, Text, Button } from "react-native";
import React from "react";
  
export default function Home({navigation}) {
    return (
        <View>
            <Text >Selamat datang, {global.activeuser} !</Text>
            <Button title="Go to Product page" onPress={() => navigation.navigate("Product")} />
            <Button title="Go to About page" onPress={() => navigation.navigate("About")} />
        </View>
    );
}