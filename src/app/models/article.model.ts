
export class Article {
    id: number
    type: string
    theme: string
    title: string
    description: string
    date: Date
    isNew: boolean             // Artigo novo: aparece na home page
    level: number              // level: 1=Basico  2=Intermediario  3=Avancado
}