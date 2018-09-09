import React,{Component} from 'react'

import {StyleSheet, Image} from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";

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
        Body,
        Card,
        CardItem,
        Content} from 'native-base'


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
        <Content>
        <Form style={storeViewStyle}>
          <Header searchBar transparent rounded  style={headerSearchbarStyle}>
            <Text style={titleViewStoreStyle}>SUMMER OFFER</Text>
            <Item style={{backgroundColor:'#e6e6e6'}}>
              <Icon name= 'ios-search' />
              <Input placeholder='Search' />
            </Item>
          </Header>
          <Card transparent>
            <CardItem>
              <Image  source={require('../../img/offer.png')} style={carrouselImageStyle}/>
            </CardItem>
          </Card>
          <Grid style={{alignItems: 'center'}}>
            <Col>
              <Row>
                <Card style={cardStyleLeft}>
                  <CardItem>
                    <Image source={require('../../img/man.png')} style={productStyle} />
                  </CardItem>
                  <CardItem>
                    <Text>1</Text>
                  </CardItem>
                </Card>
              </Row>
              <Row>
              <Card style={cardStyleLeft}>
                  <CardItem>
                    <Image source={require('../../img/man.png')} style={productStyle} />
                  </CardItem>
                  <CardItem>
                    <Text>2</Text>
                  </CardItem>
                </Card>
              </Row>
            </Col>
            <Col>
              <Row>
              <Card style={cardStyleRight}>
                  <CardItem>
                    <Image source={require('../../img/man.png')} style={productStyle} />
                  </CardItem>
                  <CardItem>
                    <Text>3</Text>
                  </CardItem>
                </Card>
              </Row>
              <Row>
                <Card style={cardStyleRight}>
                  <CardItem>
                    <Image source={require('../../img/man.png')} style={productStyle} />
                  </CardItem>
                  <CardItem>
                    <Text>Olá</Text>
                  </CardItem>
                </Card>
              </Row>
            </Col>
          </Grid>
        </Form>
        </Content>
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
    },
    carrouselImageStyle: {
      borderRadius: 15,
      height: 300,
      width: null,
      flex: 1,
      resizeMode: 'contain',
      shadowColor: '#999',
      shadowOpacity: 2.8,
      shadowOffset: {
        width: 0.8,
        height: 0.8
      }
    },
    productStyle:{
      width: 150,
      height: 200,
      shadowColor: '#999',
      shadowOpacity: 2.8,
      shadowOffset: {
        width: 0.8,
        height: 0.8
      }
    },
    cardStyleLeft: {
      marginLeft: 18
    },
    cardStyleRight: {
      marginRight: 10
    }
    
})

const {badgeStyle, badgeTextStyle, textHeaderStyle,
       iconStyle, storeViewStyle, titleViewStoreStyle,
       productStyle, headerSearchbarStyle, carrouselImageStyle,
       cardStyleLeft, cardStyleRight} = styles