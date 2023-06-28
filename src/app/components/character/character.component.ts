import { Component, Input } from '@angular/core';
import { Character } from "../../models/character.model";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {
  @Input() public character!: Character;
}
