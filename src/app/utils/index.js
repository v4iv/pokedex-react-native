import React from 'react';

export const ThemeContext = React.createContext({
  theme: 'light',
  toggleTheme: () => {},
});

export const pokemonIDGenerator = (id: number) => {
  const idString = `${id}`;

  const filler = '000';

  return filler.substring(0, filler.length - idString.length) + idString;
};
