import React, { useEffect, useState } from 'react';
import { View } from 'react-native'
import { fetchUserContacts } from '../utility/api'
import { Avatar,Text } from 'react-native-paper'
const User = () => {
    const [User, setUser] = useState({});
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        fetchUserContacts()
            .then(data => {
                console.log(data)
                setUser(data)
                setLoading(false);
            })
            .catch(e => console.log(e))
    }, []) 
    const {name, avatar,phone} = User 
  return (
    <View style={{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'aqua'
    }}>
    <Avatar.Image source={{uri:avatar}} size={150}/>
      <Text 
        style={{
            fontSize:30,
            color:'white',
            fontWeight:'bold',
        }}>
        {name}
      </Text>
      <Text 
        style={{
            fontSize:24,
            color:'white',
        }}>
        {phone}
      </Text>
    </View>
  )
}
export default User;