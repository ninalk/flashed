import React, { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
// credentials context
import { CredentialsContext } from './../components/CredentialsContext';

// async storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// Gets google sigin to work in expo app after apk build
import * as GoogleSignIn from 'expo-google-sign-in';

// logo
import FlashedLogo from './../components/FlashedLogo';

import {
    HomeContainer,
    InnerContainer,
    SubTitle,
    StyledFormArea,
    StyledButton,
    ButtonText,
    Line,
    // Avatar
} from './../components/styles';

const Home = () => {
    
    // context
    const {storedCredentials, setStoredCredentials} = useContext(CredentialsContext);
    let { username } = storedCredentials;

    // for google sign in
    username = username ? username : displayName;

    const clearLogin = async () => {
        try {
            if (!__DEV__) {
                await GoogleSignIn.signOutAsync();
                await AsyncStorage.removeItem('flashedCredentials');
            } else {
                await AsyncStorage.removeItem('flashedCredentials');
            }
            setStoredCredentials("");
        } catch ({message}) {
            alert("Logout Error: " + message);
        }
        
    }

    return (
        <>
            <StatusBar style="dark" />
            <InnerContainer>
                <HomeContainer>
                    <FlashedLogo />
                    <SubTitle home={true}>Welcome, {username || 'friend'}!</SubTitle>
                    <StyledFormArea>
                        {/* <Avatar resizeMode="cover" source={AvatarImg} /> */}
                        <Line/>
                        <StyledButton onPress={clearLogin}>
                            <ButtonText>Logout</ButtonText>
                        </StyledButton>
                        
                    </StyledFormArea>

                </HomeContainer>
            </InnerContainer>
        </>
    )
}


export default Home;