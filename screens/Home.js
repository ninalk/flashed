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
    ButtonText,
    Line,
    CategoryButton,
    CategoryText,
    CreateLink,
    StyledButton
} from './../components/styles';

const Home = ({navigation}) => {
    
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
                        <Line/>
                        {/* <StyledButton onPress={clearLogin}>
                            <ButtonText>Logout</ButtonText>
                        </StyledButton> */}
                        <CategoryButton>
                            <CategoryText>JavaScript</CategoryText>
                        </CategoryButton>
                    </StyledFormArea>
                    <CreateLink onPress={() => navigation.navigate('CategoryForm')}>
                        <ButtonText create={true}>+</ButtonText>
                    </CreateLink>
                </HomeContainer>
            </InnerContainer>
        </>
    )
}


export default Home;