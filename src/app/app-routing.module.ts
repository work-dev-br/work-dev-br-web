import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './page/contact/contact.component';
import { AboutComponent } from './page/about/about.component';

import { HomeComponent } from './content/home/home.component';
import { ThemesComponent } from './content/themes/themes.component'
import { ArticlesComponent } from './content/articles/articles.component'
import { ArticleComponent } from './article/article.component'

import { PageNotFoundComponent } from './view/page-not-found/page-not-found.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'themes/:type', component: ThemesComponent },
    { path: 'articles/:type/:theme', component: ArticlesComponent },
    { path: 'article/:type/:theme/:article', component: ArticleComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
