/* eslint-disable no-underscore-dangle */
import SavedArticleIdb from '../data/saved-articles-idb';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, article }) {
    this._likeButtonContainer = likeButtonContainer;
    this._article = article;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._article;

    if (await this._isArticleExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isArticleExist(id) {
    const article = await SavedArticleIdb.getArticle(id);
    return !!article;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await SavedArticleIdb.putArticle(this._article);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await SavedArticleIdb.deleteArticle(this._article.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
