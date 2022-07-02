/* eslint-disable no-console */
import ArticlesSource from '../data/articles-source';
import UrlParser from '../routes/url-parser';

const commentForm = () => {
  const url = UrlParser.parseActiveUrlWithoutCombiner();

  document.getElementById('showCommentButton').addEventListener('click', () => {
    document.querySelector('.popup').classList.add('active');
    document.getElementById('inputComment').reset();
  });
  document.getElementById('close-form').addEventListener('click', () => {
    document.querySelector('.popup').classList.remove('active');
  });
  document.getElementById('commentSubmit').addEventListener('click', () => {
    document.querySelector('.popup').classList.remove('active');
  });

  document.getElementById('inputComment').addEventListener('submit', async () => {
    const name = document.getElementById('inputCommentCreator');
    console.log(name.value);
    const comment = document.getElementById('inputCommentDesc');
    console.log(comment.value);

    ArticlesSource.createComment(url.id, {
      name: name.value,
      comment: comment.value,
    });

    document.location.reload();
  });
};

export default commentForm;
