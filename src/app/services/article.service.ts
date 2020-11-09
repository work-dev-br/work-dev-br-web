import { Injectable } from '@angular/core';

import { Article } from '../models/article.model'

@Injectable({
    providedIn: 'root'
})
export class ArticleService {
    private articles: Article[] = []

    constructor() {
        this.addArticles()
    }

    private setArticle( id: number, type: string, theme: string, title: string,
        description: string, date: Date, isNew: boolean, level: number
    ): void {
        this.articles.push({ id, type, theme, title, description, date, isNew, level})
    }

    public getArticles(): Article[] {
        return this.articles
    }

    public getArticle(type: string, theme: string, id: number): Article {
        let a: Article = undefined
        for (let article of this.articles) {
            if ( article.type == type && 
                article.theme == theme && 
                article.id == id ) { 
                    a = article 
                }
        }
        return a
    }

    public getArticlesOfTypeAndTheme(type: string, theme: string): Article[] {
        console.log("getArticle: " + type + " === " + theme)
        let a: Article[] = []
        for (let article of this.articles) {
            console.log("getArticle for: " + article.type + ".." + article.theme)
            if ( article.type == type && 
                article.theme == theme ) { 
                    console.log("getArticle: ENTROU NO IF")
                    a.push(article) 
                }
        }
        console.log("getArticle a.length: " + a.length)
        return a
    }

    public getNewArticles(): Article[] {
        let a: Article[] = []
        a = this.articles.filter((a) => { return a.isNew })
        return a
    }

    private addArticles(): void {
        this.setArticle( 1, "tips", "angular", 
            "Como exibir uma data no formato dd/mm/aaaa em Angular.", 
            "Este artigo mostra como exibir uma data no formato dd/mm/aaaa com interpolation e pipe no Angular.", 
            new Date(2020, 11, 8), true, 1)
        this.setArticle( 2, "tools", "angular", 
            "O que é o framework Angular e para que serve.", 
            "Breve introdução ao este framework que conquistou muitos desenvolvedores e esta sendo utilizado em larga escala mundo afora.", 
            new Date(2020, 11, 8), true, 1)


        this.setArticle( 3, "tools", "javascript", 
            "Artigo 1 da Ferramenta Javascript testando a quebra de linha do titulo que vai quebrar para a teerceira linha", 
            "Descrição 1", 
            new Date(2020, 11, 1), true, 3)
        this.setArticle( 4, "tools", "css", 
            "Artigo 1 da Ferramenta CSS", 
            "Descrição 1", 
            new Date(2020, 11, 1), false, 3)
        this.setArticle( 5, "tips", "javascript", 
            "Artigo 1 de Dicas Javascript", 
            "Descrição 1", 
            new Date(2020, 11, 1), true, 2)
        this.setArticle( 6, "projects", "angular", 
            "Artigo 1 de Projeto Angular", 
            "Descrição 1", 
            new Date(2020, 11, 1), false, 1)
    }
}
