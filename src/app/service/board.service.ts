import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BoardModel } from '../model/board.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  readonly ROOT_URL = 'http://localhost:8080/board';

  constructor(private http: HttpClient) { }

  createBoard(): Observable<BoardModel>{
    return this.http.post<BoardModel>(this.ROOT_URL + '/create', null);
  }

  getBoard(): Observable<BoardModel>{
    return this.http.get<BoardModel>(this.ROOT_URL + '/1');
  }
}
