import { Component } from '@angular/core';

@Component({
  //selector: 'characters',
  templateUrl: './main-page.component.html'
  //styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  public pageTitle = 'Main Page';
  characters: any[] = [
    {
      "characterId": 1,
      "name": "AM's Character",
      "player": "AM",
      "imageUrl": "assets/images/test.png"
    },
    {
      "characterId": 2,
      "name": "MB's Character",
      "player": "MB",
      "imageUrl": "assets/images/test.png"
    }
  ];
}
