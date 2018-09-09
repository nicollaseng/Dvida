import React,{Component} from 'react'

import {StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {Container, Text, Form, Input, Button} from 'native-base'

import { Actions } from 'react-native-router-flux'

export default class App extends Component {
  render() {
    return (
      <Container style={mainContainer}>
        <Form style={logoView}>
            <Text style={logoStyle}>D.Vida</Text>
            <Text style={sloganStyle}>ReactNative Test</Text>
        </Form>
        <Form style={inputsView}>
            <Input
                 placeholder='Email Adress'
                 style={inputEmailStyle}
                 placeholderTextColor={'#ccc'}
            />
            <Input
                 placeholder='Password'
                 style={inputPasswordStyle}
                 placeholderTextColor={'#ccc'}
            />
            <Form style={forgotPasswordViewStyle}>
                <Text style={forgotPasswordStyle}>Forgot Password?</Text>
            </Form>
            <Button block style={buttonStyle} onPress={() => Actions.storeScreen()}>
                <Text style={textButtonStyle}>Login</Text>
            </Button>
        </Form>
        <Form style={newMemberViewStyle}>
            <Text style={newMemberStyle}>New Member?</Text>
            <TouchableWithoutFeedback onPress={() => alert('Create Account')}>
                <Text style={createAccountStyle}>CREATE ACCOUNT</Text>
            </TouchableWithoutFeedback>
            
        </Form>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    logoView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoStyle: {
        fontSize: 40,
        fontWeight: '600'
    },
    sloganStyle:{
        fontSize: 16,
        color: '#ccc',
    },
    inputsView:{
        flex: 1,
        height: 30
    },
    inputEmailStyle:{
        borderWidth: 1,
        borderColor: '#b3b3b3',
        borderRadius: 3,
        marginLeft: 10,
        marginRight: 10,
        padding: 6
    },
    inputPasswordStyle:{
        borderWidth: 0.3,
        borderColor: '#b3b3b3',
        borderRadius: 3,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        padding: 6
    },
    forgotPasswordViewStyle: {
        padding: 10,
        alignItems: 'flex-end'
    },
    forgotPasswordStyle: {
        color: '#b3b3b3',
        fontSize: 16
    }, 
    buttonStyle: {
        margin: 15,
        backgroundColor: '#a6a6a6',
    },
    textButtonStyle: {
        color: '#000',
        fontSize: 27,
        fontWeight: '300'
    },
    newMemberViewStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    newMemberStyle: {
        fontSize: 13,
        color: '#b3b3b3',
        marginBottom: 9
    },
    createAccountStyle: {
        fontSize: 14,
        letterSpacing: 2,
        fontWeight: '500'
    }
})

const {mainContainer, logoView, inputsView, buttonStyle,
        inputEmailStyle, logoStyle, sloganStyle, 
        inputPasswordStyle, forgotPasswordViewStyle, forgotPasswordStyle,
        textButtonStyle, newMemberViewStyle, newMemberStyle,
        createAccountStyle} = styles