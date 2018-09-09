import React,{Component} from 'react'

import {StyleSheet, TouchableWithoutFeedback} from 'react-native';
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
      <Container>
        <Header transparent>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
              <Text>HOME</Text>
            </Button>
          </Left>
          <Right>
            <Button transparent>
              <Text>notify</Text>
            <Badge success style={badgeStyle}>
              <Text style={badgeTextStyle}>2</Text>
            </Badge>
            </Button>
            <Button transparent>
              <Text>cart</Text>
              <Badge primary style={badgeStyle}>
                <Text style={badgeTextStyle}>2</Text>
              </Badge>
            </Button>
          </Right>
        </Header>
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
    }
})

const {badgeStyle, badgeTextStyle} = styles