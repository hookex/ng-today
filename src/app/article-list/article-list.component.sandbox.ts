import {sandboxOf} from 'angular-playground';
import {ArticleListComponent} from './article-list.component';

export default sandboxOf(ArticleListComponent)
  .add('default', {
    template: `<article-list></article-list>`
  });
