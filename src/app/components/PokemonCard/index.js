import React from 'react';
import {Avatar, ListItem} from '@ui-kitten/components';
import {get, capitalize} from 'lodash';
import {pokemonIDGenerator} from '../../utils';

const PokemonCard = (pokemon) => {
  const name = capitalize(get(pokemon, ['item', 'name']));
  const image = get(pokemon, ['item', 'sprites', 'front_default']);
  const pokemonID = pokemonIDGenerator(get(pokemon, ['item', 'id']));

  return (
    <ListItem
      title={name}
      description={`#${pokemonID}`}
      accessoryLeft={(props) => (
        <Avatar
          {...props}
          style={[props.style, {tintColor: null}]}
          source={{uri: image}}
        />
      )}
    />
  );
};

export default PokemonCard;
