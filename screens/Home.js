import React, { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
// credentials context
import { CredentialsContext } from './../components/CredentialsContext';

// async storage
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    const { username } = storedCredentials;

    const clearLogin = () => {
        AsyncStorage.removeItem('flashedCredentials')
        .then(() => {
            setStoredCredentials("");
        })
        .catch(err => console.log(err))
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