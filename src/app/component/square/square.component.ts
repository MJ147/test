import { Component, OnInit, Input, Output } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { Game } from 'src/app/model/game.model';
import { BoardComponent } from '../board/board.component';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent{

  @Input()
  game: Game;
  @Input() 
  squareNumber: number;
  @Input() 
  squareValue: number;

  constructor(private httpService: HttpService, private boardComponent: BoardComponent) {}

  convertToText(): string {
    if(this.squareValue === 0) {
      return "";
    } else {
      return (this.squareValue === 1) ? "X" : "O"; 
    }
  }

  makeMove(): void {
    this.httpService.makeMove(this.game, this.squareNumber).subscribe( game => {
      this.game = game;
      console.log(game);
    });
    console.log(this.game.id);
    this.boardComponent.getGame(this.game.id);
    console.log(this.game);
  }
}
