import { Component, OnInit, Input } from '@angular/core';

import { Type } from '../../models/type.model'

import { TypeService } from '../../services/type.service'

@Component({
    selector: 'app-button-type',
    templateUrl: './button-type.component.html',
    styleUrls: ['./button-type.component.css'],
    providers: [ 
        TypeService, 
    ]
})
export class ButtonTypeComponent implements OnInit {
    public type: Type 

    constructor(
        private typeService: TypeService, 
    ) { }

    @Input() parmType: string

    ngOnInit(): void {
    }

    ngDoCheck(): void {
        console.log("ButtonType> type: " + this.parmType)
        this.type = this.typeService.getType(this.parmType)
    }

}
