import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDividerModule } from '@angular/material/divider'
import { MatButtonModule }  from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card'
import { MatBadgeModule } from '@angular/material/badge'

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
import { ThemeFolderComponent } from './view/theme-folder/theme-folder.component';

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
        ArticleHeaderComponent,
        ThemeFolderComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatDividerModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatBadgeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
