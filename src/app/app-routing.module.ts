import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesBitcoinComponent } from './bitcoin/articles-bitcoin.component';
import { ArticlesJavascriptComponent } from './articles-javascript/articles-javascript.component';
import { ArticlesTechnologyComponent } from './articles-technology/articles-technology.component';

const routes: Routes = [
  { path: "articles", component: ArticlesTechnologyComponent },
  { path: "articles-javascript", component: ArticlesJavascriptComponent },
  { path: "articles-bitcoin", component: ArticlesBitcoinComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
