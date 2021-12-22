import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, ActivityIndicator } from 'react-native';
import { Formik } from 'formik';

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
    MsgBox
} from '../components/styles';

// import keyboard avoiding wrapper
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';

// colors
const { grey, primary, tertiary } = Colors;

const CategoryForm = () => {
    const handleCategoryCreate = (values, setSubmitting) => {
        console.log(values)
    }

    return (
        <>
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
                        </ StyledFormArea> )}

                    </Formik>
            </HomeContainer>
        </InnerContainer>

        </>
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
