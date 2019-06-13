import axios from 'axios';
import config from './config';

const spellcheck = axios.create({
  baseURL: 'https://montanaflynn-spellcheck.p.rapidapi.com/check/',
  headers: {
    'X-RapidAPI-Key': config.SPELLCHECK_API_KEY,
  }
});

export default spellcheck;
