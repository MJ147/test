import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../model/game.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  readonly ROOT_URL = 'http://localhost:8080/game';

  constructor(private http: HttpClient) { }

  createGame(): Observable<Game>{
    return this.http.post<Game>(this.ROOT_URL + '/create', null);
  }

  makeMove(game: Game, squareNumber: Number): Observable<Game>{
    return this.http.put<Game>(this.ROOT_URL + '/make-move/' + squareNumber, game);
  }

  // updateBoard(board: Board): void{
  //   this.http.put<Board>(this.ROOT_URL + '/update', board);
  // }

  getGame(gameId: number): Observable<Game>{
    return this.http.get<Game>(this.ROOT_URL + '/get/' + gameId);
  }
}
