import { Component, OnInit, Input } from '@angular/core';

import { Theme } from '../../models/theme.model'

import { ThemeService } from '../../services/theme.service'

@Component({
    selector: 'app-theme-folder',
    templateUrl: './theme-folder.component.html',
    styleUrls: ['./theme-folder.component.css'],
    providers: [ 
        ThemeService, 
    ]          
})
export class ThemeFolderComponent implements OnInit {
    public theme: Theme
    public hiddenBadge: boolean = false

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
    }

}
