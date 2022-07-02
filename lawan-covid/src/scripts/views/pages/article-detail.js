import ArticlesSource from '../../data/articles-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import mainContentFocus from '../../utils/main-content-focus';
import commentForm from '../../utils/pop-up-form';
import { createArticleDetailTemplate, createCommentItemTemplate, showCommentFormButton } from '../templates/template-creator';

const ArticleDetail = {
  async render() {
    return `
  <section class="detail-article section container">
    <a href="#/articles" class="all-articles__title">
      Semua Artikel
    </a>
  </section>
  <section class="comment section container">
  <h2>Komentar</h2>
  </section>
  <section class="popup">
  <div class="modal">
    <div id="close-form">&times;</div>
    <h2 id="form-title">Tulis Komentar</h2>
    <form id="inputComment" autocomplete="off">
      <div class="input">
        <label for="inputCommentCreator">Nama</label>
        <input id="inputCommentCreator" type="text" required />
      </div>
      <div class="input">
        <label for="inputCommentDesc">Komentar</label>
        <input id="inputCommentDesc" type="text" required />
      </div>
      <button id="commentSubmit" type="submit">Kirim Komentar</button>
    </form>
  </div>
</section>
  <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    mainContentFocus();

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const article = await ArticlesSource.ArticleDetail(url.id);
    const articleContainer = document.querySelector('.detail-article');
    articleContainer.innerHTML += createArticleDetailTemplate(article);

    // comment
    const comments = await ArticlesSource.ArticleComments(url.id);
    const commentContainer = document.querySelector('.comment');
    comments.forEach((comment) => {
      commentContainer.innerHTML += createCommentItemTemplate(comment);
    });

    commentContainer.innerHTML += showCommentFormButton();
    commentForm();

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      article: {
        id: article.id,
        creator: article.creator,
        createdAt: article.createdAt,
        title: article.title,
        image: article.image,
        desc: article.desc,
      },
    });
  },
};

export default ArticleDetail;
