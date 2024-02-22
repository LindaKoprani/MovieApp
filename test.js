const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTZkNGU2YjU3M2E1NjNlNGM3ZTQ3ZDczODY4OGRiMiIsInN1YiI6IjY1ZDY1ZmFiZWQyYWMyMDE3YzM1NTk4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DvJP2FT_zxKQMfd5v4dl5zKOmwsE6OqUjk1JxshXdWE'
    }
  };
  
  fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', options)
    .then(response => response.json())
    .then(response => {
      // Extract the list of TV shows from the response
      const tvShows = response.results;
  
      // Sort the TV shows by popularity descending
      const sortedTvShows = tvShows.sort((a, b) => b.popularity - a.popularity);
  
      // Output the sorted TV shows
      console.log(sortedTvShows);
    })
    .catch(err => console.error(err));
  