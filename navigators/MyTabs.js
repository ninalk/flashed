import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// icons
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';

import Home from './../screens/Home';
import CategoryForm from './../screens/CategoryForm';
import CategoryDetails from './../screens/CategoryDetails';
import CardForm from './../screens/CardForm';
import EditCardForm from './../screens/EditCardForm';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="CategoryForm" component={CategoryForm}/>
        </Tab.Navigator>
    )
}

export default MyTabs;