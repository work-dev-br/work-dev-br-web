import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDividerModule } from '@angular/material/divider'

/*-- APP Components --*/
import { PageComponent } from './page/page.component';
import { HeaderComponent } from './page/header/header.component';
import { FooterComponent } from './page/footer/footer.component';
import { ContactComponent } from './page/contact/contact.component';
import { AboutComponent } from './page/about/about.component';
import { HomeComponent } from './content/home/home.component';
import { ThemesComponent } from './content/themes/themes.component';
import { ArticlesComponent } from './content/articles/articles.component';
import { ArticleComponent } from './article/article.component';
import { PageNotFoundComponent } from './view/page-not-found/page-not-found.component';
import { ButtonTypeComponent } from './view/button-type/button-type.component';
import { ButtonThemeComponent } from './view/button-theme/button-theme.component';
import { ArticleHeaderComponent } from './view/article-header/article-header.component';

@NgModule({
    declarations: [
        AppComponent,
        PageComponent,
        HeaderComponent,
        FooterComponent,
        ContactComponent,
        AboutComponent,
        HomeComponent,
        ThemesComponent,
        ArticlesComponent,
        ArticleComponent,
        PageNotFoundComponent,
        ButtonTypeComponent,
        ButtonThemeComponent,
        ArticleHeaderComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatDividerModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
