import { Component, OnInit, Input } from '@angular/core';

import { Type } from '../../models/type.model'
import { Theme } from '../../models/theme.model'
import { Article } from '../../models/article.model'

import { TypeService } from '../../services/type.service'
import { ThemeService } from '../../services/theme.service'
import { ArticleService } from '../../services/article.service'

@Component({
    selector: 'app-article-folder',
    templateUrl: './article-folder.component.html',
    styleUrls: ['./article-folder.component.css'],
    providers: [ 
        TypeService, 
        ThemeService, 
        ArticleService 
    ]
})
export class ArticleFolderComponent implements OnInit {
    public id: number
    public type: Type
    public theme: Theme
    public article: Article

    constructor(
        private typeService: TypeService, 
        private themeService: ThemeService,
        private articleService: ArticleService,         
    ) { }

    @Input() parmType: string
    @Input() parmTheme: string
    @Input() parmId: string

    ngOnInit(): void {
    }

    ngDoCheck(): void {
        this.id = parseInt(this.parmId)
        this.type = this.typeService.getType(this.parmType)
        this.theme = this.themeService.getTheme(this.parmTheme)
        this.article = this.articleService.getArticle(this.parmType, this.parmTheme, this.id)
    }

}
