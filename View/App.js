import React from 'react';
import { StyleSheet, Text, View,TextInput,Button,ToastAndroid, Alert} from 'react-native';
import ViewModel from '../ViewModel/ViewModel';
export default class App extends React.Component {

    state = {
      uname:'',
      pass:''
    }  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>MVVM Sample </Text>
        <TextInput
            onChangeText = {(text)=>this.setState({uname:text})}
            style = {styles.textinp}
            placeholder = "User Name"
            placeholderTextColor = '#aaa'
            underlineColorAndroid = '#000'
        />
        
        <TextInput
            onChangeText = {(text)=>this.setState({pass:text})}
            style = {styles.textinp}
            placeholder = "Password"
            placeholderTextColor = '#aaa'
            underlineColorAndroid = '#000'
        />
        <Button
          onPress={()=>{
            var VM = new ViewModel(this.state.uname,this.state.pass);
            Alert.alert(VM.login());
          }}
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
