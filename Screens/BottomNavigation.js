import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Contacts from "./Contacts";
import Favorites from './Favorites';
import User from './User';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Profile from './Profile';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Tab = createMaterialBottomTabNavigator();
const BottomNavigation = () => {
  return (
    <NavigationContainer>

      <Tab.Navigator >
        <Tab.Screen name="Contact" component={Contacts} 
        //     options={{
        //   tabBarLabel: 'Home',
        //   tabBarIcon: ({ color }) => (
        //     <MaterialCommunityIcons name='home' {...props} color={'black'} size={24} />
        //   ),
        // }}
        options={{
            tabBarIcon: ({ color }) => (
             <MaterialCommunityIcons name='home' color={'black'} size={24} />
         ),
        }}
        />
        <Tab.Screen name="Favorites" 
        options={{
            tabBarIcon: ({ color }) => (
             <MaterialCommunityIcons name='star' color={'black'} size={24} />
         ),
        }}
         component={Favorites} />
        <Tab.Screen name="Profile" component={Profile} 
        options={{
            tabBarIcon: ({ color }) => (
             <MaterialCommunityIcons name='user-circle' color={'black'} size={24} />
         ),
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomNavigation;