import React,{useState} from 'react';
import {SafeAreaView, View, Text,StyleSheet,TextInput,Button,FlatList} from 'react-native';
import MyTextInput from './component/MyTextInput';
import Header from './component/Header';
import ToDoItem from './component/ToDoItem';

/**
 * TextInput: testID="input" (component which is user types the todo text)
 * TouchableOpacity: testID="button" (component which is saves the todo to list)
 * FlatList: testID="list" (list of todo)
 */

function App() {
  const [count,setaCounter]=useState(0);
  const [todo,setToDo]=useState('');

  const removeItem=(key) =>{
    //console.log(key);
    setToDo((prevTodo)=>{
      return prevTodo.filter(todo => todo.key != key);
    })
    setaCounter(count-1)
   }


       
   const addItem=(name) =>{
    if(name.length >0){
      setaCounter(count+1)
      setToDo((prevTodo)=>{
        return [
          {name: name , key: Math.random().toString(), isDone:false}, 
          ...prevTodo
        ]
      })
    }
   }

   const onClick=(key)=>{
    setToDo(
      todo.map((todo)=>
      todo.key===key?{...todo,isDone:! todo.isDone}:todo,),
    );
   };
   const check_=(key)=> (e) => {
    onClick(key);
   }
   
  return (
    <SafeAreaView style={ styles.containerBasic}>
      <View style={ styles.containerBasic}>
          <Header/> 
          <Text style={styles.number}>{count}</Text>
            <View style={styles.content}> 
            <MyTextInput  addItem={addItem}/>
                <View style={styles.list}>
                <FlatList
                  testID="list"
                  data={todo}
                  renderItem={({item}) => (
                  <ToDoItem  item={item} removeItem={removeItem} check_={check_}  />
                  )}
                />
                </View>
              
            </View>
      </View>
    </SafeAreaView>
  );
}

export default App;

const styles=StyleSheet.create({
containerBasic:{
  flex: 1,
  backgroundColor: '#003f5c',  
},
header:{
  height:80,
  paddingTop:38,
  backgroundColor:'coral',
},
 number:{
  height:40,
  textAlign:'center',
  color: '#fff',
  backgroundColor:'coral',
  fontSize:20,
  fontWeight:'bold',
 },
 content:{
  padding:40,
},
list:{
  marginTop:20,


},
})
