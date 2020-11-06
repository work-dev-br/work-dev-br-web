import { Injectable } from '@angular/core';

import { Type } from '../models/type.model'

@Injectable({
    providedIn: 'root'
})
export class TypeService {
    private types: Type[] = []

    constructor() { 
        this.addType("tools", "Ferramentas")
        this.addType("tips", "Dicas")
        this.addType("projects", "Projetos")
        this.addType("varieties", "Variedades")
    }

    private addType(name: string, title: string): void {
        this.types.push({ name, title })
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
