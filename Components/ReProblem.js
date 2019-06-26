import React, {Component } from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Fumi } from 'react-native-textinput-effects';
import {db} from '../src/config';

let addItem = item => {
    db.ref().push({
        name

    });
};

export default class ReProblem extends Component {
    state = {
        name: ''
    };
    handleChange = textValue => {
        this.setState({
         name: textValue
        });
    };
    handleSubmit = () =>{
        addItem(this.state.name);
    };
    render (){
        return(
          /*  <View>


            </View>
        );
    }
}*/
            <View style={[styles.card2, { flex: 1, backgroundColor: '#2471a3' }]}>
            <Text style={styles.title}>Report A Problem</Text>
            <Fumi
              onChange={(this.handleChange)}
              label={'Name'}
              labelStyle={{ color: '#a3a3a3' }}
              inputStyle={{ color: '#f95a25' }}
              iconClass={FontAwesomeIcon}
              iconName={'user'}
              iconColor={'#f95a25'}
              iconSize={15}
              //onChangeText={(text)} => {this.handleChange}
            />
            <Fumi
              onChange={(this.handleChange)}
              style={styles.input}
              label={'Phone Number'}
              iconClass={FontAwesomeIcon}
              iconName={'phone'}
              iconColor={'#77116a'}
            />
            <Fumi
                onChange={(this.handleChange)}
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
    title: {
      paddingBottom: 16,
      textAlign: 'center',
      color: '#000000',
      fontSize: 20,
      fontWeight: 'bold',
      opacity: 0.8,
    },
  });
  