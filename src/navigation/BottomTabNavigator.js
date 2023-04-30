import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import ROUTES from '../constants/routes';
import Categories from '../features/categories';
import Home from '../features/home';
import Orders from '../features/orders';
import Profile from '../features/profile';
import Settings from '../features/settings';
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === ROUTES.HOME) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === ROUTES.CATEGORIES) {
            iconName = focused ? 'layers' : 'layers-outline';
          } else if (route.name === ROUTES.ODERS) {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === ROUTES.PROFILE) {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === ROUTES.SETTINGS) {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#2196f3',
        inactiveTintColor: '#bdbdbd',
      }}>
      <Tab.Screen name={ROUTES.HOME} component={Home} />
      <Tab.Screen name={ROUTES.CATEGORIES} component={Categories} />
      <Tab.Screen name={ROUTES.ODERS} component={Orders} />
      <Tab.Screen name={ROUTES.PROFILE} component={Profile} />
      <Tab.Screen name={ROUTES.SETTINGS} component={Settings} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
