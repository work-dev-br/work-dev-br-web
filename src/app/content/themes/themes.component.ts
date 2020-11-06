import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { Type } from '../../models/type.model'
import { Theme } from '../../models/theme.model'

import { TypeService } from '../../services/type.service'
import { ThemeService } from '../../services/theme.service'

@Component({
    selector: 'app-themes',
    templateUrl: './themes.component.html',
    styleUrls: ['./themes.component.css'],
    providers: [ 
        TypeService, 
        ThemeService, 
    ]    
})
export class ThemesComponent implements OnInit {
    public parmType: string
    public type: Type
    public themes: Theme[] = []

    constructor( 
        private route: ActivatedRoute,
        private typeService: TypeService, 
        private themeService: ThemeService, 
    ) { }

    ngOnInit(): void {
    }

    ngDoCheck(): void {
        this.parmType = this.route.snapshot.paramMap.get("type")
        this.type = this.typeService.getType(this.parmType)
        this.themes = this.themeService.getThemesOfType(this.parmType)
    }

}
