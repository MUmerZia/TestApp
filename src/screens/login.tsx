import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import axios from 'axios';
import { Controller, useForm } from 'react-hook-form';
import AppInput from '../components/app-input';
import AppButton from '../components/app-button';
import { useAppSelector } from '../store/hooks';
import { useDispatch } from 'react-redux';
import { login } from '../store/user/userActions';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const loader = useAppSelector(state => state.common.loading)
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
    });


    const handleLogin = async(data:any) => { 
       const res = await dispatch(login(data)).unwrap()
       console.log('res: ', res);
       if(res?.token !== ''){
        navigation.navigate('home')
       }
    };

    return (
        <View style={styles.container}>
            <Controller
                control={control}
                name="email"
                rules={{
                    required: 'Email is required',
                    pattern: {
                        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                        message: 'Enter a valid email address',
                    },
                }}
                render={({ field: { onChange, value } }) => (
                    <AppInput
                        error={errors.email?.message} 
                        placeholder='Email'
                        value={value}
                        onChangeText={onChange}
                    />
                )}
            />

            <Controller
                control={control}
                name="password"
                rules={{ required: 'Password is required' }}
                render={({ field: { onChange, value } }) => (
                    <AppInput
                        style={{ marginTop: 20 }}
                        error={errors.password?.message}
                        placeholder='Password'
                        secureTextEntry={true}
                        value={value}
                        onChangeText={onChange}
                        showPasswordIcon={true}
                        type='password'
                    />
                )}
            />
            <AppButton title='Login' 
                onPress={handleSubmit(handleLogin)}
                loading={loader}
                contentContainerStyle={styles.btn}
                style={styles.btnBox}
                textStyle={{ fontSize: 16, color: 'white' }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    btn:{
        backgroundColor: '#16445B',
        height: 50,
        paddingVertical: 10,
        borderRadius: 5,
    },
    btnBox:{
        width: '90%',
        marginTop: 23,
        paddingVertical: 40,
        alignSelf: 'center',
    }
});

export default LoginScreen;
