import axios from 'axios';
import {get} from 'lodash';

export const fetchPokemon = (p) => {
  return new Promise((resolve, reject) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${p
      .toString()
      .toLowerCase()}`;

    axios
      .get(url)
      .then((res) => {
        const pokemon = get(res, ['data']);

        const speciesURL = get(pokemon, ['species', 'url']);

        axios
          .get(speciesURL)
          .then((r) => {
            const species = get(r, ['data']);

            const payload = {...pokemon, species};

            resolve(payload);
          })
          .catch((e) => {
            if (e.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.log(e.response.data);
              console.log(e.response.status);
              console.log(e.response.headers);
            } else if (e.request) {
              // The request was made but no response was received
              // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
              // http.ClientRequest in node.js
              console.log(e.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', e.message);
            }
            console.log(e.config);

            reject(e);
          });
      })
      .catch((err) => {
        if (err.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else if (err.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(err.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', err.message);
        }
        console.log(err.config);

        reject(err);
      });
  });
};
