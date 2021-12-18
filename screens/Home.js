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
    Line,
    Avatar
} from './../components/styles';

const Home = ({navigation, route}) => {
    const {username, photoUrl} = route.params;
    const AvatarImg = photoUrl ? {uri: photoUrl} : '';

    return (
        <>
            <StatusBar style="dark" />
            <InnerContainer>
                <HomeContainer>
                    <FlashedLogo />
                    <SubTitle welcome={true}>Welcome, {username || 'friend'}!</SubTitle>
                    <StyledFormArea>
                        
                        <Avatar resizeMode="cover" source={AvatarImg} />
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