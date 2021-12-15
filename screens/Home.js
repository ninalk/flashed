import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import {
    HomeContainer,
    InnerContainer,
    PageTitle,
    SubTitle,
    StyledFormArea,
    StyledButton,
    ButtonText,
    Line
} from './../components/styles';

const Home = ({navigation}) => {

    return (
        <>
            <StatusBar style="dark" />
            <InnerContainer>
                <HomeContainer>
                    <PageTitle>FLASHED</PageTitle>
                    <SubTitle>Welcome!</SubTitle>
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