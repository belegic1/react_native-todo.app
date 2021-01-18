import React from 'react'
import { StyleSheet,Text,View } from 'react-native'

const Sandbox = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.boxOne}>one</Text>
            <Text style={styles.boxTwo}>two</Text>
            <Text style={styles.boxTree}>tree</Text>
            <Text style={styles.boxFour}>four</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 40,
        backgroundColor: '#eee'
    },
    boxOne: {
        backgroundColor: 'violet',
        padding: 10,
        flex: 1
    },
    boxTwo: {
        backgroundColor: 'coral',
        padding: 10,
        flex: 2
    }, 
    boxTree:{
        backgroundColor: 'cadetblue',
        padding: 10
    },
    boxFour: {
        backgroundColor: 'gold',
        padding: 10
    }
})

export default Sandbox
