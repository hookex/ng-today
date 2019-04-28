import {BrowserModule} from '@angular/platform-browser';
import {APP_ID, Inject, NgModule, PLATFORM_ID} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MatCardModule, MatToolbarModule} from '@angular/material';

import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';

import {environment} from '../environments/environment';

import {AppComponent} from './app.component';
import {ArticleListComponent} from './article-list/article-list.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {ArticleComponent} from './article/article.component';
import {LoadingComponent} from './loading/loading.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {isPlatformBrowser} from '@angular/common';

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
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,

    RouterModule.forRoot(
      appRoutes,
      // SSR 不支持hash
      {
        // useHash: true,
        // enableTracing: true,
      }
    ),

    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
