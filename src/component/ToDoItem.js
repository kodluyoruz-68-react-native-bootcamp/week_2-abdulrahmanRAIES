import React  from 'react';
import {SafeAreaView, StyleSheet,View,Text,TouchableOpacity} from 'react-native';

export default function ToDoItem({item,removeItem,check_}){
    return(
        <TouchableOpacity style={styles[item.isDone ? 'Opacity_' : 'Opacity']} 
            onLongPress={()=> removeItem(item.key,item)} onPress={check_(item)}>
            <Text style={styles[item.isDone ? 'Text_' : 'text']}>{item.name}</Text> 
        </TouchableOpacity>
    )
}
const styles=StyleSheet.create({
    item:{
       padding:16,
       marginTop:16,
       borderColor:'#bbb',
       borderWidth:1,
       borderStyle:'dashed',
       borderRadius:10,
    },
    title:{
       textAlign:'center',
       color: '#fff',
       fontSize:20,
       fontWeight:'bold',
    },
    text:{
        borderWidth:1,
        backgroundColor:'coral',
        borderRadius:10,
        fontSize:20,
        //fontWeight:'bold',
        //justifyContent:'center'
        alignContent:'center'
    },
    Opacity_:{
        borderRadius:20,
        padding:10,
        margin:5,

    },
    Text_:{
    textDecorationLine: 'line-through',
    backgroundColor:'#003f5c',
    fontSize:20,
    fontWeight:'bold',
    },
    Opacity:{
        borderRadius:10,
        margin:5,
        
        
    }
});