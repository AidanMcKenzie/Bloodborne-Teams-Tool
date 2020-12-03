import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Character } from './character';
import { charactersArray } from './test-characters';

@Injectable({
  providedIn: 'root',
})

// Character service grabs characters from JSON file for use elsewhere in the app
export class CharacterService {

  constructor() { }

  getCharacters(): Observable<Character[]> {

    let newVar = this.shuffleCharacters(charactersArray);

    return of(newVar);
  }

  // Shuffle the array of characters
  shuffleCharacters(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  
  splitTeams(characters, teams_count: number) {
    let teams: Character[] = [];
    while (teams_count > 0) {
      teams.push(characters.splice(0, Math.floor(characters.length/teams_count)))
      teams_count--;
    }

    return of(teams);
  }
}