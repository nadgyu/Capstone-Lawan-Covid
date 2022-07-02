import SavedArticleIdb from '../../data/saved-articles-idb';
import mainContentFocus from '../../utils/main-content-focus';
import { createArticleItemTemplate } from '../templates/template-creator';

const SavedArticles = {
  async render() {
    return `
    <section class="all-articles section">
    <h2 class="section__title">Semua Artikel</h2>
    <div class="all-articles__container container grid">
    </div>   
  </section>
    `;
  },

  async afterRender() {
    mainContentFocus();

    const articles = await SavedArticleIdb.getAllArticles();
    const articlesContainer = document.querySelector('.all-articles__container');

    articles.forEach((article) => {
      articlesContainer.innerHTML += createArticleItemTemplate(article);
    });
  },
};

export default SavedArticles;
