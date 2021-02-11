import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Card, Divider, Text} from '@ui-kitten/components';
import {capitalize, get} from 'lodash';
import {pokemonIDGenerator} from '../../utils';

const PokemonCard = (props) => {
  const {pokemon} = props;

  const name = capitalize(get(pokemon, ['name']));
  const image = {uri: get(pokemon, ['sprites', 'front_default'])};
  const pokemonID = pokemonIDGenerator(get(pokemon, ['id']));
  const types = get(pokemon, ['types']);

  return (
    <Card
      style={styles.item}
      status="primary"
      header={(headerProps) => (
        <View {...headerProps}>
          <Text appearance="hint" category="c1">{`#${pokemonID}`}</Text>
          <Text appearance="default" category="h5">
            {name}
          </Text>
        </View>
      )}
      footer={(footerProps) => (
        <View {...footerProps}>
          <View style={styles.footer}>
            {types.map((item) => {
              const pokemonType = get(item, ['type', 'name']);
              const typeName = pokemonType.toUpperCase();

              return (
                <Text
                  key={pokemonType}
                  style={typeStyles[pokemonType]}
                  category="h6">
                  {typeName}
                </Text>
              );
            })}
          </View>
        </View>
      )}>
      <Divider />
      <Image source={image} style={styles.image} />
      <Divider />
    </Card>
  );
};

const styles = StyleSheet.create({
  image: {flex: 1, height: 300, width: null},
  item: {marginVertical: 4},
  text: {
    margin: 4,
    marginHorizontal: 8,
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const typeStyles = StyleSheet.create({
  grass: {
    color: '#9bcc50',
    margin: 4,
  },
  poison: {
    color: '#b97fc9',
    margin: 4,
  },
  fire: {
    color: '#fd7d24',
    margin: 4,
  },
  flying: {
    color: '#3dc7ef',
    margin: 4,
  },
  water: {
    color: '#4592c4',
    margin: 4,
  },
  bug: {
    color: '#729f3f',
    margin: 4,
  },
  normal: {
    color: '#a4acaf',
    margin: 4,
  },
  electric: {
    color: '#eed535',
    margin: 4,
  },
  ground: {
    color: '#f7de3f',
    margin: 4,
  },
  fairy: {
    color: '#fdb9e9',
    margin: 4,
  },
  fighting: {
    color: '#d56723',
    margin: 4,
  },
  psychic: {
    color: '#f366b9',
    margin: 4,
  },
  rock: {
    color: '#a38c21',
    margin: 4,
  },
  steel: {
    color: '#9eb7b8',
    margin: 4,
  },
  ice: {
    color: '#51c4e7',
    margin: 4,
  },
  dragon: {
    color: '#f16e57',
    margin: 4,
  },
  dark: {
    color: '#707070',
    margin: 4,
  },
  ghost: {
    color: '#7b62a3',
    margin: 4,
  },
});

export default PokemonCard;
