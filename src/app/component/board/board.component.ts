import { Component, OnInit, Input } from '@angular/core';
import { BoardModel } from '../../model/board.model';
import { Observable } from 'rxjs';
import { BoardService } from 'src/app/service/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit{

  @Input()
  isShowBoard;

  squares = Array(9)

  board$: Observable<BoardModel>;

  constructor(private boardService: BoardService) { }

  ngOnInit(): void {
    this.board$ = this.boardService.createBoard();
  }

  getBoard() {
    this.board$ = this.boardService.getBoard();
  }

}
