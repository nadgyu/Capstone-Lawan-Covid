import API_ENDPOINT from '../globals/api-endpoint';

class ArticlesSource {
  static async Articles() {
    const response = await fetch(API_ENDPOINT.ARTICLES);
    const responseJson = await response.json();
    return responseJson;
  }

  static async ArticleDetail(id) {
    const response = await fetch(API_ENDPOINT.ARTICLEDETAIl(id));
    const responseJson = await response.json();
    return responseJson;
  }

  static async ArticleComments(id) {
    const response = await fetch(`${API_ENDPOINT.ARTICLEDETAIl(id)}/comments`);
    const responseJson = await response.json();
    return responseJson;
  }

  static async createComment(id, data = {}) {
    const response = await fetch(`${API_ENDPOINT.ARTICLEDETAIl(id)}/comments`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data),
    });
    return response.json();
  }
}

export default ArticlesSource;
