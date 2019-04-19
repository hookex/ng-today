import { sandboxOf } from 'angular-playground';
import { WelcomeComponent } from './welcome.component';

export default sandboxOf(WelcomeComponent)
  .add('default', {
    template: `<welcome></welcome>`
  })
  .add('txt', {
    template: `<welcome>Hello ng today</welcome>`
  });
