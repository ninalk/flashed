import React from 'react';

// keyboard avoiding view
import { ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, View } from 'react-native';

import {Colors} from './../components/styles';
const {primary} = Colors;

const KeyboardAvoidingWrapper = ({children}) => {
    return (
        <KeyboardAvoidingView style={{flex: 1, backgroundColor: primary}}>
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View>
                        {children}
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>

        </KeyboardAvoidingView>
    )
}

export default KeyboardAvoidingWrapper;