import { Component, OnInit } from '@angular/core';
import { CharacterService } from "./services/character.service";
import { Character } from "./models/character.model";
import { Wrapper } from "./models/wrapper.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public characterList!: Character[];

  constructor(
    private _characterService: CharacterService
  ) { }

  public ngOnInit(): void {
    this._characterService.getCharacters()
      .subscribe((data: Wrapper<Character>): void => {
        console.log(data);
        this.characterList = data.results;
      });
  }
}
