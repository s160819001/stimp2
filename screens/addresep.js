import { StyleSheet, View, TextInput,Button,Image,Alert } from "react-native";
import React from "react";
import { DATA } from "../classes/resep";


export default function AddResep( props ) {


const [nama, onChangeNama] = React.useState("");
const [desk, onChangeDesk] = React.useState("");
const [foto, onChangeFoto] = React.useState("");
const [url,onSubmitFoto] =
React.useState("https://www.generationsforpeace.org/wpcontent/uploads/2018/03/empty-300x240.jpg");

return (
<View >
<TextInput
style={styles.input}
onChangeText={onChangeNama}
value={nama}
placeholder="nama masakan"
/>
<TextInput
style={styles.input2}
onChangeText={onChangeDesk}
value={desk}
placeholder="deskripsi"
multiline={true}
numberOfLines={4}
maxLength={100}
/>
<TextInput
style={styles.input}
onChangeText={onChangeFoto}
onSubmitEditing={(event) =>
onSubmitFoto(foto)
}
value={foto}
placeholder="url"/>
<Image style={styles.imgresep}
source={{uri: url}} />

<Button
title="SIMPAN"
onPress={() => {
var id=DATA.length+1;
DATA.push({
id: id,
nama: nama,
desk:desk,
photo:foto
})
Alert.alert('Data Resep tersimpan');
props.navigation.goBack(null);
}
}
/>

</View>
);
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        },
        imgresep: {
            width: 300,
            height: 200,
            
          },

          input2: {
            height: 120,
            borderWidth: 1,
            padding: 10,
            },
});
