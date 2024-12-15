import { StyleSheet, Text, View ,TouchableOpacity } from 'react-native'
import React from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {

  const navigation = useNavigation();
  
  const handleSignOut = () => {
    auth.signOut().then(() => {
      navigation.navigate('Login');
    })
    .catch((error) => alert(error.message));
  }

  return (
    <View style={styles.container}>
      <Text>Email: {auth.currentUser?.email}</Text>

      <TouchableOpacity style={styles.button} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Çıkış Yap</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
 container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    backgroundColor:'#76608A',
    alignItems:'center',
    padding:15,
    borderRadius:10,
    width:'50%',
    marginTop:50
  },
  buttonText:{
    color:'white',
    fontSize:16,
    fontWeight:700
  }  
})

