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

  character: Character = {
    id: 1,
    name: 'AMs character',
    player: 'AM',
    imageUrl: 'blank'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
