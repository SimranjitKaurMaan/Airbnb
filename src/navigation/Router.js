import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/Home';
import DestinationSearchScreen from '../screens/DestinationSearch';
import GuestsScreen from '../screens/Guests';

import HomeTabNavigator from './HomeTabNavigator';
import SearchResultsScreen from '../screens/SearchResults';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name={"Home"} component={HomeTabNavigator} options={{
                headerShown : false
            }}/>
          <Stack.Screen name="Destination Search" component={DestinationSearchScreen} options={{
              title: "Search your destination"
          }}/>
          <Stack.Screen name="Guests" component={GuestsScreen} options={{
              title: "How many people?"
          }}/>
           <Stack.Screen name="Search Results" component={SearchResultsScreen} options={{
              title: "Search Results"
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default Router

