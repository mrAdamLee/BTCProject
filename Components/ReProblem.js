
import React, {Component } from 'react';
import { ScrollView, TouchableHighlight, AlertIOS, StyleSheet, Text, View, TextInput } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Fumi } from 'react-native-textinput-effects';

import { removeProperties } from '@babel/types';
import {addItem} from '../src/services/addItem';
import {Button} from 'react-native-elements';
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
      const{name, PhoneNumber, Address, Problem} = this.state;
      if(name==""){
        //alert('Please enter your name');
        this.setState({Error: 'Please enter your name'});
      }
      else if(PhoneNumber==""){
        //alert('Please enter your phone number');
        this.setState({Error: 'Please enter your phone number'});
      }
      else if(Address==""){
        //alert('Please enter your address');
        this.setState({Error: 'Please enter your address'});
      }
      else if(Problem==""){
        //alert('Please tell us about your problem')
        this.setState({Error: 'Please tell us about your problem'});
      }
      else{
      this.setState({Success: 'Thank you, your issue has been reported.'})
        addItem(this.state.name, this.state.PhoneNumber, this.state.Address, this.state.Problem);
      }
      
    };
    render (){
        return(
          
            <View style={[styles.card2, { flex: 1, backgroundColor: '#2471a3' }]}>
            <Text style={styles.title}>Report A Problem</Text>
            <Text style={{color: '#ffffff', textAlign:'center'}}>
              {this.state.Error}
            </Text>
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
            style={styles.button}
            onPress={this.handleSubmit} 
            title='Submit'
            />
            <Text style ={{color:'#00ff00', textAlign:'center'}}>
              {this.state.Success}
            </Text>
            
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
      paddingTop: 200,
      paddingBottom: 16,
      textAlign: 'center',
      color: '#000000',
      fontSize: 20,
      fontWeight: 'bold',
      opacity: 0.8,
    },
    button: {
      
      width: null,

    },
  });
  