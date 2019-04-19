import { sandboxOf } from 'angular-playground';
import { LoadingComponent } from './loading.component';

export default sandboxOf(LoadingComponent)
  .add('default', {
    template: `<today-loading></today-loading>`
  });
