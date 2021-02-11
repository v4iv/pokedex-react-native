import React, {useState} from 'react';
import * as eva from '@eva-design/eva';
import {Provider} from 'react-redux';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {NavigationContainer} from '@react-navigation/native';
import store from './store';
import Root from './navigation';
import {ThemeContext} from './utils';
import {default as pokedexTheme} from './utils/theme.json';
import {default as mapping} from '../../mapping.json';
// Screens
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <ApplicationProvider
          {...eva}
          theme={{...eva[theme], ...pokedexTheme}}
          customMapping={mapping}>
          <Provider store={store}>
            <NavigationContainer>
              <Root.Navigator>
                <Root.Screen
                  name="Home"
                  component={HomeScreen}
                  options={{title: 'Home'}}
                />
                <Root.Screen
                  name="Settings"
                  component={SettingsScreen}
                  options={{title: 'Settings'}}
                />
              </Root.Navigator>
            </NavigationContainer>
          </Provider>
        </ApplicationProvider>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
