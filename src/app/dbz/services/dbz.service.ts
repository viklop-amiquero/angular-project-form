import { Injectable } from '@angular/core'
import { Character } from '../interfaces/character.interface'
import { v4 as uuid } from 'uuid'

@Injectable({
    providedIn: 'root'
})

export class DbzService {

    constructor() { }

    public characters: Character[] = [
        {
            id: uuid(),
            name: 'trunk',
            power: 20
        },
        {
            id: uuid(),
            name: 'goku',
            power: 20
        },
        {
            id: uuid(),
            name: 'vegeta',
            power: 20
        },
        {
            id: uuid(),
            name: 'bulma',
            power: 20
        },

    ]

    deleteCharacterById(id: string): void {
        this.characters = this.characters.filter(character => character.id !== id)
    }

    addCharacter(character: Character): void {
        const newCharacter = { ...character, id: uuid() }
        this.characters.push(newCharacter)
        console.log(newCharacter)
        // this.characters = [...this.characters, character]
    }


}
