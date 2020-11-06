import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { Type } from '../models/type.model'
import { Theme } from '../models/theme.model'
import { Article } from '../models/article.model'

import { TypeService } from '../services/type.service'
import { ThemeService } from '../services/theme.service'
import { ArticleService } from '../services/article.service'

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.css'],
    providers: [ 
        TypeService, 
        ThemeService, 
        ArticleService 
    ]    
})
export class ArticleComponent implements OnInit {
    public parmType: string
    public parmTheme: string
    public parmArticle: string
    public id: number
    public type: Type
    public theme: Theme
    public article: Article
    public isValid: boolean  

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
        this.parmArticle = this.route.snapshot.paramMap.get("article")
        this.id = parseInt(this.parmArticle)
        this.type = this.typeService.getType(this.parmType)
        this.theme = this.themeService.getTheme(this.parmTheme)
        this.article = this.articleService.getArticle(this.parmType, this.parmTheme, this.id)
        if ( this.article == undefined ) {
            this.isValid = false
        } else {
            this.isValid = true
        }
    }

}
