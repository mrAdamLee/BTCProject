import React, {Component } from 'react';
import { ScrollView, TouchableHighlight, AlertIOS, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Fumi } from 'react-native-textinput-effects';

import { removeProperties } from '@babel/types';
import {addItem} from '../src/services/addItem';

//function writeUserData()

export default class ReProblem extends Component {
    constructor(props){
        super(props);
        this.state= {
            name: '',
            PhoneNumber: '',
            Address: '',
            Problem: ''
         }
         this.handleChange=this.handleChange.bind(this);
         this.handelChangePhone=this.handelChangePhone.bind(this);
         this.handleChangeAddr=this.handleChangeAddr.bind(this);
         this.handleChangeProblem=this.handleChangeProblem.bind(this);
         this.handleSubmit= this.handleSubmit.bind(this);
         
    }

    handleChange(e) {
        this.setState({
         name: e.nativeEvent.text,
         //PhoneNumber: e.nativeEvent.text,
         //Problem: e.nativeEvent.text 

        });
  
    };
    handelChangePhone(e){
        this.setState({
            PhoneNumber: e.nativeEvent.text
        });
    };
    handleChangeProblem(e){
        this.setState({
            Problem: e.nativeEvent.text
        });
    };
    handleChangeAddr(e){
        this.setState({
            Address: e.nativeEvent.text
        })
    }
 
    handleSubmit = () =>{
        addItem(this.state.name, this.state.PhoneNumber, this.state.Address, this.state.Problem);
 
    };
    render (){
        return(
          
            <View style={[styles.card2, { flex: 1, backgroundColor: '#2471a3' }]}>
            <Text style={styles.title}>Report A Problem</Text>
            <Fumi
              onChange={(this.handleChange)}
              label={'Name'}
              
              inputStyle={{ color: '#f95a25' }}
              iconClass={FontAwesomeIcon}
              iconName={'user'}
              iconColor={'#f95a25'}
              iconSize={15}
              //onChangeText={(text)} => {this.handleChange}
            />
            <Fumi
              
              onChange={(this.handelChangePhone)}
              style={styles.input}
              label={'Phone Number'}
              iconClass={FontAwesomeIcon}
              iconName={'phone'}
              iconColor={'#f95a25'}
            />
              <Fumi
            onChange={(this.handleChangeAddr)}
            style={styles.input3}
            label={'E911 Address'}
            iconClass={FontAwesomeIcon}
            iconName={'map-marker'}
            iconColor={'#f95a25'}            
            
            />
           <Fumi
                onChange={(this.handleChangeProblem)}
                style={styles.input2}
                label={'Describe the Problem'}
                iconClass={FontAwesomeIcon}
                iconName={'exclamation-triangle'}
                iconColor={'#f95a25'}
            />
             
            <Button
                onPress={this.handleSubmit} 
                title="Submit"
                color="#ffffff"
            />
          </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 24,
      backgroundColor: 'white',
    },
    content: {
      // not cool but good enough to make all inputs visible when keyboard is active
      paddingBottom: 300,
    },
    card1: {
      paddingVertical: 16,
    },
    card2: {
      padding: 16,
    },
    input: {
      marginTop: 4,
    },
    input2: {
        marginTop: 4,
    },
    input3: {
        marginTop: 4,
    },
    title: {
      paddingBottom: 16,
      textAlign: 'center',
      color: '#000000',
      fontSize: 20,
      fontWeight: 'bold',
      opacity: 0.8,
    },
  });
  