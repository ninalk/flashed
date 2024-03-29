import React, { useState, useContext, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList } from 'react-native';
import Category from './../components/Catgeory';

// API client
import axios from 'axios';

// credentials context
import { CredentialsContext } from './../components/CredentialsContext';

// async storage
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    HomeContainer,
    InnerContainer,
    StyledFormArea,
    ButtonText,
    CreateLink,
    LogoutButton,
    Colors,
    SettingsButton
} from './../components/styles';

// icons
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';
import { useNavigationState } from '@react-navigation/native';

// colors
const { black, main2 } = Colors;

const Home = ({navigation }) => {   
    // context
    const {storedCredentials, setStoredCredentials} = useContext(CredentialsContext);
    const { username } = storedCredentials;

    const [categories, setCategories] = useState([]);
    const state = useNavigationState(state => state);

    const getCategories = () => {
        // const url = 'https://glacial-hollows-41394.herokuapp.com/users/login';
        const url = 'http://192.168.1.2:3000/categories';

        axios.get(url, categories)
        .then((res) => {
            const result = res.data;
            setCategories([...result.data])
        })
        .catch((err) => {
            console.log(err)
        })
    }

    // remove category
    const removeCategory = (categoryId) => {
        // const url = 'https://glacial-hollows-41394.herokuapp.com/users/login';
        const url = 'http://192.168.1.2:3000/categories/' + categoryId;

        axios.delete(url, categoryId)
        .then((res) => {
            getCategories();
        })
        .catch((err) => {console.log(err)})
    }

    // logout user
    const clearLogin = () => {
        AsyncStorage.removeItem('flashedCredentials')
        .then(() => {
            setStoredCredentials("");
        })
    }

    // onClick navigate to details screen
    const getCategoryDetails = ({item}) => {
        navigation.navigate('CategoryDetails', {
            categoryId: item._id,
            category: item.category
        });
    }

    // renders list view of each category
    const renderItem = ({ item }) => (
        <Category item={item} getCategoryDetails={getCategoryDetails} removeCategory={removeCategory}/>
    );

    useEffect(() => {
        getCategories();
    }, [state]);

    return (
        <>
            <StatusBar style="dark" />
            <InnerContainer>
                <HomeContainer>
                    <StyledFormArea>
                        <FlatList 
                            data={categories}
                            keyExtractor={(item) => item._id}
                            renderItem={renderItem}
                        />
                    </StyledFormArea>
                    <SettingsButton>
                        <Fontisto name="player-settings" size={45} color={main2}/>
                    </SettingsButton>
                    <CreateLink onPress={() => navigation.navigate('CategoryForm')}>
                        <ButtonText create={true}>+</ButtonText>
                    </CreateLink>
                    <LogoutButton onPress={clearLogin}>
                        <Fontisto name="unlocked" size={45} color={main2}/>
                    </LogoutButton>
                </HomeContainer>
            </InnerContainer>
        </>
    )
}

export default Home;