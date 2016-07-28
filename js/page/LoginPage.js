import React, { Component } from 'react';
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import IconFont from '../IconFont';
import _find from 'lodash/find';

import action from '../action';

class P extends Component {

  componentDidMount(){

  }

  componentWillReceiveProps(nextProps){

  }

  render(){
    return (
      <View style={{marginTop:20,flex:1,backgroundColor:'#F1F1F1'}}>
      <View style={{height:200,alignItems:'center',justifyContent:'center',backgroundColor:'#F1F1F1'}}>
      <Image source={require('./img/logo.png')} style={{height:120,width:200}}/>
      </View>
        <View style={{height:48,backgroundColor:'white',marginTop:10,marginLeft:10,marginRight:10,borderRadius:3,flexDirection:'row'}}>

        <View style={{justifyContent:'center', marginLeft:10}}>
          <IconFont name="untitled14" style={{backgroundColor:'transparent'}} size={20} color="#BABABA" />
        </View>

          <TextInput style={{flex:1,marginLeft:10}} placeholder='用户名' />
        </View>

        <View style={{height:48,backgroundColor:'white',marginLeft:10,marginRight:10,borderRadius:3,marginTop:1,flexDirection:'row'}}>

        <View style={{justifyContent:'center', marginLeft:10}}>
          <IconFont name="unie719" style={{backgroundColor:'transparent'}} size={20} color="#BABABA" />
        </View>

          <TextInput style={{flex:1,marginLeft:10}} secureTextEntry={true} placeholder='密码' />
        </View>

        <View style={{flexDirection:'row'}}>
          <TouchableOpacity onPress={Actions.register} style={{width:120,height:48,justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'#18B4ED'}}>注册帐号</Text>
          </TouchableOpacity>
          <View style={{flex:1}} />
          <TouchableOpacity onPress={Actions.resetPassword} style={{width:120,height:48,justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'#18B4ED'}}>忘记密码</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{
            height:48,
            alignItems:'center', justifyContent:'center',borderRadius:3,marginLeft:10,marginRight:10,backgroundColor:'#18B4ED'}} onPress={Actions.main}>
          <Text style={{color:'white'}}>登 录</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(
  state=>({
  }),
  dispatch=>({
    action: bindActionCreators({
    }, dispatch)})
)(P);
