import { Tabs } from 'expo-router';
import { Image } from 'react-native';
import { COLORS, SIZES, images, } from '../../constants';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const Layout = () => {
    return (
        // <MyTabs />
        <Tabs screenOptions={{
            tabBarActiveTintColor: COLORS.fullBlack,
            headerShown: false,
            tabBarStyle: {
                backgroundColor: COLORS.fullWhite,
                borderTopWidth: 0,
            }
            
        }}>
            <Tabs.Screen 
                name="index" 
                options={{
                    tabBarLabel: 'Home', 
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                  )}}/>
            <Tabs.Screen 
                name="lifestyle" 
                options={{
                    tabBarLabel: 'Life',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="leaf" color={color} size={size} />
                  )}}/>
            <Tabs.Screen 
                name="progress" 
                options={{
                    href: null, // TODO: Add progress screen 
                    tabBarLabel: 'Progress',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account-circle" color={color} size={size} />
                  )}}/>
            {/* <Tabs.Screen
                name="preroutine"
                options={{
                  href: null,
                  presentation: 'modal',
                }}
            /> */}
        </Tabs>
    )
}

export default Layout; 