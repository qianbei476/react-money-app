import React, { Component } from 'react';

import {
  Text,
  View,
} from 'react-native'

import { connect, Provider } from 'react-redux';
import { Scene, Router, Actions, Reducer } from 'react-native-router-flux';

import configStore from './configStore';
import * as page from './page';
import IconFont from './IconFont';

class TabIcon extends Component {
    render(){
      let iconName = this.props.selected ? this.props.activeIconName || this.props.iconName : this.props.iconName;
      let color = this.props.selected ? '#18B4ED' : '#B3B3B3';
        return (
          <View style={{alignItems:'center'}}>
            <IconFont name={iconName} style={{backgroundColor:'transparent'}} size={24} color={color} />
            <Text style={{color, fontSize:11}}>{this.props.iconText || this.props.title}</Text>
          </View>
        );
    }
}

const ConnectedRouter = connect()(Router);

const getSceneStyle = (props, computedProps) => {
  const style = {
    flex: 1,
    backgroundColor: '#f1f1f1',
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null,
  };
  if (computedProps.isActive) {
    style.marginTop = computedProps.hideNavBar ? 0 : 64;
    style.marginBottom = computedProps.hideTabBar ? 0 : 50;
  }
  return style;
};

class App extends Component {
  render(){
    return (
      <ConnectedRouter
        getSceneStyle={getSceneStyle}
        navigationBarStyle={{backgroundColor:'#18B4ED'}}
        titleStyle={{color:'#fff'}}
        >
        <Scene key='login' component={page.LoginPage} hideNavBar={true} hideTabBar={true} title='登录' type='reset' />
        <Scene key='main' tabs={true} type='replace'>
          <Scene key='home' component={page.HomePage} title='菜单列表' icon={TabIcon} iconName='unie715' activeIconName='unie714' />
          <Scene key='profile' component={page.ProfilePage} title='我的' icon={TabIcon} iconName='untitled13' activeIconName='untitled14' />
        </Scene>
        <Scene key='about' component={page.AboutPage} hideNavBar={false} hideTabBar={true} title='关于'/>
        <Scene key='authHelp' component={page.AuthHelpPage} hideNavBar={false} hideTabBar={true} title='登录'/>
        <Scene key='auth' component={page.AuthPage} hideNavBar={false} hideTabBar={true} title='个人信息' rightTitle='反馈' onRight={()=>Actions.authHelp()}/>
        <Scene key='help' component={page.HelpPage} hideNavBar={false} hideTabBar={true} title='帮助'/>
        <Scene key='register' component={page.RegisterPage} hideNavBar={false} hideTabBar={true} title='注册'/>
        <Scene key='resetPassword' component={page.ResetPasswordPage} hideNavBar={false} hideTabBar={true} title='重置密码'/>
      </ConnectedRouter>
    );
  }
};

const ConnectedApp = connect()(App);

class ReduxApp extends Component {
  constructor(props){
    super(props);

    this.state = {
      isLoading: true,
      store: configStore(()=>this.setState({isLoading:false}))
    }
  }
  render(){
    if(this.state.isLoading){
      return null;
    }

    return (
      <Provider store={this.state.store}>
        <ConnectedApp />
      </Provider>
    );
  }
}

export default ReduxApp;
