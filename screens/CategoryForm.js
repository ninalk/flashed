import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, ActivityIndicator } from 'react-native';
import { Formik } from 'formik';

// API client
import axios from 'axios';

// credentials context
import { CredentialsContext } from './../components/CredentialsContext';

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
    StyledButton,
    StyledInputLabel,
    StyledTextInput,
    Colors,
} from '../components/styles';

// import keyboard avoiding wrapper
import KeyboardAvoidingWrapper from './../components/KeyboardAvoidingWrapper';

// colors
const { grey, primary, tertiary } = Colors;

const CategoryForm = ({navigation}) => {
    // context
    const {storedCredentials, setStoredCredentials} = useContext(CredentialsContext);
    const { _id } = storedCredentials;
    
    const handleCategoryCreate = (values, setSubmitting) => {
        // const url = 'https://glacial-hollows-41394.herokuapp.com/users/login';
        const url = 'http://192.168.1.2:3000/categories/new';

        axios.post(url, values)
        .then((res) => {
            const result = res.data;
            console.log(result, ' new category')
            setSubmitting(false);
            navigation.navigate('Home');
        })
        .catch((err) => {
            console.log(err)
            setSubmitting(false);
        })
    }

    return (
        <KeyboardAvoidingWrapper>
        <StatusBar style="dark" />
        <InnerContainer>
            <HomeContainer>
                <SubTitle>Create a Category</SubTitle>
                <Formik
                        initialValues={{category: ''}}
                        onSubmit={(values, {setSubmitting, resetForm}) => {
                            if (values.category == '') {
                                setSubmitting(false);
                            } else {
                                values.user = _id;
                                handleCategoryCreate(values, setSubmitting);
                                resetForm();
                            }
                        }}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => 
                        (<StyledFormArea >
                            <MyTextInput
                                label="Category"
                                onChangeText={handleChange('category')}
                                onBlur={handleBlur('category')}
                                value={values.category}
                            />
                            {/* <MyTextInput
                                label="Question"
                                onChangeText={handleChange('question')}
                                onBlur={handleBlur('question')}
                                value={values.question}
                            />
                            <MyTextInput
                                label="Answer"
                                onChangeText={handleChange('answer')}
                                onBlur={handleBlur('answer')}
                                value={values.answer}
                                answer={true}
                            /> */}

                            {/* <MsgBox type={messageType}>{message}</MsgBox> */}
                            {!isSubmitting && (
                                <StyledButton onPress={handleSubmit} >
                                    <ButtonText>Add Category</ButtonText>
                                </StyledButton>
                            )}
                            {isSubmitting && (
                                <StyledButton disabled={true} >
                                    <ActivityIndicator size="large" color={primary} />
                                </StyledButton>)}
                        </StyledFormArea> )}

                    </Formik>
            </HomeContainer>
        </InnerContainer>

        </KeyboardAvoidingWrapper>
    )
}

const MyTextInput = ({label, ...props}) => {
    return (
        <View>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} cardCreate={true}/>
        </View>
    )
}

export default CategoryForm;
