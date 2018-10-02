import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';

const styles = StyleSheet.create({
  containerStyle: {
    height: 50,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  // labelStyle: {
  //   fontSize: 18,
  //   paddingLeft: 20,
  //   flex: 1
  // },
  inputStyle: {
    flex: 1,
    padding: 16,
    fontFamily: 'Roboto',
    fontSize: 16,
    color: '#212121',
    lineHeight: 18,
    borderWidth: 1,
    borderColor: '#007aff'    
  }  
});

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
	const { inputStyle, labelStyle, containerStyle } = styles;

	return(
		<View style={containerStyle}>
			<TextInput
				secureTextEntry={secureTextEntry}
				placeholder={placeholder}
				autoCorrect={false}
				value={value}
				onChangeText={onChangeText}
				style={inputStyle}
        underlineColorAndroid='transparent'
			/>
		</View>
	);
};

export { Input };