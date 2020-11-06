import { Component, OnInit, Input } from '@angular/core';

import { Theme } from '../../models/theme.model'

import { ThemeService } from '../../services/theme.service'

@Component({
    selector: 'app-button-theme',
    templateUrl: './button-theme.component.html',
    styleUrls: ['./button-theme.component.css'],
    providers: [ 
        ThemeService, 
    ]        
})
export class ButtonThemeComponent implements OnInit {
    public theme: Theme

    constructor(
        private themeService: ThemeService,         
    ) { }

    @Input() parmType: string
    @Input() parmTheme: string 
    @Input() parmQuantityArticles: string

    ngOnInit(): void {
    }

    ngDoCheck(): void {
        this.theme = this.themeService.getTheme(this.parmTheme)
        console.log("**************** button-theme ****************")
        console.log("parmType.............: " + this.parmType)
        console.log("parmTheme............: " + this.parmTheme)
        console.log("parmQuantityArticles.: " + this.parmQuantityArticles)
    }

}
