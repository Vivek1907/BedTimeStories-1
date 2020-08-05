import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Alert} from 'react-native';
import db from '../config';

export default class WriteScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            storyValue: '',
            storyTitle: '',
            storyAuthor:''
        }
    }

    async submitStory(){
        const storyTitle = this.state.storyTitle
        const storyAuthor = this.state.storyAuthor
        const storyValue = this.state.storyValue
        await db.collection("stories").add({
            'author': storyAuthor,
            'story': storyValue,
            'title':storyTitle
        })
        Alert.alert("Story Submitted");
    }

    render() {
        return (
            <View style={styles.container}>
            <ScrollView scrollEnabled>
                <TextInput 
                style={styles.singleLine}
                onChangeText={(text)=>{
                    this.setState({
                        storyTitle: text
                    })
                }}
                value={this.state.storyTitle}
                multiline={false}
                placeholder="Story Title"
                />
                <TextInput 
                style={[styles.singleLine,{marginTop:20}]}
                onChangeText={(text)=>{
                    this.setState({
                        storyAuthor: text
                    })
                }}
                value={this.state.storyAuthor}
                multiline={false}
                placeholder="Story Author"
                />
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
                    this.submitStory();
                }}>
                    <Text style={styles.text}>
                        Submit
                    </Text>
                </TouchableOpacity>
            </ScrollView>
            </View>
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
        height: 500,
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
        borderRadius:20,
        textAlign:'center',
        alignSelf:'center'
    },
    text:{
        fontSize:20,
        color:'white',
        fontWeight:'bold',
        
    },
    singleLine:{
        borderWidth:1,
        borderColor: 'gray',
        borderWidth: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        textAlignVertical: 'top',
        fontSize: 20,
        width: 350,
        marginTop:40
    }
}) 
