import axios from 'axios';
import { act } from 'react-dom/test-utils';
import { actionTypes } from './types';

export const getSecretWord = () => {
  return (dispatch) => {
    return axios
      .get('http://localhost:3030')
      .then((res) =>
        dispatch({ type: actionTypes.SET_SECRET_WORD, payload: res.data }),
      );
  };
};
