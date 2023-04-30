import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import COLORS from '../constants/colors';
import ROUTES from '../constants/routes';
import SplashScreen from '../features/splashScreen/index';
import BottomTabNavigator from './BottomTabNavigator';
import Products from '../features/products';
const Stack = createStackNavigator();
// Navigator, Screen, Group

function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName={ROUTES.SLASHSCREEN}>
      <Stack.Screen
        name={ROUTES.SLASHSCREEN}
        component={SplashScreen}
        options={({route}) => ({
          headerTintColor: COLORS.white,
          headerBackTitleVisible: false,
          // headerStyle: {
          //   backgroundColor: COLORS.primary,
          // },
          // title: route.params.userId,
        })}
      />
      <Stack.Screen
        name={ROUTES.HOME}
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ROUTES.PRODUCTS}
        component={Products}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
