import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1dd96',
        alignItems: 'center',
    },
    text_judul: {
        fontSize: '28',
        fontWeight: 'bold',
        color: '#265e80',
        margin: 20,
    },
    text_body: {
        fontSize: '18',
        color: '#265e80',
        margin: 20,
    },
    btn_style: {
        borderRadius: 8,
        backgroundColor: '#a1346f',
    },
    btn_container: {
        width: '90%',
    },
    drawer: {
        flex: 1,
        backgroundColor: '#f0952a',
    },
    drawer_header:{
        backgroundColor:'#265e80',
        height:175,
    },
    text_drawer_header:{
        fontSize:'28',
        fontWeight:'bold',
        color:'#f1dd96',
        position:'absolute',
        bottom:10,
        left:10,
    },
    container_logout:{
        height:70,
        marginLeft:30,
        bottom:15,
    }
});
