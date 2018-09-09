import React,{Component} from 'react'

import {StyleSheet, TouchableWithoutFeedback} from 'react-native'
import SearchBar from 'react-native-search-bar'

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
        Badge,
        Item,
        Body} from 'native-base'


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
         <Header searchBar transparent rounded  style={headerSearchbarStyle}>
          <Text style={titleViewStoreStyle}>SUMMER OFFER</Text>
          <Item style={{backgroundColor: '#e6e6e6'}}>
            <Icon name= 'ios-search' />
            <Input placeholder='Search' />
          </Item>
        </Header>
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
      
    },
    titleViewStoreStyle: {
      fontSize: 25,
      fontWeight: '700',
      marginBottom: 10
    },
    searchBarStyle: {
      height: 35,
      borderRadius: 10,
      backgroundColor: '#e6e6e6'
    },
    headerSearchbarStyle: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      height: 90,
      marginLeft: 10
    }
    
})

const {badgeStyle, badgeTextStyle, textHeaderStyle,
       iconStyle, storeViewStyle, titleViewStoreStyle,
       searchBarStyle, headerSearchbarStyle} = styles