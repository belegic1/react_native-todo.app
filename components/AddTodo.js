import React, { useState } from 'react'
import { StyleSheet, TextInput, Text, Button, View } from 'react-native'


const AddTodo = ({submitHandler}) => {

    const [text, setText] = useState('')
    const changeHandler = e => {
        setText(e)
    }

    return (
        <View>
            <TextInput
                placeholder='New todo'
                onChangeText={changeHandler}
                style={styles.input}
            />
            <Button title='Add Todo'
            color='coral'
            onPress={()=> submitHandler(text)}
             />
        </View>
    )
}

export default AddTodo

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomColor: '#ddd',
        borderRightWidth: 1
    }
})