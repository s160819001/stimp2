import { StyleSheet, View, Text,Button,FlatList,Image } from "react-native";
import React from "react";
import { DATA } from "../classes/resep";

export default function Product({ navigation }) {
return (
<View >
<Text >Ini Product</Text>
<Button
        title="Product 1"
        onPress={() => navigation.navigate("Product Detail", { id: 1 })}
      />
  <Button
        title="Product 2"
        onPress={() => navigation.navigate("Product Detail", { id: 2 })}
      />

<FlatList
data={DATA}
renderItem={({ item }) => (
<View style={styles.vparent}>
                <Text style={styles.tnama}>{item.nama}</Text>
                <Image
                  style={styles.imgresep}
                  source={{uri: item.photo}}
                />
                <Text style={styles.tdesk}>{item.desk}</Text>
          </View>
)
}
/>
</View>
);
}

const styles = StyleSheet.create({
  vparent:{
    
      justifyContent: 'center',
      alignItems: 'center',
    borderWidth:1,
    borderColor:'#777',
    marginBottom:30,
    marginHorizontal:40,
    borderRadius:20,
    padding:20

  },
  tnama:{
    fontSize:20,
    color:"#55f"
  },
  imgresep: {
    width: 300,
    height: 200,
    
  },
});
