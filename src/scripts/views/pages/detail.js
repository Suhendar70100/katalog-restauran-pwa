import UrlParser from '../../routes/url-parser';
import TheMovieDbSource from '../../data/restodb-source';
import {
  createMovieDetailTemplate,
} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="movie" class="movie"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const hero = document.querySelector('.hero');
    hero.style.display = 'none';
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const movie = await TheMovieDbSource.detailMovie(url.id);
    const movieContainer = document.querySelector('#movie');
    movieContainer.innerHTML = createMovieDetailTemplate(movie);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      movie: {
        id: movie.id,
        name: movie.name,
        city: movie.city,
        pictureId: movie.pictureId,
        description: movie.description,
        rating: movie.rating,
      },
    });
  },
};

export default Detail;
