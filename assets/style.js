import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1dd96',
        // alignItems: 'center',
    },
    text_judul: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#265e80',
        margin: 20,
        alignSelf:'center',
    },
    text_body: {
        fontSize: 18,
        color: '#265e80',
        margin: 20,
    },
    btn_style: {
        borderRadius: 8,
        backgroundColor: '#a1346f',
    },
    btn_container: {
        width: '90%',
        alignSelf:'center',
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
        fontSize:28,
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
    },
    linear_progress:{
        height:30,
        position:'absolute',
        width:'100%',
    },
    text_linear_progress:{
        position:'relative',
        textAlign:'center',
        color:'#fff',
        fontSize:24,
    },
    text_score:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#265e80',
        marginTop: 30,
        textAlign:'right',
        marginRight:10,
    },
    slider_container:{
        marginHorizontal:20,
    },
    card:{
        borderRadius:10,
        backgroundColor:'#f1dd96',
    },
    dialog:{
        backgroundColor:'#f1dd96',
        borderRadius:10,
    }
});
