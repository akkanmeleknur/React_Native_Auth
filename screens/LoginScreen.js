import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import React, { useState,useEffect } from 'react';
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import {auth} from '../firebase';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    useEffect(() => {
      auth.onAuthStateChanged(user =>{
        if(user)
        {
            navigation.navigate('Home');
        }
      })
    }, [])

    const handleSignUp = () => {
      auth
      .createUserWithEmailAndPassword(email,password)
      .then(userCredentials => { 
        const user = userCredentials.user;
        console.log('Kullanıcı :', user.email)
      })
      .catch((error)=> alert(error.message));
    }

    const handleLogin = () => {
      auth
      .signInWithEmailAndPassword(email,password)
      .then(userCredentials => { 
        const user = userCredentials.user;
        console.log('Kullanıcı giriş yaptı :', user.email)
      })
      .catch((error)=> alert(error.message));
    }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      
      <View style={styles.inputContainer}>
        
        <TextInput style={styles.input} 
        placeholder="Email"
        value={email} 
        onChangeText={text=>setEmail(text)}/>

        <TextInput style={styles.input} 
        placeholder="Şifre" 
        value={password}
        onChangeText={text=>setPassword(text)}
        secureTextEntry />
      </View>

      <View style={styles.buttonContainer}>
        
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Giriş Yap</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.outlineButton]} 
        onPress={handleSignUp}>
          
          <Text style={styles.outlineButtonText}>Kayıt Ol</Text>
        </TouchableOpacity>

      </View>

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  inputContainer:{
    width:'80%',
  },
  input:{
    backgroundColor:'white',
    marginTop:7,
    paddingHorizontal:15,
    paddingVertical:10,
    borderRadius:10
  },
  buttonContainer: {
    width:'50%',
    marginTop:40
  },
  button: {
    backgroundColor:'#B388FF',
    alignItems:'center',
    padding:15,
    borderRadius:10
  },
  buttonText: {
    color:'white',
    fontSize:16,
    fontWeight:700
  },
  outlineButton: {
    backgroundColor:'white',
    marginTop:7
  },
  outlineButtonText: {
    color:'#B388FF',
    fontSize:16,
    fontWeight:700
  },
});
