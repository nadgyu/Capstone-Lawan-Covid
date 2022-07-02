import CONFIG from './config';

const API_ENDPOINT = {
  ARTICLES: `${CONFIG.ARTICLES_URL}articles`,
  ARTICLEDETAIl: (id) => `${CONFIG.ARTICLES_URL}articles/${id}`,
};

export default API_ENDPOINT;
