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


    /* ################# acertar ###############*/
    public parmType: string = "tools"


    constructor(
        private themeService: ThemeService,         
    ) { }

    @Input() parmTheme: string 

    ngOnInit(): void {
    }

    ngDoCheck(): void {
        this.theme = this.themeService.getTheme(this.parmTheme)
    }

}
