const createCovidDataTemplate = (covid) => `${covid}`;

const createArticleItemTemplate = (article) => `
   <a href="${`/#/detail/${article.id}`}" class="all-articles__card">
        <img src="${article.image}" alt="" class="all-articles__image">
        <div class="all-articles__body">
          <div class="all-articles__creator">
             <sub>${article.name}</sub>
            <br>
            <sub>${article.createdAt.slice(0, 10)}</sub>
          </div>
            <h2 class="all-articles__title">${article.title}</h2>
            <p class="all-articles__desc">${article.desc[3].slice(0, 100)}...</p>
        </div>
      </a> 
`;

const createArticleDetailTemplate = (article) => `
<article class="detail-article__container">
<sub>${article.name}</sub>
<br>
<sub>${article.createdAt.slice(0, 10)}</sub>
<h2 class="detail-article__title">${article.title}</h2>
<img src="${article.image}" alt="${article.title}" class="large-image">
${article.desc.map((desc) => `<p>${desc}</p>`).join(' ')}
</article>
`;

const createCommentItemTemplate = (comment) => `
<article class="comment-posted__container">
<sub>${comment.name}</sub> <br>
<p>${comment.comment}</p>
</article>
`;

const showCommentFormButton = () => `
  <button aria-label="submit comment" id="showCommentButton" class="commentButton">
    Tambahkan Komentar
  </button>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="save to read later" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unsave" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createCovidDataTemplate,
  createArticleItemTemplate,
  createArticleDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createCommentItemTemplate,
  showCommentFormButton,
};
