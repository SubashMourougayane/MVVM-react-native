import React from 'react';
import { StyleSheet, Text, View,TextInput,Button,ToastAndroid, Alert} from 'react-native';
import ViewModel from '../ViewModel/ViewModel';
export default class App extends React.Component {

    state = {
      uname:'',
      pass:''
    }  
  
  unameHandler = (text) =>{
    this.setState({
      uname:text
    })
  }
  passHandler = (text) =>{
    this.setState({
      pass:text
    })
  }
  login(){
      const VM = new ViewModel(this.state.uname,this.state.pass);
      if(VM.validateLogin()){
        Alert.alert("Sucess");
      }
      else{
        Alert.alert("Failed")
      }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>MVVM Sample </Text>
        <TextInput
            onChangeText = {this.unameHandler}
            style = {styles.textinp}
            placeholder = "User Name"
            placeholderTextColor = '#aaa'
            underlineColorAndroid = '#000'
        />
        
        <TextInput
            onChangeText = {this.passHandler}
            style = {styles.textinp}
            placeholder = "Password"
            placeholderTextColor = '#aaa'
            underlineColorAndroid = '#000'
        />
        <Button
          onPress={()=>this.login()}
          style = {styles.button}
          title="Login"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  heading:{
    color:'black',
    marginBottom:50,
  },
  textinp:{
    marginBottom: 30,
    textAlign: 'center',
    borderRadius: 15,
    height: 50,
    width:300,
  },
  
}); 
