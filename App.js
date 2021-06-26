import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Home, Restaurant, OrderDelivery } from "./screens";

import AppLoading from 'expo-app-loading';

import Tabs from "./navigation/tabs"
import * as Font from "expo-font";

const Stack = createStackNavigator();

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false)

  let customFonts = {
    'SFProRounded-Regular': require('./assets/fonts/SFProRounded-Regular.ttf'),
    'SFProRounded-Bold': require('./assets/fonts/SFProRounded-Bold.ttf')
  };

  const loadFontsAsync = async function() {
      await Font.loadAsync(customFonts);
      setFontLoaded(true);
  };

  useEffect( () => {
    loadFontsAsync();
  })

  return (
    fontLoaded ? <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={"Home"}>
        <Stack.Screen name="Home" component={Tabs}/>
        <Stack.Screen name="Restaurant" component={Restaurant}/>
        <Stack.Screen name="OrderDelivery" component={OrderDelivery}/>
      </Stack.Navigator>
    </NavigationContainer> : <AppLoading />
  );
}