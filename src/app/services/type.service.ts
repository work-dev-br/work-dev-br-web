import { Injectable } from '@angular/core';

import { Type } from '../models/type.model'

@Injectable({
    providedIn: 'root'
})
export class TypeService {
    private types: Type[] = []

    constructor() { 
        this.addType("tools", "Ferramentas", "plumbing")
        this.addType("tips", "Dicas", "online_prediction")
        this.addType("projects", "Projetos", "phone_android")
        this.addType("varieties", "Variedades", "language")
    }

    private addType(name: string, title: string, icon: string): void {
        this.types.push({ name, title, icon })
    }

    public getTypes(): Type[] {
        return this.types
    }

    public getType(name: string): Type {
        let t: Type = undefined
        for (let type of this.types) {
            if ( type.name == name ) { t = type }
        }
        return t
    }
}
