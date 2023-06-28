import { Character } from "../models/character.model";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Wrapper } from "../models/wrapper.model";

@Injectable()
export class CharacterService {
  constructor(private http: HttpClient) { }

  public getCharacters(): Observable<Wrapper<Character>> {
    return this.http.get<Wrapper<Character>>('https://rickandmortyapi.com/api/character');
  }

  public getCharacter(characterId: number): Observable<Character> {
    return this.http.get<Character>(`https://rickandmortyapi.com/api/character/${characterId}`);
  }
}
