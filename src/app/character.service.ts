import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Character } from './character';
import { charactersArray } from './characters-list';

@Injectable({
  providedIn: 'root',
})

// Character service grabs characters from JSON file for use elsewhere in the app
export class CharacterService {

  constructor() { }

  // Accessed by Characters component
  getCharacters(): Observable<Character[]> {
    let shuffledCharacters = this.shuffleCharacters(charactersArray);
    return of(shuffledCharacters);
  }

  getTeamA(): Character[] {
    let shuffledCharacters = this.shuffleCharacters(charactersArray);
    return shuffledCharacters;
  }

  // Shuffle the array of characters
  shuffleCharacters(arrayOfCharacters) {
    let currentIndex = arrayOfCharacters.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = arrayOfCharacters[currentIndex];
      arrayOfCharacters[currentIndex] = arrayOfCharacters[randomIndex];
      arrayOfCharacters[randomIndex] = temporaryValue;
    }
  
    return arrayOfCharacters;
  }


  splitTeams(arrayOfCharacters, teams_count: number) {
    let teams = [];
    while (teams_count > 0) {
      teams.push(arrayOfCharacters.splice(0, Math.floor(arrayOfCharacters.length/teams_count)))
      teams_count--;
    }

    return of(teams);
  }
}