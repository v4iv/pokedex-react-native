import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {Layout, Spinner} from '@ui-kitten/components';
import {isEmpty} from 'lodash';
import {
  FETCH_POKEMON_ERROR,
  FETCH_POKEMON_REQUEST,
  FETCH_POKEMON_SUCCESS,
} from '../../constants/pokemon.constants';
import {fetchPokemon} from '../../actions/pokemon.actions';
import PokemonDetails from '../../components/PokemonDetails';

const PokemonScreen = (props) => {
  const {
    route: {
      params: {name: slug},
    },
  } = props;
  const dispatch = useDispatch();

  const {pokemon, loading} = useSelector((state) => ({
    pokemon: state.pokemon.pokemon,
    error: state.pokemon.error,
    loading: state.pokemon.loading,
  }));

  const handleFetch = useCallback(() => {
    dispatch({
      type: FETCH_POKEMON_REQUEST,
    });

    fetchPokemon(slug)
      .then((res) => {
        dispatch({
          type: FETCH_POKEMON_SUCCESS,
          payload: res,
        });
      })
      .catch((err) => {
        console.error(err);

        dispatch({
          type: FETCH_POKEMON_ERROR,
          payload: 'An Error Occurred! Please Try Again.',
        });
      });
  }, [dispatch, slug]);

  useEffect(() => {
    handleFetch();
  }, [handleFetch]);

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <SafeAreaView style={styles.safeAreaStyle}>
        <Layout style={styles.layout}>
          {!isEmpty(pokemon) && <PokemonDetails pokemon={pokemon} />}

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
  spinnerStyle: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default PokemonScreen;
