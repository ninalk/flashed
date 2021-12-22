import React from 'react';
import { Colors } from './../components/styles';

// react navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import Login from './../screens/Login';
import Signup from './../screens/Signup';
import Home from './../screens/Home';
import CategoryForm from '../screens/CategoryForm';

const Stack = createNativeStackNavigator();
const { pink, primary } = Colors;

// credentials context
import { CredentialsContext } from './../components/CredentialsContext';

const RootStack = () => {
    return (
        <CredentialsContext.Consumer>
            {({storedCredentials}) => (
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
                    {storedCredentials ? (
                        <>
                            <Stack.Screen options={{headerTintColor: primary}} name="Home" component={Home} />
                            <Stack.Screen name="CategoryForm" component={CategoryForm} />
                        </>
                    ) : (
                        <>
                            <Stack.Screen name="Login" component={Login} />
                            <Stack.Screen name="Signup" component={Signup} />
                        </>
                    )}
                    </Stack.Navigator>
                </NavigationContainer>
            )}
        </CredentialsContext.Consumer>
        
    )
}

export default RootStack;