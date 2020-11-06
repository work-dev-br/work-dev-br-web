import { Component, OnInit } from '@angular/core';

import { Type } from '../../models/type.model'
// import { Theme } from '../../models/theme.model'
import { Article } from '../../models/article.model'

import { TypeService } from '../../services/type.service'
// import { ThemeService } from '../../services/theme.service'
import { ArticleService } from '../../services/article.service'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [ 
        TypeService, 
       // ThemeService, 
        ArticleService 
    ]
})
export class HomeComponent implements OnInit {
    public types: Type[] = []
    // public theme: Theme[] = []
    public articles: Article[] = []

    constructor( 
        private typeService: TypeService, 
     //   private themeService: ThemeService, 
        private articleService: ArticleService, 
    ) { }

    ngOnInit(): void {
        this.types = this.typeService.getTypes()
        this.articles = this.articleService.getNewArticles()
    }

}
