import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { Type } from '../../models/type.model'
import { Theme } from '../../models/theme.model'
import { Article } from '../../models/article.model'

import { TypeService } from '../../services/type.service'
import { ThemeService } from '../../services/theme.service'
import { ArticleService } from '../../services/article.service'

@Component({
    selector: 'app-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.css'],
    providers: [ 
        TypeService, 
        ThemeService, 
        ArticleService 
    ]
})
export class ArticlesComponent implements OnInit {
    public parmType: string
    public parmTheme: string
    public type: Type
    public theme: Theme
    public articles: Article[] = []

    constructor( 
        private route: ActivatedRoute,
        private typeService: TypeService, 
        private themeService: ThemeService,
        private articleService: ArticleService, 
    ) { }

    ngOnInit(): void {
    }

    ngDoCheck(): void {
        this.parmType = this.route.snapshot.paramMap.get("type")
        this.parmTheme = this.route.snapshot.paramMap.get("theme")
        this.type = this.typeService.getType(this.parmType)
        this.theme = this.themeService.getTheme(this.parmTheme)
        this.articles = this.articleService.getArticlesOfTypeAndTheme(this.parmType, this.parmTheme)
    }

}
