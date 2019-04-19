import { sandboxOf } from 'angular-playground';
import { ArticleComponent } from './article.component';

export default sandboxOf(ArticleComponent)
  .add('default', {
    template: `<today-article></today-article>`
  });
