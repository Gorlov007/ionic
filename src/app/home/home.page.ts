import { Component } from '@angular/core';

interface Game{
  name: string
  rating: number
  src: string
}

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
  games:Game[]= [
    {name:"The Elder Scrolls IV: Oblivion", rating:5, src:"/assets/images/ico.png"},
    {name:"The Elder Scrolls V: Skyrim", rating:4.5, src:"/assets/images/kat.png"},
    {name:"Hitman: Blood Money", rating:10, src:"/assets/images/world.png"}
  ]
}
