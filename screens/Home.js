import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

// logo
import FlashedLogo from './../components/FlashedLogo';

import {
    HomeContainer,
    InnerContainer,
    SubTitle,
    StyledFormArea,
    StyledButton,
    ButtonText,
    Line
} from './../components/styles';

const Home = ({navigation, route}) => {
    const {username} = route.params;
    return (
        <>
            <StatusBar style="dark" />
            <InnerContainer>
                <HomeContainer>
                    <FlashedLogo />
                    <SubTitle welcome={true}>Welcome, {username || 'friend'}!</SubTitle>
                    <StyledFormArea>
                        <Line/>
                        <StyledButton onPress={() => {navigation.navigate("Login");}}>
                            <ButtonText>Logout</ButtonText>
                        </StyledButton>
                        
                    </StyledFormArea>

                </HomeContainer>
            </InnerContainer>
        </>
    )
}


export default Home;