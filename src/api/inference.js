import axios from 'axios';
import config from '../config';

export const getInferenceAsync = async (prompt, token) => {
  const path = '/inference';
  const params = '?prompt=' + prompt;

  return await axios.get(
    config.API_URL + path + params, {
      headers: {
        'Authorization': 'Token ' + token
      }
    });
};

