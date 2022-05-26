import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameInfoService } from '../services/game-info.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-info-game',
  templateUrl: './info-game.component.html',
  styleUrls: ['./info-game.component.css'],
})
export class InfoGameComponent implements OnInit {
  spinner=true;
  id: number;
  title?: string;
  description?: string;
  imgUrl?: string;
  os?: string;
  processor?: string;
  memory?: string;
  storage?: string;
  graphics?: string;
  img:any[]=[];

  game_url?: string;
  genre?: string;
  platform?: string;
  publisher?: string;
  developer?: string;
  release_date?: string;
  freetogame_profile_url?: string;


  constructor(
    private serviceGameInfo: UsuarioService,
    private route: ActivatedRoute
  ) {
    this.id = +route.snapshot.paramMap.get('valor')!;
  }

  ngOnInit(): void {
   
    this.serviceGameInfo.getGameInfo(this.id).subscribe((data) => {
      this.spinner=false;
      this.title = data.title;
      this.description = data.description;
      this.imgUrl = data.thumbnail;
      this.os = data.minimum_system_requirements.os;
      this.processor = data.minimum_system_requirements.processor;
      this.memory = data.minimum_system_requirements.memory;
      this.graphics = data.minimum_system_requirements.graphics;
      this.storage = data.minimum_system_requirements.storage;
      this.img=data.screenshots;

      this.game_url=data.game_url;
      this.genre=data.genre;
      this.platform=data.platform;
      this.publisher=data.publisher;
      this.developer=data.developer;
      this.release_date=data.release_date;
      this.freetogame_profile_url=data.freetogame_profile_url;
      
   
    
    });
  }
}
