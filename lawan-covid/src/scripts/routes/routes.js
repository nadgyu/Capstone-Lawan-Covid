import Articles from '../views/pages/articles';
import ArticleDetail from '../views/pages/article-detail';
import Homepage from '../views/pages/homepage';
import SavedArticles from '../views/pages/saved-articles';

const routes = {
  '/': Homepage, // default page
  '/articles': Articles,
  '/detail/:id': ArticleDetail,
  '/saved': SavedArticles,
};

export default routes;
