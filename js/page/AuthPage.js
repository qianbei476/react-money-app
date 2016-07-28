import React, { Component } from 'react';
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import IconFont from '../IconFont';
class P extends Component {
  render(){
    return (

      <View style={{flex:1,backgroundColor:'#F1F1F1'}}>

        <TouchableOpacity style={{height:48,backgroundColor:'white',marginTop:10,borderRadius:3,flexDirection:'row'}}>
          <View style={{justifyContent:'center',marginLeft:20,flex:1}}>
          <Text>用户名</Text>
          </View>
          <View style={{justifyContent:'center', marginRight:20}}>
          <Text style={{color:'#BEBEBE'}}>18380460559</Text>
          </View>
        </TouchableOpacity>


        <TouchableOpacity style={{height:48,backgroundColor:'white',marginTop:2,borderRadius:3,flexDirection:'row'}}>
          <View style={{justifyContent:'center',marginLeft:20,flex:1}}>
          <Text>真实姓名</Text>
          </View>
          <View style={{justifyContent:'center', marginRight:20}}>
          <Text style={{color:'#BEBEBE'}}>未设置</Text>
          </View>
        </TouchableOpacity>


        <TouchableOpacity style={{height:48,backgroundColor:'white',marginTop:2,borderRadius:3,flexDirection:'row'}}>
          <View style={{justifyContent:'center',marginLeft:20,flex:1}}>
          <Text>手机号</Text>
          </View>
          <View style={{justifyContent:'center', marginRight:20}}>
          <Text style={{color:'#BEBEBE'}}>18380460559</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{height:48,backgroundColor:'white',marginTop:2,borderRadius:3,flexDirection:'row'}}>
          <View style={{justifyContent:'center',marginLeft:20,flex:1}}>
          <Text>邮箱</Text>
          </View>
          <View style={{justifyContent:'center', marginRight:20}}>
          <Text style={{color:'#BEBEBE'}}>未设置</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{height:48,backgroundColor:'white',marginTop:10,borderRadius:3,flexDirection:'row'}}>
          <View style={{justifyContent:'center',marginLeft:20,flex:1}}>
          <Text>QQ</Text>
          </View>
          <View style={{justifyContent:'center', marginRight:20}}>
          <Text style={{color:'#BEBEBE'}}>未绑定</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{height:48,backgroundColor:'white',marginTop:2,borderRadius:3,flexDirection:'row'}}>
          <View style={{justifyContent:'center',marginLeft:20,flex:1}}>
          <Text >微信</Text>
          </View>
          <View style={{justifyContent:'center', marginRight:20}}>
          <Text style={{color:'#BEBEBE'}}>未绑定</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{height:48,backgroundColor:'white',marginTop:2,borderRadius:3,flexDirection:'row'}}>
          <View style={{justifyContent:'center',marginLeft:20,flex:1}}>
          <Text>修改密码</Text>
          </View>
          <View style={{justifyContent:'center', marginRight:20}}>
          <Text style={{fontSize:20,color:'#BEBEBE'}}>></Text>
          </View>
        </TouchableOpacity>

        </View>


    );
  }
}

export default P;
