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
    this.getCharacters();
  }

  // Get characters from character service
  getCharacters(): void {
    this.characterService.getCharacters()
        .subscribe(characters => this.thisCharactersVariable = characters);
  }

  getShuffled(): void {
    this.characterService.splitTeams(charactersArray, 3)
      .subscribe(characters => this.thisCharactersVariable = characters);
  }

  getTeamA(): void {
    this.characterService.splitTeams(charactersArray, 3)
      .subscribe(characters => this.teamA = characters);
  }

  getTeamB(): void {
    this.characterService.splitTeams(charactersArray, 3)
      .subscribe(characters => this.thisCharactersVariable = characters);
  }
}
