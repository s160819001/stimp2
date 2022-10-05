import { StyleSheet, View, Text, Button } from "react-native";

export default function Home({ navigation }) {
  return ( 
    <View >
      <Text >Halo {global.activeuser}, Ini Home</Text>
      <Button
        title="Go to About page"
        onPress={() => navigation.navigate("About")}
      />
        <Button
        title="Go to Product page"
        onPress={() => navigation.navigate("Product")}
      />
    </View>
  );
}
