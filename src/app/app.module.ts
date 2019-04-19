import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';

import {environment} from '../environments/environment';

import {AppComponent} from './app.component';
import {ArticleListComponent} from './article-list/article-list.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {ArticleComponent} from './article/article.component';
import {LoadingComponent} from './loading/loading.component';

const appRoutes: Routes = [{
  path: 'articles', component: ArticleListComponent,
}, {
  path: 'articles/:id', component: ArticleComponent, data: {id: ':id'}
}, {
  path: '', redirectTo: '/articles', pathMatch: 'full'
}];

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    WelcomeComponent,
    ArticleComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,

    RouterModule.forRoot(
      appRoutes,
      {
        useHash: true,
        enableTracing: true,
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
