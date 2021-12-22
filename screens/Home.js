import React, { useState, useContext, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import CategoryList from './../components/CategoryList';

// API client
import axios from 'axios';

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
    CreateLink,
} from './../components/styles';

const Home = ({navigation}) => {   
    // context
    const {storedCredentials, setStoredCredentials} = useContext(CredentialsContext);
    const { username } = storedCredentials;

    const [categories, setCategories] = useState([]);

    const getCategories = () => {
        // const url = 'https://glacial-hollows-41394.herokuapp.com/users/login';
        const url = 'http://192.168.1.2:3000/categories';

        axios.get(url, categories)
        .then((res) => {
            const result = res.data;
            console.log(result.data)

            setCategories([...result.data])
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const clearLogin = () => {
        AsyncStorage.removeItem('flashedCredentials')
        .then(() => {
            setStoredCredentials("");
        })
    }

    useEffect(() => {
        getCategories();
    }, [categories]);

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
                        <CategoryList categories={categories} />
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