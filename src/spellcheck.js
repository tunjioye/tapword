import axios from 'axios';
import config from './config';

const spellcheck = axios.create({
  baseURL: 'https://montanaflynn-spellcheck.p.rapidapi.com/check/',
  headers: {
    'X-RapidAPI-Key': config.SPELLCHECK_API_KEY,
  }
});

function removeLastWordRequest() {
  if (window.localStorage.getItem('last_word_request')) {
    window.localStorage.removeItem('last_word_request');
  }
}
removeLastWordRequest();

// spellcheck request interceptor
spellcheck.interceptors.request.use(function (config) {
  // Do something before request is sent
  if (window.localStorage.getItem('last_word_request')) {
    let lastReqUrl = window.localStorage.getItem('last_word_request');
    if (lastReqUrl === arguments[0]['url']) {
      return Promise.reject(false);
    }
  }

  window.localStorage.setItem('last_word_request', arguments[0]['url']);

  // remove last word request after 5 seconds
  setTimeout(() => {
    removeLastWordRequest();
  }, 5000);

  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

export default spellcheck;
