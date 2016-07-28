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
      <View style={{backgroundColor:'white',flex:1}}>
      <View style={{flexDirection:'row',marginTop:5}}>
        <TouchableOpacity
          style={{width:100, height:100, borderWidth:2,borderColor:'#d7d7d7', alignItems:'center',flex:1,
          marginLeft:5,
          justifyContent:'center'
        }}>
        <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'#F7BD2C',height:60,width:60,marginTop:10,borderRadius:60}}>
          <IconFont name="unie91b" style={{backgroundColor:'transparent'}} size={50} color="white" />
        </View>
        <View style={{height:20,justifyContent:'center',}}>
        <Text>申请贷款</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity
        style={{width:100, height:100, borderWidth:2,borderColor:'#d7d7d7', alignItems:'center',flex:1,
        marginLeft:5,
        marginRight:5,
        justifyContent:'center'
      }}>
        <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'#16A040',height:60,width:60,marginTop:10,borderRadius:60}}>
          <IconFont name="unie915" style={{backgroundColor:'transparent'}} size={50} color="white" />
        </View>
        <View style={{height:20,justifyContent:'center',}}>
        <Text>查询贷款</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity
        style={{width:100, height:100, borderWidth:2,borderColor:'#d7d7d7', alignItems:'center',flex:1,
        marginRight:5,
        justifyContent:'center'
      }}
          onPress={Actions.help}>
          <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'#239FDE',height:60,width:60,marginTop:10,borderRadius:60}}>
            <IconFont name="unie719" style={{backgroundColor:'transparent'}} size={50} color="white" />
          </View>
          <View style={{height:20,justifyContent:'center',}}>
          <Text>帮助中心</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{marginLeft:8,marginRight:8}}>
      <View style={{justifyContent:'center',height:50}}>
      <Text style={{fontSize:20,color:'#21A0E0'}}>应用简介</Text>
      </View>
      <Text>1.spring是J2EE应用程序框架，是轻量级的IoC和AOP的容器框架，主要是针对javaBean的生命周期进行管理的轻量级容器，可以单独使用，也可以和Struts框架，ibatis框架等组合使用。</Text>
      <Text style={{marginTop:5}}>2.IoC(Inversion of Control)控制反转，对象创建责任的反转，在spring中BeanFacotory是IoC容器的核心接口，负责实例化，定位，配置应用程序中的对象及建立这些对象间的依赖。XmlBeanFacotory实现BeanFactory接口，通过获取xml配置文件数据，组成应用对象及对象间的依赖关系。</Text>
      <Text style={{marginTop:5}}>3.aop就是纵向的编程，如下图所示，业务1和业务2都需要一个共同的操作，与其往每个业务中都添加同样的代码，不如写一遍代码，让两个业务共同使用这段代码。
 spring中面向切面变成的实现有两种方式，一种是动态代理，一种是CGLIB，动态代理必须要提供接口，而CGLIB实现是有继承。</Text>
      <Text style={{marginTop:5}}>4.在不使用spring框架之前，我们的service层中要使用dao层的对象，不得不在service层中new一个对象。</Text>
      </View>
      </View>
    );
  }
}

export default P;
