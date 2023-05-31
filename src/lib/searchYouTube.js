import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  // TODO
  $.ajax({
    // This is the url you should use to communicate with the API server.
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    type: 'GET',
    data: {
      q: query,
      youtube_api_key: YOUTUBE_API_KEY,
    },
    //data: JSON.stringify(message),
    //contentType: 'application/json',
    success: function (data) {
      callback(data.slice(0, 5));
    },
    error: function (error) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.log('Error', error);
    },
  });
};

export default searchYouTube;
