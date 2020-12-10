import React from 'react';
import {PureComponent} from 'react';
import {
  View,
  Text,
  TouchableHighlight,  
} from 'react-native';

import Toast from 'react-native-toast-message';

class Home extends PureComponent {


  kkkkkjkjkjkjkj=()=>{
    this.refs.toast.show({
      text1: 'Hello',
      text2: 'This is some something 👋',
    });
  }

  render() {
    return (
      <View style={{alignItems:'center',flex:1}}>
                <TouchableHighlight
                    style={{marginTop:10,justifyContent:"center",alignItems:'center',width:300,padding: 10,alignSelf:'center',backgroundColor:'green'}}
                    onPress={()=>{
                        this.kkkkkjkjkjkjkj();
                    }}>
                    <Text>Press me</Text>
                </TouchableHighlight>          

              

                
                    <Toast                 
                        ref="toast"
                        style={{width:400,alignSelf:"center", }}
                        position='bottom'
                        // positionValue={500}
                        // fadeInDuration={50}
                        // fadeOutDuration={50}
                        opacity={0.8}
                        visibilityTime={1000}       // 1 sec
                        textStyle={{color:'#000'}}
                    />                 
                
        
      </View>
    );
  }
}



export default Home;
