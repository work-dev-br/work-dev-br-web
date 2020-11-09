import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-articles001',
    templateUrl: './articles001.component.html',
    styleUrls: ['../articles000.component.css']
})
export class Articles001Component implements OnInit {
    public id: number



    public textBox: string = `
        <h1 [(class)]="validador()">\n
           Hello World! {{ nivaldo }}\n
        </h1>
        <p>This template definition spans multiple lines.</p>
        `


    constructor() { }

    @Input() parmId: string

    ngOnInit(): void {
    }

    ngDoCheck(): void {
        this.id = parseInt(this.parmId)
        console.log("Articles001> id......: " + this.id)
    }

    isArticleSelected(article: number): boolean {
        console.log("Articles001> article.: " + article)
        if ( article == this.id ) {
            console.log("Articles001> return true ")
            return true
        } else {
            console.log("Articles001> return false ")
            return false
        }
    }
}
