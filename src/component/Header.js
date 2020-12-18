import React  from 'react';
import {SafeAreaView, StyleSheet,View,Text} from 'react-native';


export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>MY TODO</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    header:{
        height:80,
        paddingTop:38,
        backgroundColor:'coral',
    },
    title:{
       textAlign:'center',
       color: '#fff',
       fontSize:20,
       fontWeight:'bold',
    }
});