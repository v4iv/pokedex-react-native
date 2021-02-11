import React, {useContext} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {Divider, Layout, ListItem, Toggle} from '@ui-kitten/components';
import {ThemeContext} from '../../utils';

const DarkModeToggle = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <Toggle
      checked={themeContext.theme === 'dark'}
      onChange={themeContext.toggleTheme}
    />
  );
};

const SettingsScreen = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeAreaStyle}>
        <Layout style={styles.layout}>
          <ListItem
            title="Dark Mode"
            description="Toggle UI Dark Mode"
            accessoryRight={DarkModeToggle}
          />
          <Divider />
        </Layout>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  layout: {flex: 1},
  safeAreaStyle: {flex: 1},
});

export default SettingsScreen;
