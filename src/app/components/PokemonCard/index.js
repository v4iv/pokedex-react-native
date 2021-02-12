import React, {useCallback} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Card, Text} from '@ui-kitten/components';
import {capitalize, get, kebabCase} from 'lodash';
import {pokemonIDGenerator, typeStyles} from '../../utils';

const PokemonCard = (props) => {
  const {pokemon} = props;
  const navigation = useNavigation();

  const name = capitalize(get(pokemon, ['name']));
  const image = {uri: get(pokemon, ['sprites', 'front_default'])};
  const pokemonID = pokemonIDGenerator(get(pokemon, ['id']));
  const types = get(pokemon, ['types']);
  const slug = kebabCase(name.toLowerCase());

  const navigateToPokemon = useCallback(() => {
    navigation.navigate('Pokemon', {name: slug});
  }, [navigation, slug]);

  return (
    <Card
      style={styles.item}
      status="primary"
      onPress={navigateToPokemon}
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
      <Image source={image} style={styles.image} />
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

export default PokemonCard;
