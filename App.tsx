import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HTML} from './HTML';
import {JS} from './JS';
import {CSS} from './CSS';
import {REACT} from './REACT';

const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#de4b4b',
          tabBarInactiveTintColor: '#555',
          tabBarStyle: {
            height: 65,
            // elevation: 0,
          },
        }}>
        <Tab.Screen
          name="HTML"
          component={HTML}
          options={{
            tabBarLabel: ({color, focused}) =>
              !focused ? (
                <Text style={{paddingBottom: 5, color: color}}>HTML</Text>
              ) : (
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    paddingBottom: 5,
                    color: color,
                  }}>
                  HTML
                </Text>
              ),
            tabBarIcon: ({color, focused}) =>
              !focused ? (
                <Image
                  style={{width: 24, height: 24}}
                  source={require('./assets/html.png')}
                />
              ) : (
                <Image
                  style={{width: 30, height: 30}}
                  source={require('./assets/html.png')}
                />
              ),
          }}
        />
        <Tab.Screen
          name="CSS"
          component={CSS}
          options={{
            tabBarLabel: ({color, focused}) =>
              !focused ? (
                <Text style={{paddingBottom: 5, color: color}}>CSS</Text>
              ) : (
                <Text style={{fontSize: 20, paddingBottom: 5, color: color}}>
                  CSS
                </Text>
              ),
            tabBarIcon: (color, focused) =>
              !focused ? (
                <Image
                  style={{width: 24, height: 24}}
                  source={require('./assets/css.png')}
                />
              ) : (
                <Image
                  style={{width: 30, height: 30}}
                  source={require('./assets/css.png')}
                />
              ),
          }}
        />
        <Tab.Screen
          name="JS"
          component={JS}
          options={{
            tabBarLabel: ({color, focused}) =>
              !focused ? (
                <Text style={{paddingBottom: 5, color: color}}>JS</Text>
              ) : (
                <Text style={{fontSize: 20, paddingBottom: 5, color: color}}>
                  JS
                </Text>
              ),
            tabBarIcon: ({focused}) =>
              !focused ? (
                <Image
                  style={{width: 24, height: 24}}
                  source={require('./assets/js.png')}
                />
              ) : (
                <Image
                  style={{width: 30, height: 30}}
                  source={require('./assets/js.png')}
                />
              ),
          }}
        />
        <Tab.Screen
          name="REACT"
          component={REACT}
          options={{
            tabBarLabel: ({color, focused}) =>
              !focused ? (
                <Text style={{paddingBottom: 5, color: color}}>REACT</Text>
              ) : (
                <Text style={{fontSize: 20, paddingBottom: 5, color: color}}>
                  REACT
                </Text>
              ),
            tabBarIcon: ({color, focused}) =>
              !focused ? (
                <Image
                  style={{width: 24, height: 24}}
                  source={require('./assets/react.png')}
                />
              ) : (
                <Image
                  style={{width: 30, height: 30}}
                  source={require('./assets/react.png')}
                />
              ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
