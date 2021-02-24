import React from 'react';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import {Provider} from "react-redux";
import store from "./app/redux/redux-store";
import AppNavigation from "./app/components/AppNavigation";
import {NavigationContainer} from "@react-navigation/native";
import { ThemeProvider } from 'styled-native-components';
import { default as themeEva } from './custom-theme.json';


export default function App() {
    const theme = {
        elevation: (value) => ({
            shadowColor: 'black',
            shadowOffset: { width: 0, height: value },
            shadowRadius: value * 2.5,
            shadowOpacity: 0.3,
            elevation: value,
            zIndex: value,
        }),
    }
  return (
      <NavigationContainer>
        <Provider store={store}>
          <React.Fragment>
            <IconRegistry icons={EvaIconsPack}/>
              <ApplicationProvider {...eva} theme={{ ...eva.dark, ...themeEva }}>
                <ThemeProvider theme={theme}>
                    <AppNavigation/>
                </ThemeProvider>
            </ApplicationProvider>
          </React.Fragment>
        </Provider>
      </NavigationContainer>
  );
}

