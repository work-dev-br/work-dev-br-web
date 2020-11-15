import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-copy-code',
    templateUrl: './copy-code.component.html',
    styleUrls: ['./copy-code.component.css']
})
export class CopyCodeComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    /*-- Para copiar para o clipboard --*/
    CopyTextCode(): void {
        var conteudo = document.getElementById("article-text").innerText
        navigator.clipboard.writeText(conteudo);
    }

}
