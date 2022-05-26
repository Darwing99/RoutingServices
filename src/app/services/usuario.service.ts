import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  header?:any;
  url = '/api/games';
  constructor(private http: HttpClient) {}
  getUser(): Observable<any> {
    this.header = new HttpHeaders();
   this.header.append('','');
    this.header.append('X-RapidAPI-Host', 'free-to-play-games-database.p.rapidapi.com');
    this.header.append( 'X-RapidAPI-Key', 'e9cbd56cadmshb3428fe48c8cf5cp1ef2b1jsnfe50438b6b6b');
    return this.http.get<any>(this.url,this.header);
  }
  getGameInfo(id:number): Observable<any> {
    
    this.url = '/api/game?id=%'+id;
    return this.http.get(this.url);
  }
}
