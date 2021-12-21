import React, { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, ActivityIndicator } from 'react-native';
import { Formik } from 'formik';

// logo
import FlashedLogo from './../components/FlashedLogo';

// icons
import { Octicons, Ionicons } from '@expo/vector-icons';

// Styles
import {
    StyledContainer,
    InnerContainer,
    SubTitle,
    StyledFormArea,
    StyledButton,
    StyledInputLabel,
    ButtonText,
    StyledTextInput,
    Colors,
    LeftIcon,
    RightIcon,
    MsgBox,
    Line,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent
} from './../components/styles';

// import keyboard avoiding wrapper
import KeyboardAvoidingWrapper from './../components/KeyboardAvoidingWrapper';

// API client
import axios from 'axios';

// credentials context
import { CredentialsContext } from './../components/CredentialsContext';

// async storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// Colors
const { grey, primary } = Colors;

const Signup = ({navigation}) => {

    const [hidePassword, setHidePassword] = useState(true);
    const [message, setMessage] = useState();
    const [messageType, setMessageType] = useState();
    
    // context
    const {storedCredentials, setStoredCredentials} = useContext(CredentialsContext);

    const handleSignup = (creds, setSubmitting) => {
        handleMessage(null);
        // const url = 'https://glacial-hollows-41394.herokuapp.com/users/signup';
        const url = 'http://192.168.1.2:3000/users/signup';

        axios.post(url, creds)
        .then((res) => {
            const result = res.data;
            const {message, status, data} = result;
            if (status !== 'SUCCESS') {
                handleMessage(message, status);
            } else {
                persistLogin({...data}, message, status);
            }
            setSubmitting(false);
        })
        .catch((err) => {
            console.log(err, ' this error')
            setSubmitting(false);
            handleMessage("An error occured. Check your network and try again");
        })
    }

    const handleMessage = (message, type = 'FAILED') => {
        setMessage(message);
        setMessageType(type);
    }

    const persistLogin = (creds, message, status) => {
        AsyncStorage.setItem('flashedCredentials', JSON.stringify(creds))
        .then(() => {
            handleMessage(message, status);
            setStoredCredentials(creds);
        })
        .catch(err => {
            console.log(err);
            handleMessage('Persisting login failed');
        })
    }

    return (
        <KeyboardAvoidingWrapper>
            <StyledContainer>
                <StatusBar style="dark" />
                <InnerContainer>
                    <FlashedLogo />
                    <SubTitle>Account Signup</SubTitle>
                    <Formik
                        initialValues={{username: '', email: '', password: '', confirmPassword: ''}}
                        onSubmit={(values, {setSubmitting}) => {
                            console.log(values);
                            if (values.username == '' || 
                                values.email == '' || 
                                values.password == '' || 
                                values.confirmPassword == '') {
                                handleMessage("Please fill all fields!")
                                setSubmitting(false);
                            } else {
                                handleSignup(values, setSubmitting);
                            }
                        }}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => (<StyledFormArea>
                            <MyTextInput
                                label="Username"
                                icon="person"
                                placeholder="ex. ninanina"
                                placeholderTextColor={grey}
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('username')}
                                value={values.username}
                            />
                            <MyTextInput
                                label="Email Address"
                                icon="mail"
                                placeholder="ex. nina@nina.com"
                                placeholderTextColor={grey}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                keyboardType="email-address"
                            />
                            <MyTextInput
                                label="Password"
                                icon="lock"
                                placeholder="* * * * * * * *"
                                placeholderTextColor={grey}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                secureTextEntry={hidePassword}
                                isPassword={true}
                                hidePassword={hidePassword}
                                setHidePassword={setHidePassword}
                            />
                            <MyTextInput
                                label="Confirm Password"
                                icon="lock"
                                placeholder="* * * * * * * *"
                                placeholderTextColor={grey}
                                onChangeText={handleChange('confirmPassword')}
                                onBlur={handleBlur('confirmPassword')}
                                value={values.confirmPassword}
                                secureTextEntry={hidePassword}
                                isPassword={true}
                                hidePassword={hidePassword}
                                setHidePassword={setHidePassword}
                            />
                            <MsgBox type={messageType}>{message}</MsgBox>
                            {!isSubmitting && (
                                <StyledButton onPress={handleSubmit}>
                                    <ButtonText>Signup</ButtonText>
                                </StyledButton>
                            )}
                            {isSubmitting && (
                                <StyledButton>
                                    <ActivityIndicator size="large" color={primary} />
                                </StyledButton>
                            )}
                            <Line/>
                            <ExtraView>
                                <ExtraText>Already have an account? </ExtraText>
                                <TextLink onPress={() => navigation.navigate("Login")}>
                                    <TextLinkContent>Login</TextLinkContent>
                                </TextLink>
                            </ExtraView>
                        </ StyledFormArea> )}

                    </Formik>
                </InnerContainer>
            </StyledContainer>
        </KeyboardAvoidingWrapper>
    )
}

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={grey} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props}/>
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons 
                        name={hidePassword ? 'md-eye-off' : 'md-eye'}
                        size={30} 
                        color={grey} 

                    />
                </RightIcon>
            )}
        </View>
    )
}

export default Signup;