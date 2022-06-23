import {GET_QUOTES} from './actionTypes'

export function getQuotes(){
  return function(dispatch){
    return fetch(`https://www.breakingbadapi.com/api/quote/random`)
    .then(response => response.json())
    .then(json => {
      dispatch({ type: GET_QUOTES, payload: json });
    });
  }
};

