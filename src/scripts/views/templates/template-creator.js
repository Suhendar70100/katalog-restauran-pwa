import CONFIG from '../../globals/config';

const createMovieDetailTemplate = (movie) => `
  <h2 class="movie__title">${movie.name}</h2>
  <img class="movie__poster" src="${CONFIG.BASE_IMAGE_URL + movie.pictureId}" alt="${movie.name}" />
  <div class="movie__info">
    <h3>Information</h3>
    <hr>
    <table>
      <tr>
        <td><h4>Alamat</h4></td>
        <td><h4>Kategori</h4></td>
      </tr>
      <tr>
      <td><p>${movie.address}</p></td>
      <td><p>${movie.categories.map((category) => `<span class="detail-category">${category.name}</span>`).join(', ')}</p></td>
      </tr>
      <tr>
      <td><h4>Kota</h4></td>
      <td><h4>Rating</h4></td>
      </tr>
      <tr>
      <td><p>${movie.city}</p></td>
      <td><p>${movie.rating}</p></td>
      </tr>
      <tr>
      <td><h4>Menu Makanan</h4></td>
      <td><h4>Menu Minuman</h4></td>
      </tr>
      <tr>
      <td><p> ${movie.menus.foods.map((food) => `<li class="menu-item">${food.name}</li>`).join(' ')}</p></td>
      <td><p> ${movie.menus.drinks.map((drink) => `<li class="menu-item">${drink.name}</li>`).join(' ')}</p></td>
      </tr>
    </table>
  </div>
  <div class="movie__overview">
    <h2>Overview</h2>
    <p>${movie.description}</p>
  <div id="review">
  <h2>Consumer Review</h2>
  ${movie.customerReviews.map((review) => `
    <h3>${review.name}, <span class="date">${review.date}</span></h3>
    <p>${review.review}</p>
      `).join('')}
  </div>
  </div>
`;

const createMovieItemTemplate = (movie) => `
  <div class="movie-item">
    <div class="movie-item__header">
      <img class="movie-item__header__poster" alt="${movie.name}"
           src="${CONFIG.BASE_IMAGE_URL + movie.pictureId}">
      <div class="movie-item__header__rating">${movie.city}
      </div>
    </div>
    <div class="movie-item__content">
    <p class="list_item_rating">Rating : ⭐️ <span class="list_item_rating_value" tabindex="0">${movie.rating}</span>
    </p>
      <h2><a href="/#/detail/${movie.id}">${movie.name}</a></h2>
      <p>${movie.description}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createMovieItemTemplate,
  createMovieDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
