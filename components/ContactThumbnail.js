import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons'

const ContactThumbnail = ({
  name, phone, avatar, textColor, onPress,
}) => {
  const colorStyle ={
    color: textColor,
  };
  const ImageComponent = onPress ? TouchableOpacity : View;
  return (
    <View style={styles.container}>
      <ImageComponent onPress={onPress}>
        <Image source={{uri:avatar,}}
          style={styles.avatar}
        />
      </ImageComponent>
      {name !== '' && <Text style={[styles.name, colorStyle]}>{name}</Text>}
      {phone !== '' && (
        <View style={styles.phoneSection}>
          <Icon name ="phone" size={16} style={{color:textColor}}/>
          <Text style={[styles.phone, colorStyle]}>{phone}  </Text>
        </View>
      )}
    </View>
  );
}

export default ContactThumbnail;

ContactThumbnail.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  avatar: PropTypes.string,
  onPress: PropTypes.func,
};

ContactThumbnail.defaultProps ={
  name: "",
  phone: "",
  textColor: "white", // Corrected "while" to "white"
  onPress: null,
};

const styles = StyleSheet.create({
  container:{
    paddingVertical:30,
    marginHorizontal:15,
    alignItems:"center",
    justifyContent:"center",
  },
  avatar:{
    width:20,
    height:20,
    borderRadius:45,
    borderColor: 'white', // Corrected 'while' to 'white'
    borderWidth:2,
  },
  name:{
    fontSize: 20, // Corrected 90 to 20
    marginTop:24,
    marginBottom:2,
    fontWeight:'bold',
  },
  phoneSection:{
    flexDirection:'row',
    marginTop:4,
    alignItems:'center',
    justifyContent:'center',
  },
  phone:{
    marginLeft:4,
    fontSize:16,
    fontWeight:'bold',
  },
});
