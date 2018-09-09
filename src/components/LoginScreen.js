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
            <TextInput placeholder='Email Adress' style={inputEmailStyle}/>
            <TextInput placeholder='Passwrod' style={inputPasswordStyle}/>
        </Form>
        <Form style={buttonView}>
            <Button>
                <Text>Login</Text>
            </Button>
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
        fontWeight: 'bold'
    },
    sloganStyle:{
        fontSize: 16,
        color: '#ccc',
    },
    inputsView:{
        flex: 2,
        height: 30
    },
    inputEmailStyle:{
        height: 50,
        borderWidth: 1,
        borderColor: '#b3b3b3',
        borderRadius: 3,
        maxWidth: 350,
        marginLeft: 10,
    },
    inputPasswordStyle:{
        height: 50,
        borderWidth: 1,
        borderColor: '#b3b3b3',
        borderRadius: 3,
        maxWidth: 350,
        marginLeft: 10
    },
    buttonView: {
        flex: 1
    }
})

const {mainContainer, logoView, inputsView, buttonView,
        inputEmailStyle, logoStyle, sloganStyle, inputPasswordStyle} = styles