import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Card, Text} from '@ui-kitten/components';
import {capitalize, get} from 'lodash';
import {pokemonIDGenerator, typeStyles} from '../../utils';

const PokemonDetails = (props) => {
  const {pokemon} = props;

  const name = capitalize(get(pokemon, ['name']));
  const image = {
    uri: get(pokemon, [
      'sprites',
      'other',
      'official-artwork',
      'front_default',
    ]),
  };
  const pokemonID = pokemonIDGenerator(get(pokemon, ['id']));
  const types = get(pokemon, ['types']);
  // const flavorTextEntries = get(pokemon, ['species', 'flavor_text_entries']);
  // const englishEntry = find(flavorTextEntries, {language: {name: 'en'}});
  // const flavorText = JSON.stringify(get(englishEntry, ['flavor_text']));

  return (
    <>
      <Card
        style={styles.card}
        header={(headerProps) => (
          <View {...headerProps}>
            <Text appearance="hint" category="c1">{`#${pokemonID}`}</Text>
            <Text appearance="default" category="h5">
              {name}
            </Text>
          </View>
        )}
        footer={(footerProps) => (
          <View {...footerProps} style={styles.footer}>
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
        )}>
        <Image source={image} style={styles.image} />
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  card: {marginVertical: 4},
  image: {height: 350, width: null},
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
});

export default PokemonDetails;
