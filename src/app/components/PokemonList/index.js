import React from 'react';
import {StyleSheet} from 'react-native';
import {List} from '@ui-kitten/components';
import PokemonCard from '../PokemonCard';

const PokemonList = (props) => {
  const {pokemons, loadMore} = props;

  return (
    <List
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={pokemons}
      initialNumberToRender={24}
      onEndReached={loadMore}
      renderItem={PokemonCard}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  item: {
    marginVertical: 4,
  },
});

export default PokemonList;
