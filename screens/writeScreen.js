import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default class WriteScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            storyValue: ''
        }
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => {
                        this.setState({
                            storyValue: text
                        })
                    }}
                    multiline
                    numberOfLines={100}
                    value={this.state.storyValue}
                    placeholder="Write Your Story Here" />
                <TouchableOpacity style={styles.button} onPress={()=>{
                    this.setState({
                        storyValue:''
                    })
                }}>
                    <Text style={styles.text}>
                        Submit
                    </Text>
                </TouchableOpacity>
            </ScrollView>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        marginTop: 30,
        width: 350,
        height: 550,
        borderColor: 'gray',
        borderWidth: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        textAlignVertical: 'top',
        fontSize: 20
    },
    button: {
        justifyContent:'center',
        alignItems:"center",
        marginTop:20,
        paddingVertical:20,
        backgroundColor:'#3498db',
        width:150,
        borderRadius:20
    },
    text:{
        fontSize:20,
        color:'white',
        fontWeight:'bold'
    }
}) 
