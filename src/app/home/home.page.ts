import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}
  mayname:string = "Павел!"
  press_me(){
  this.mayname = this.mayname + "!"
  }
  books: string[]=["Поваренная книга анархиста","Бойцовский клуб"]
}
