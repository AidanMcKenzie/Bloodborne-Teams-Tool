import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { CHARACTERS } from '../test-characters';



@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters = CHARACTERS;

  


  constructor() { }

  ngOnInit(): void {
  }

  generateTeams(): void {

  }
}
