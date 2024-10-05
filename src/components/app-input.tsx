import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, StyleProp, ViewStyle, TextStyle } from 'react-native';   
import GlobalIcon from '../config/GlobalIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface AppInputProps {
  label?: string;
  optional?: boolean;
  placeholder?: string;
  number?:number;
  multiline?: boolean;
  value?: string | any;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad';
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  labelSty?: StyleProp<TextStyle>;
  inputLeftElement?: JSX.Element;
  inputRightElement?: JSX.Element;
  editable?: boolean;
  type?: string;
  showPasswordIcon?: boolean;
  inputContainer?: ViewStyle;
  error?: any
}

const AppInput: React.FC<AppInputProps> = ({
  label,
  optional = false,
  placeholder = '', 
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  style = {},
  inputStyle = {}, 
  labelSty = {}, 
  inputLeftElement, inputRightElement,
  number,
  multiline,
  editable,
  type,
  showPasswordIcon = false,
  inputContainer,
  error
}) => { 
  const [isFocused, setIsFocused] = useState<boolean>(false); 
  const [secured, setIsSecured] = useState<boolean>(false)

  const togglePasswordVisibility = () => {
    setIsSecured(!secured)
  }
  return (
    <View style={[styles.container, style]}>

      <View style={styles.labelContainer}>
        <Text style={[styles.label,labelSty]}>
          {label}
          {optional && <Text style={{ color: 'red' }}>*</Text>}
        </Text>
      </View>
      <View style={[styles.inputBox,inputContainer]}>
      {inputLeftElement && <>{inputLeftElement}</>}
      <TextInput
        style={[styles.input, inputStyle, {width: showPasswordIcon ? '90%' : '100%'}]}
        placeholder={placeholder}
        placeholderTextColor={'#C2C2C2'}
        value={`${value}`}
        onChangeText={onChangeText}
        secureTextEntry={!secured && type == 'password'}
        keyboardType={keyboardType}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        numberOfLines={number}
        multiline={multiline}
        editable={editable} 
        selectionColor={'#000'}
        />
       {type === 'password' && showPasswordIcon && (
          <TouchableOpacity
            onPress={togglePasswordVisibility}>
            {!secured ? (
              <GlobalIcon
                library="Feather"
                name="eye-off"
                size={2.5}
              />
            ) : (
              <GlobalIcon
                library="Feather"
                name="eye"
                size={2.5}
              />
            )}
          </TouchableOpacity>
        )}
          {inputRightElement && <>{inputRightElement}</>}
        </View>
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop:2, 
  },
  labelContainer: {
    position: 'absolute', 
  },
  label: { 
    color: '#000',  
  },
  labelFocused: {
    color: 'blue',
  },
  inputBox:{
    width: '100%',
    flexDirection:'row', 
    alignContent:'center',  
    borderWidth:0.7, 
    borderRadius: 5,  
    alignItems: 'center'
  },
  input: {  
    width: '100%', 
    borderRadius: 7,
    paddingLeft: 12,   
    // color: Colors.black, 
    
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
});

export default AppInput;
