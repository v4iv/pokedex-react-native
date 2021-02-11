import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Card, Divider, Text} from '@ui-kitten/components';
import {capitalize, get} from 'lodash';
import {pokemonIDGenerator} from '../../utils';

const PokemonDetails = (props) => {
  const {pokemon} = props;

  const name = capitalize(get(pokemon, ['name']));
  const image = {uri: get(pokemon, ['sprites', 'front_default'])};
  const pokemonID = pokemonIDGenerator(get(pokemon, ['id']));

  return (
    <>
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
        )}>
        <Divider />
        <Image source={image} style={styles.image} />
        <Divider />
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  image: {flex: 1, height: 300, width: null},
  item: {marginVertical: 4},
});

export default PokemonDetails;
