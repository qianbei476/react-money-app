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
      <View style={{height:130,alignItems:'center',justifyContent:'center',backgroundColor:'#F1F1F1'}}>
      <Image source={require('./img/logo.png')} style={{height:120,width:200}}/>
      </View>

        <TouchableOpacity style={{height:48,backgroundColor:'white',marginTop:10,borderRadius:3,flexDirection:'row'}}>
        <View style={{justifyContent:'center', marginLeft:20}}>
          <IconFont name="untitled13" style={{backgroundColor:'transparent'}} size={20} />
        </View>
          <View style={{justifyContent:'center',marginLeft:30,flex:1}}>
          <Text>功能介绍</Text>
          </View>
          <View style={{justifyContent:'center', marginRight:20}}>
          <Text>></Text>
          </View>
        </TouchableOpacity>


        <TouchableOpacity style={{height:48,backgroundColor:'white',marginTop:10,borderRadius:3,flexDirection:'row'}}>
        <View style={{justifyContent:'center', marginLeft:20}}>
          <IconFont name="untitled13" style={{backgroundColor:'transparent'}} size={20}/>
        </View>
          <View style={{justifyContent:'center',marginLeft:30,flex:1}}>
          <Text>微信公众号： 盐城环境安全检测仪</Text>
          </View>

        </TouchableOpacity>


        <TouchableOpacity style={{height:48,backgroundColor:'white',marginTop:10,borderRadius:3,flexDirection:'row'}}>
        <View style={{justifyContent:'center', marginLeft:20}}>
          <IconFont name="unie67e" style={{backgroundColor:'transparent'}} size={20}/>
        </View>
          <View style={{justifyContent:'center',marginLeft:30,flex:1}}>
          <Text>客服电话： 4008 806 306</Text>
          </View>

        </TouchableOpacity>


        </View>
    );
  }
}

export default P;
