import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Favorites from '../pages/Favorites';
import TeacherList from '../pages/TeacherList';
import {Ionicons} from '@expo/vector-icons'
import { TabBarIOS } from 'react-native';

const {Navigator, Screen} = createBottomTabNavigator();

function StudyTabs() {
    return (
        <Navigator tabBarOptions={{
            style: {
                elevation: 0,
                shadowOpacity: 0,
                height: 64,
            },

            tabStyle: {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
            },
            iconStyle: {
                flex: 0,
                width: 18,
                height: 18,
            },
            labelStyle: {
                fontFamily: 'Archivo_700Bold',
                fontSize: 13,
                marginLeft: 16,
            },
            inactiveBackgroundColor: '#fafafc',
            activeBackgroundColor: '#ebebf5',
            inactiveTintColor: '#c3bccc',
            activeTintColor: 'rgb(75, 26, 53)',
        }}>
            <Screen 
                name="TeacherList" 
                component={TeacherList}
                options={{
                    tabBarLabel: 'Proffys',
                    tabBarIcon: ({color, size, focused}) => {
                        return (
                            <Ionicons name='ios-easel' size={size} color={focused?'#63b49f':color}></Ionicons>
                        )
                    }
                }}></Screen>
            <Screen 
                name="Favorites" 
                component={Favorites}
                options={{
                    tabBarLabel: 'Favoritos',
                    tabBarIcon: ({color, size, focused}) => {
                        return (
                            <Ionicons name='ios-heart' size={size} color={focused?'#63b49f':color}></Ionicons>
                        )
                    }
                }}></Screen>
        </Navigator>
    )
}

export default StudyTabs;