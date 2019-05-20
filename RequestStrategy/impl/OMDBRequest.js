const axios = require('../../axiosConfig');

class OMDBRequest {
  doRequest(id) {
      console.log(process.env.OMDB_API_KEY)
    return axios
      .get(`http://www.omdbapi.com/?i=${id}&apikey=${process.env.OMDB_API_KEY}`)
      .then(response => {
        const { Response } = response.data;
        if (Response === 'False') {
          const error = new Error('Invalid ID');
          error.statusCode = 404;
          throw error;
        }

        return {
          title: response.data.Title,
          authors: [response.data.Production],
          publishDate: response.data.Released,
          description: response.data.Plot,
          image: response.data.Poster
        };
      });
  }
}

module.exports = OMDBRequest;
