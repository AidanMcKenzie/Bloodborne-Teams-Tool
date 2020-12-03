import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { charactersArray } from '../test-characters';
import { CharacterService } from '../character.service';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  thisCharactersVariable: Character[];

  teamA: Character[];

  teamB: Character[];

  teamC: Character[];

  
  constructor(private characterService: CharacterService) { }

  // On launch
  ngOnInit(): void {
    this.getTeams();
  }

  // Get characters from character service
  getCharacters(): void {
    this.getTeams();
  }

  getTeams(): void {

    /*let teamArray = [this.teamA, this.teamB, this.teamC];

    for (let i = 0; i < teamArray.length; i++) {
      this.characterService.getCharacters()
      .subscribe(characters => teamArray[i] = characters.splice(0,3));
    }*/

    this.characterService.getCharacters()
      .subscribe(characters => this.teamA = characters.splice(0,3));

      this.characterService.getCharacters()
      .subscribe(characters => this.teamB = characters.splice(0,2));

      this.characterService.getCharacters()
      .subscribe(characters => this.teamC = characters.splice(0,2));
  }
}
