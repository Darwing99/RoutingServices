import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-listusuarios',
  templateUrl: './listusuarios.component.html',
  styleUrls: ['./listusuarios.component.css']
})
export class ListusuariosComponent implements OnInit {
  spinner=true;
list:any[]=[]
  constructor(private service:UsuarioService) {  this.getGames(); }
  ngOnInit(): void {
    this.getGames();
  }


  getGames(){
  
    this.service.getUser().subscribe((datos)=>{
     
      this.list=datos;
     this.spinner=false;

    })
  }

}
