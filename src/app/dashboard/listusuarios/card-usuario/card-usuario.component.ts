import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-card-usuario',
  templateUrl: './card-usuario.component.html',
  styleUrls: ['./card-usuario.component.css'],
})
export class CardUsuarioComponent implements OnInit {
  img = 'https://avatars.githubusercontent.com/u/70980484?v=4';
  @Input() juegos: any;
  id?:string;
  imgUrl?:string;
  name?: string;
  short_description?: string;
  urlJuego?:string;
  desarrollador?:string;
  pageOfficial?:string;
  genero?:string;
  constructor(private router:Router) {
   
 
  }

  ngOnInit(): void {
    this.name = this.juegos.title;
    this.short_description = this.juegos.short_description;
    this.urlJuego= this.juegos.freetogame_profile_url;
    this.pageOfficial=this.juegos.game_url;
    this.imgUrl=this.juegos.thumbnail;
    this.desarrollador=this.juegos.developer;
    this.genero=this.juegos.genre;
    this.id=this.juegos.id
  }
  // infoGame(){
  //   this.router.navigate(['info',this.id])
  // }
}
