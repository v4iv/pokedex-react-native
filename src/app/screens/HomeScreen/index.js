import React, {useCallback, useEffect, useLayoutEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {isEmpty} from 'lodash';
import {View, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {Button, Divider, Icon, Layout, Spinner} from '@ui-kitten/components';
import {
  FETCH_POKEDEX_ERROR,
  FETCH_POKEDEX_REQUEST,
  FETCH_POKEDEX_SUCCESS,
} from '../../constants/pokedex.constants';
import {fetchPokemons} from '../../actions/pokedex.actions';
import PokemonList from '../../components/PokemonList';

const HomeScreen = (props) => {
  const {navigation} = props;
  const dispatch = useDispatch();

  const navigateToSettings = useCallback(() => {
    navigation.navigate('Settings');
  }, [navigation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          appearance="ghost"
          onPress={navigateToSettings}
          accessoryLeft={(iconProps) => <Icon {...iconProps} name="settings" />}
        />
      ),
    });
  }, [navigateToSettings, navigation]);

  const {pokemonList, url, loading} = useSelector((state) => ({
    pokemonList: state.pokedex.pokemonList,
    url: state.pokedex.url,
    error: state.pokedex.error,
    loading: state.pokedex.loading,
  }));

  const handleFetch = useCallback(() => {
    dispatch({
      type: FETCH_POKEDEX_REQUEST,
    });

    fetchPokemons(url)
      .then((res) => {
        dispatch({
          type: FETCH_POKEDEX_SUCCESS,
          payload: res,
        });
      })
      .catch((err) => {
        console.error(FETCH_POKEDEX_ERROR, err);
        dispatch({
          type: FETCH_POKEDEX_ERROR,
          payload: 'An Error Occurred! Please Try Again.',
        });
      });
  }, [dispatch, url]);

  useEffect(() => {
    if (isEmpty(pokemonList)) {
      handleFetch();
    }
  }, [handleFetch]);

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <SafeAreaView style={styles.safeAreaStyle}>
        <Layout style={styles.layout}>
          {!isEmpty(pokemonList) && (
            <PokemonList pokemons={pokemonList} loadMore={handleFetch} />
          )}

          <Divider />

          {loading && (
            <View style={styles.spinnerStyle}>
              <Spinner />
            </View>
          )}
        </Layout>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  layout: {flex: 1},
  safeAreaStyle: {flex: 1},
  spinnerStyle: {alignItems: 'center', marginVertical: 4},
});

export default HomeScreen;
