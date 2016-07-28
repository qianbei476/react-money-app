import React, { Component } from 'react';
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

class P extends Component {
  render(){
    return (

<View style={{backgroundColor:'#F1F1F1',flex:1}}>

<View style={{height:48,backgroundColor:'white',flexDirection:'row',marginLeft:10,marginRight:10,marginTop:20}}>
<View style={{height:40,width:60,justifyContent:'center',alignItems:'center',margin:4}}>
<Text>账号</Text>
</View>
<TextInput style={{flex:1,marginLeft:10}} placeholder="请输入手机号码"/>
</View>

<View style={{height:48,backgroundColor:'white',flexDirection:'row',marginLeft:10,marginRight:10,marginTop:1}}>
<View style={{height:40,width:60,justifyContent:'center',alignItems:'center',margin:4}}>
<Text>验证码</Text>
</View>
<TextInput style={{flex:1,marginLeft:10}} placeholder="请输入验证码"/>
<TouchableOpacity style={{
  height:48,width:100,marginBottom:2,marginLeft:10,
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'#18B4ED'
}}>
<Text style={{color:'white'}}>获取验证码</Text>
</TouchableOpacity>
</View>

<View style={{height:48,backgroundColor:'white',flexDirection:'row',marginLeft:10,marginRight:10,marginTop:1}}>
<View style={{height:40,width:60,justifyContent:'center',alignItems:'center',margin:4}}>
<Text>密码</Text>
</View>
<TextInput style={{flex:1,marginLeft:10}} placeholder="请输入您的密码，至少6位" secureTextEntry={true}/>
</View>

<View style={{height:48,backgroundColor:'white',flexDirection:'row',marginLeft:10,marginRight:10,marginTop:1}}>
<View style={{height:40,width:60,justifyContent:'center',alignItems:'center',margin:4}}>
<Text>确认</Text>
</View>
<TextInput style={{flex:1,marginLeft:10}} placeholder="请再次输入您的密码" secureTextEntry={true}/>
</View>

<TouchableOpacity style={{
    height:48,
    alignItems:'center', justifyContent:'center',borderRadius:3,marginLeft:10,marginRight:10,backgroundColor:'#18B4ED',
    marginTop:20}}>
  <Text style={{color:'white'}}>注 册</Text>
</TouchableOpacity>

</View>
    );
  }
}

export default P;
