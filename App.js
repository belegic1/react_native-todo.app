import React, { useState } from 'react'
import { StyleSheet, View, TouchableWithoutFeedback,
   FlatList, Alert,  Keyboard } from 'react-native'

import Header from './components/Header'
import Todo from './components/Todo'
import AddTodo from './components/AddTodo'
import Sandbox from './components/Sandbox'

const App = () => {
  const [todos, setTodos] = useState([
    { text: 'Buy coffe', key: '1' },
    { text: 'Create an app', key: '2' },
    { text: 'Go to the gym', key: '3' },
  ])

  const pressHandler = (key)=>{
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo => todo.key !== key)
    })
  }

  const submitHandler = (text) =>{
    if(text.length >= 3){
      setTodos((prevTodos) => {
        return [...prevTodos,
        { text: text, key: Math.random().toString() },

        ]
      })
    }else{
      Alert.alert('opps!', 'Todos must be minimum 3 chars long', [
        {text: 'Understood', onPress: ()=> console.log('Closed alert')}
      ])
    }
    
  }
  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
    }}>
      <View style={styles.container} >
        <Header />
        <View style={styles.content}>
          <AddTodo
            submitHandler={submitHandler}

          />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <Todo item={item}
                  pressHandler={pressHandler}
                />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback> 
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    padding:40 ,
    flex: 1
  },
  list: {
    marginTop: 20,
    flex: 1
  }
})

export default App


