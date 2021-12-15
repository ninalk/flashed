import React from 'react';
import { Colors } from './../components/styles';

// react navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import Login from './../screens/Login';
import Signup from './../screens/Signup';
import Home from './../screens/Home';

const Stack = createNativeStackNavigator();
const { pink, primary } = Colors;


const RootStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="Login"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: 'transparent'
                    },
                    headerTintColor: pink,
                    headerTransparent: true,
                    headerTitle: '',
                    headerLeftContainerStyle: {
                        paddingLeft: 20
                    }
                }}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen options={{headerTintColor: primary}} name="Signup" component={Signup} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack;