import React,{Component} from 'react'

import {StyleSheet, TouchableWithoutFeedback} from 'react-native';
import { SearchBar } from 'react-native-elements'
import {Container,
        Text,
        Form,
        Input,
        Button,
        Label,
        Header,
        Left,
        Right,
        Icon,
        Badge} from 'native-base'


export default class StoreScreen extends Component {
  render() {
    return (
      <Container style={{flex: 1}}>
        <Header transparent>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' style={iconStyle}/>
              <Text style={textHeaderStyle} >HOME</Text>
            </Button>
          </Left>
          <Right>
            <Button transparent>
              <Text style={textHeaderStyle}>notify</Text>
            <Badge success style={badgeStyle}>
              <Text style={badgeTextStyle}>2</Text>
            </Badge>
            </Button>
            <Button transparent>
              <Text style={textHeaderStyle}>cart</Text>
              <Badge primary style={badgeStyle}>
                <Text style={badgeTextStyle}>2</Text>
              </Badge>
            </Button>
          </Right>
        </Header>
        <Form style={storeViewStyle}>
          <Label style={titleViewStoreStyle}>SUMMER OFFER</Label>
          <SearchBar lightTheme placeholder='Searc' />
        </Form>
        
      </Container>
    );
  }
}


const styles = StyleSheet.create({
    badgeStyle: {
      position: 'relative',
      width: 20,
      height: 18
    },
    badgeTextStyle: {
      fontSize: 10, 
      height: 23,
      right:2
    },
    textHeaderStyle: {
      color: '#000',
      fontSize: 16
    },
    iconStyle: {
      color: '#000'
    },
    storeViewStyle: {
      flex: 1,
      margin: 16
    },
    titleViewStoreStyle: {
      fontSize: 25,
      fontWeight: '600'
    }
    
})

const {badgeStyle, badgeTextStyle, textHeaderStyle,
       iconStyle, storeViewStyle, titleViewStoreStyle} = styles