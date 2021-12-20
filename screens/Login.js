import React, { useState, useContext, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, ActivityIndicator, Platform } from 'react-native';
import { Formik } from 'formik';

// async storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// logo
import FlashedLogo from './../components/FlashedLogo';

// icons
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';

import {
    StyledContainer,
    InnerContainer,
    PageTitle,
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

// Google signin
import * as Google from 'expo-google-app-auth';

// Gets google sigin to work in expo app after apk build
import * as GoogleSignIn from 'expo-google-sign-in';

// credentials context
import { CredentialsContext } from './../components/CredentialsContext';

// colors
const { grey, primary, tertiary } = Colors;

const Login = ({navigation}) => {

    const [hidePassword, setHidePassword] = useState(true);
    const [message, setMessage] = useState();
    const [messageType, setMessageType] = useState();
    const [googleSubmitting, setGoogleSubmitting] = useState(false);

    // context
    const {storedCredentials, setStoredCredentials} = useContext(CredentialsContext);

    const handleLogin = (creds, setSubmitting) => {
        handleMessage(null);
        const url = 'http://192.168.1.2:3000/users/login';

        axios.post(url, creds)
        .then((res) => {
            const result = res.data;
            const {message, status, data} = result;

            if (status !== 'SUCCESS') {
                handleMessage(message, status);
            } else {
                persistLogin({...data[0]}, message, status);
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

    // Google Signin dev version
    // const handleGoogleSignin = () => {
    //     setGoogleSubmitting(true);
    //     // OAuth 2.0 client IDs and scope
    //     const config = {
    //         iosClientId: `701889211521-o7ne1gqsj75mgb763t7414846vc606ks.apps.googleusercontent.com`,
    //         androidClientId: `701889211521-9gprelgt9hkb5ig4ndjtrtg0idh5iedh.apps.googleusercontent.com`,
    //         scopes: ['profile', 'email']
    //     }

    //     Google
    //         .logInAsync(config)
    //         .then((result) => {
    //             const {type, user} = result;
                
    //             if (type == 'success') {
    //                 const {email, name} = user;
    //                 persistLogin({ email, name }, message);
    //             } else {
    //                 handleMessage('Google signin was cancelled')
    //             }
    //             setGoogleSubmitting(false);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //             handleMessage('An error occurred. Check your network and try again.')
    //             setGoogleSubmitting(false);
    //         })
    // }

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

    // initialize google sign in
    useEffect(() => {
        initAsync();
    });

    const androidClientId = "661216398064-io32amvjient3v0l8puqa9idc64sct3o.apps.googleusercontent.com"
    const iosClientId = "661216398064-rnokg2hsvnbu5956qrb4ehovi6e1h1qe.apps.googleusercontent.com"

    const initAsync = async () => {
        try {
            await GoogleSignIn.initAsync({
                clientId: Platform.OS === 'android' ? androidClientId : iosClientId,
            });
            getUserDetails();
        } catch({message}) {
            console.log("Google sign in error: " + message);
        }
    }

    const getUserDetails = async () => {
        const user = await GoogleSignIn.signInSilentlyAsync();
        // set state
        setGoogleSubmitting(false);
        user && persistLogin({...user}, "Google signin successful", 'success');
    }

    const handleGoogleSignin = async () => {
        try {
            setGoogleSubmitting(true);
            await GoogleSignIn.askForPlayServicesAsync(); // android only
            const {type, user} = await GoogleSignIn.signInAsync();
            if (type === "success") {
                getUserDetails();
            } else {
                handleMessage('Google signin cancelled')
                setGoogleSubmitting(false);
            }
        } catch {
            handleMessage('Google signin error: ' + message);
            setGoogleSubmitting(false);
        }
    }

    return (
        <KeyboardAvoidingWrapper>
            <StyledContainer>
                <StatusBar style="dark" />
                <InnerContainer>
                    <FlashedLogo />
                    <SubTitle>Account Login</SubTitle>
                    <Formik
                        initialValues={{username: '', password: ''}}
                        onSubmit={(values, {setSubmitting, resetForm}) => {
                            if (values.username == '' || values.password == '') {
                                handleMessage('Please fill all fields');
                                setSubmitting(false);
                            } else {
                                handleLogin(values, setSubmitting);
                                resetForm();
                            }
                        }}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => 
                        (<StyledFormArea>
                            <MyTextInput
                                label="username"
                                icon="person"
                                placeholder="ex. ninanina"
                                placeholderTextColor={grey}
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('username')}
                                value={values.username}
                            />

                            <MyTextInput
                                label="Password"
                                icon="lock"
                                placeholder="* * * * * * * * *"
                                placeholderTextColor={grey}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                secureTextEntry={hidePassword}
                                isPassword={true}
                                hidePassword={hidePassword}
                                setHidePassword={setHidePassword}
                            />
                            <MsgBox type={messageType}>{message}</MsgBox>
                            {!isSubmitting && (
                                <StyledButton onPress={handleSubmit} >
                                    <ButtonText>Login</ButtonText>
                                </StyledButton>
                            )}
                            {isSubmitting && (
                                <StyledButton disabled={true} >
                                    <ActivityIndicator size="large" color={primary} />
                                </StyledButton>)}

                            <Line/>
                            {!googleSubmitting && (
                                <StyledButton google={true} onPress={handleGoogleSignin}>
                                    <Fontisto name="google" color={primary} size={25} />
                                    <ButtonText google={true}>Sign in with Google</ButtonText>
                                </StyledButton>
                            )}
                            {googleSubmitting && (
                                <StyledButton google={true} disabled={true}>
                                    <ActivityIndicator size="large" color={primary} />
                                </StyledButton>
                            )}
                            <ExtraView>
                                <ExtraText>New to us? </ExtraText>
                                <TextLink onPress={() => navigation.navigate("Signup")}>
                                    <TextLinkContent>Signup</TextLinkContent>
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
                <Octicons name={icon} size={28} color={grey} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props}/>
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons 
                        name={hidePassword ? 'md-eye-off' : 'md-eye'}
                        size={28} 
                        color={grey} 

                    />
                </RightIcon>
            )}
        </View>
    )
}

export default Login;