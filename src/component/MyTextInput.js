import React  ,{useState} from 'react';
import {SafeAreaView, StyleSheet,View,Text,TextInput,Button,TouchableOpacity} from 'react-native';

export default function MyTextInput({addItem}){
    const [text,setText]=useState('');
    
    const changeHandler =()=>{
        text && addItem(text);
        setText('');    
    }

//onChangeText={changeHandler} == onChangeText={(val)=>changeHandler(val)}
    return(
       <View>
           <TextInput
           testID="input" 
           style={styles.input}
           value={text}
           placeholder=' add a new todo..'
           placeholderTextColor={'white'}
           onChangeText={(value) => setText(value)}
           />
        <TouchableOpacity testID="button"  onPress={changeHandler} 
        style={[styles.buttonContainer ]} >
        <Text style={styles.input1}>add todo</Text>
        </TouchableOpacity>
       </View>
    )
}
const styles=StyleSheet.create({
    input:{
       paddingHorizontal:16,
       marginBottom:10,
       paddingVertical:6,
       borderBottomWidth:1,
       borderBottomColor: '#ddd',
       color:'white'
    },
    input1:{
        color: 'white',
        justifyContent: 'center',
        padding:5,
    },
    buttonContainer :{
        backgroundColor: "coral",
        paddingVertical:5,
        borderRadius:20,
        alignItems: 'center',
    },


});