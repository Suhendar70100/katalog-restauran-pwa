import TheRestoDbSource from '../../data/restodb-source';
import {
  createMovieItemTemplate,
} from '../templates/template-creator';

const Home = {
  async render() {
    return `
          <div class="content">
            <div class="latest">
            <h1>Rekomendasi Restaurant</h1>
            </div>
            <hr>
            <div id="movies" class="movies">
            </div>
          </div>
        `;
  },

  async afterRender() {
    const hero = document.querySelector('.hero');
    hero.style.display = '';
    const movies = await TheRestoDbSource.nowPlayingMovies();
    const moviesContainer = document.querySelector('#movies');
    movies.forEach((movie) => {
      moviesContainer.innerHTML += createMovieItemTemplate(movie);
    });
  },
};

export default Home;
