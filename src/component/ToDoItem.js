import React  from 'react';
import {SafeAreaView, StyleSheet,View,Text,TouchableOpacity} from 'react-native';

export default function ToDoItem({item,removeItem,check_}){
    return(
        <TouchableOpacity style={styles[item.isDone ? 'Opacity_' : 'Opacity']} 
            onLongPress={()=> removeItem(item.key)} onPress={check_(item.key)}>
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
    },
    Opacity_:{
        borderRadius:20,
        padding:10,
        margin:5,

    },
    Text_:{
    textDecorationLine: 'line-through',
    backgroundColor:'#003f5c'
    },
    Opacity:{
        borderRadius:10,
        margin:5,
        
        
    }
});
/*import React  from 'react';
import {SafeAreaView, StyleSheet,View,Text,TouchableOpacity} from 'react-native';

export default function ToDoItem({item,pressHandler,onCheckButtonClicHandler}){
    return(
        <TouchableOpacity style={styles[item.checked ? 'throughOpacity' : 'Opacity']}
            onLongPress={()=> pressHandler(item.key)} onPress={onCheckButtonClicHandler(item.key)}>
            <Text style={styles.item}>{item.name}</Text>
        </TouchableOpacity>
    )
}
//onLongPress={()=>pressHandler(item.key)
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
    }
});*/ 

/*import React  from 'react';
import {SafeAreaView, StyleSheet,View,Text,TouchableOpacity} from 'react-native';

export default function ToDoItem({item,pressHandler,onCheckButtonClicHandler}){
    return(
        <TouchableOpacity
            onLongPress={()=> pressHandler(item.key)} >
            <Text style={styles.item}>{item.name}</Text>
        </TouchableOpacity>
    )
}
//onLongPress={()=>pressHandler(item.key)
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
    }
});
*/ 