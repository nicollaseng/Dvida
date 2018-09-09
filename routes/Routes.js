import React, { Component } from 'react'
import {Router, Scene} from 'react-native-router-flux'

import LoginScreen from '../src/components/LoginScreen'
import StoreScreen from '../src/components/StoreScreen'

export default Routes = () => (
    <Router>
        <Scene key="root">
            <Scene key="loginScreen" component={LoginScreen} title="Logn" hideNavBar />
            <Scene key="storeScreen" component={StoreScreen} title="StoreScreen" hideNavBar initial />
        </Scene>
    </Router>
)

