import React,{Component} from 'react'

import {Platform, TextInput, StyleSheet} from 'react-native';
import {Container, Text, Form, Input, Item, Button} from 'native-base'


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
            />
            <Input
                 placeholder='Password'
                 style={inputPasswordStyle}
            />
            <Form style={forgotPasswordViewStyle}>
                <Text style={forgotPasswordStyle}>Forgot Password?</Text>
            </Form>
            <Button block style={buttonStyle}>
                <Text style={textButtonStyle}>Login</Text>
            </Button>
        </Form>
        <Form style={newMemberViewStyle}>
            <Text style={newMemberStyle}>New Member?</Text>
            <Text style={createAccountStyle}>CREATE ACCOUNT</Text>
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
        maxWidth: 350,
        marginLeft: 10,
    },
    inputPasswordStyle:{
        borderWidth: 0.3,
        borderColor: '#b3b3b3',
        borderRadius: 3,
        maxWidth: 350,
        marginLeft: 10,
        marginBottom: 10
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
        backgroundColor: '#8c8c8c',
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