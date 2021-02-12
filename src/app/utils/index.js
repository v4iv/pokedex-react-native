import React from 'react';
import {StyleSheet} from 'react-native';

export const ThemeContext = React.createContext({
  theme: 'light',
  toggleTheme: () => {},
});

export const pokemonIDGenerator = (id: number) => {
  const idString = `${id}`;

  const filler = '000';

  return filler.substring(0, filler.length - idString.length) + idString;
};

export const typeStyles = StyleSheet.create({
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
