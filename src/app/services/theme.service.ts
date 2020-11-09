import { Injectable } from '@angular/core';

import { Theme } from '../models/theme.model'
import { Article } from '../models/article.model'

import { ArticleService } from '../services/article.service'

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private themes: Theme[] = []
    private articles: Article[] = []

    constructor( private articleService: ArticleService ) { 
        /*-- Carrega os Temas ==*/
        this.addTheme("angular", "Angular", 0, "angular-128")
        this.addTheme("javascript", "Javascript", 0, "javascript-128")
        this.addTheme("nodejs", "Node JS", 0, "angular-128")
        this.addTheme("css", "CSS", 0, "angular-128")
        this.addTheme("internet", "Internet", 0, "angular-128")
        /*-- Carrega todos os Artigos --*/
        this.articles = this.articleService.getArticles()
    }
    
    private addTheme(name: string, title: string, quantityArticles: number = 0, icon: string): void {
        this.themes.push({ name, title, quantityArticles, icon })
    }
    
    public getThemes(): Theme[] {
        return this.themes
    }
    
    public getTheme(name: string): Theme {
        let t: Theme = undefined
        for (let theme of this.themes) {
            if ( theme.name == name ) { t = theme }
        }
        return t
    }
    
    public getThemesOfType(type: string): Theme[] {
        let t: Theme[] = []
        /*-- Zera a quantidade de artigos do Tema --*/
        this.themes.forEach((t, i) => {
            this.themes[i].quantityArticles = 0
        })
        /*-- Carrega a quantidade de artigos dos Temas --*/
        this.articles.forEach((a) => {
            this.themes.forEach((t, i) => {
                if (a.type == type && a.theme == t.name) { 
                    this.themes[i].quantityArticles++ 
                   // console.log("Igual: " + a.type + " = " + type + " e " + a.theme + " = " + t.name )
                }
            })
        })
        /*-- Filtra os Temas com quantidade --*/
        //this.themes.forEach((t) => {
        //    console.log("this.themes: " + t.name + ", " + t.title + ", " + t.quantityArticles)
       // })

        t = this.themes.filter((t) => { return t.quantityArticles > 0 ? true : false })        
        
        
        //console.log("t.length: " + t.length)
        //t.forEach((t) => { console.log("Tema: " + t.name + ", " + t.title + ", " + t.quantityArticles) })
        
        
        return t
    }
}
