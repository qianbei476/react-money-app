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

class P extends Component {
  render(){
    return (
      <View>
        <TouchableOpacity style={{
            height:45, marginTop:10,
            flexDirection:'row',
            backgroundColor:'#fff'}} onPress={Actions.auth}>
            <View style={{justifyContent:'center', marginLeft:10}}>
              <IconFont name="untitled13" style={{backgroundColor:'transparent'}} size={20} />
            </View>
            <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
              <Text style={{fontSize:15}}>个人信息</Text>
            </View>
            <View style={{justifyContent:'center', marginRight:20}}>
            <Text>></Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={{
            height:45, marginTop:10,
            flexDirection:'row',
            backgroundColor:'#fff'}} onPress={Actions.userinfo}>
            <View style={{justifyContent:'center', marginLeft:10}}>
              <IconFont name="unie92d" style={{backgroundColor:'transparent'}} size={20}/>
            </View>
            <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
              <Text style={{fontSize:15}}>银行卡</Text>
            </View>
            <View style={{justifyContent:'center', marginRight:20}}>
            <Text>></Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={{
            height:45, marginTop:10,
            flexDirection:'row',
            backgroundColor:'#fff'}} onPress={Actions.about}>
            <View style={{justifyContent:'center', marginLeft:10}}>
              <IconFont name="untitled7" style={{backgroundColor:'transparent'}} size={20}/>
            </View>
            <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
              <Text style={{fontSize:15}}>关于我们</Text>
            </View>
            <View style={{justifyContent:'center', marginRight:20}}>
            <Text>></Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={{
            height:45, marginTop:10,
            flexDirection:'row',
            backgroundColor:'#fff'}} onPress={Actions.userinfo}>
            <View style={{justifyContent:'center', marginLeft:10}}>
              <IconFont name="unie67e" style={{backgroundColor:'transparent'}} size={20} />
            </View>
            <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
              <Text style={{fontSize:15}}>当前版本</Text>
            </View>
            <View style={{justifyContent:'center', marginRight:20}}>
            <Text>></Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={{
            height:45, marginTop:30,
            marginLeft:10,
            marginRight:10,
            flexDirection:'row',
            backgroundColor:'#FF5E45',
            borderRadius:3}} onPress={Actions.login}>

            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <Text style={{fontSize:15,color:'white'}}>退出登录</Text>
            </View>

        </TouchableOpacity>
      </View>
    );
  }
}

export default P;
