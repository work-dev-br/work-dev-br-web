import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-article-level',
    templateUrl: './article-level.component.html',
    styleUrls: ['./article-level.component.css']
})
export class ArticleLevelComponent implements OnInit {
    public numberLevel: number
    public arrayLevel: string[] = []

    constructor() { }

    @Input() level: string

    ngOnInit(): void {
        this.numberLevel = parseInt(this.level)
        for (var i = 0; i < this.numberLevel; i++) {
            this.arrayLevel.push(" ")
        } 
    }

}
