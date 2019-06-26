import React, {Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class Home extends React.Component {


  render(){
      const { navigate } = this.props.navigation
  return (
    <View style={styles.container}>
     

     <Button title="Report A Problem"
        color="#ffffff"
        onPress={
         () => navigate('ReProblem')
        }
     />
    </View>
  );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 100,
    backgroundColor: '#2471a3',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});