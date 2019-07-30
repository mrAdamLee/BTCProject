/*import React, {Component } from 'react';


import { FacebookProvider, Page } from 'react-facebook';
//import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
export default class Home extends React.Component {


  render(){
    
      //const { navigate } = this.props.navigation
     
  return (
     
       
   
    <FacebookProvider appId="2319566588264121">
      <Page href="https://www.facebook.com/BledsoeTelephoneCooperative/" tabs="timeline" />
    </FacebookProvider> 

     
    /*
    <View style={styles.container}>
    <div className="centerContent">
      <div className="selfCenter standardWidth">
        <TwitterTimelineEmbed
          sourceType="profile"
            screenName="saurabhnemade"
            options={{height: 400}}
            onComplete={action}
        />
      </div>
    </div>

     <Button title="Report A Problem"
        color="#ffffff"
        onPress={
         () => navigate('ReProblem')
        }
     />
    </View>
  );
  }
}*/
import React from "react"
import ReactNative from "react-native"
import OneSignal from 'react-native-onesignal';

const { View, WebView, StyleSheet, ActivityIndicator, Text, Image } = ReactNative

export default class Home extends React.Component {
  constructor(properties) {
    super(properties);
    OneSignal.init("75a26dec-2664-4bcb-9426-6035347cd8a7");
    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
    OneSignal.configure(); 	// triggers the ids event
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification) {
    console.log("Notification received: ", notification);
  }

  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  onIds(device) {
    console.log('Device info: ', device);
  }
render() {
  let utils = ' \
    function loadScript(src, callback) { \
      var s, r, t; \
      r = false; \
      s = document.createElement("script"); \
      s.type = "text/javascript"; \
      s.src = src; \
      s.onload = s.onreadystatechange = function() { \
        if ( !r && (!this.readyState || this.readyState == "complete") ) { \
          r = true; \
          callback(); \
        } \
      }; \
      t = document.getElementsByTagName("script")[0]; \
      t.parentNode.insertBefore(s, t); \
    } \
  ';

  let twitter = ' \
    loadScript("//platform.twitter.com/widgets.js", function () { \
      twttr.widgets.load(); \
    }); \
  ';
  let JS = '<script type="text/javascript" src="https://platform.twitter.com/widgets.js"></script>';

  let source = JS + '<a class="twitter-timeline" href="https://twitter.com/BtcFiber?ref_src=twsrc%5Etfw">Tweets by BtcFiber</a>'
  
  // '<blockquote class="twitter-tweet" data-lang="es"><p lang="en" dir="ltr">8 TED Talks to inspire projects with kids: <a href="https://twitter.com/TEDTalks/status/758116657638309896">https://twitter.com/TEDTalks/status/758116657638309896</a> <a href="https://twitter.com/TEDTalks/status/758116657638309896">pic.twitter.com/HMmYAeP7Km</a></p>&mdash; TED Talks (@TEDTalks) <a href="https://twitter.com/TEDTalks/status/758116657638309896">27 de julio de 2016</a></blockquote>';
//<a class="twitter-timeline" href="https://twitter.com/AdamLee_angel?ref_src=twsrc%5Etfw">Tweets by AdamLee_angel</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
  return (
    
    <View style={styles.container}>
      <View style={styles.header}> 
        <Image 
          source={require('../assets/btcfiber_logo_app.png')}
          style={styles.image}
          
        />
        
      </View>
      <WebView
        source={{html: source}}
        javaScriptEnabled={true}
        style={styles.twitter}
      />
    </View>

  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.15,
    backgroundColor:'#2471a3',
  },
  twitter: {
    flex: 1,
  },
  image: {
    flex:1,
    paddingTop: 120,
    width: null, 
    height: null, 
    resizeMode: 'contain'
  }

})