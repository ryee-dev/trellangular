import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Board } from '../models/board.model';
import { BoardService } from '../services/board.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-board',
  templateUrl: './new-board.component.html',
  styleUrls: ['./new-board.component.css'],
  providers: [BoardService]
})
export class NewBoardComponent implements OnInit {
  @Output() sendCreateBoardList = new EventEmitter();
  showForm = null;

  finishAddingBoard(title: string, color: string, shared: boolean, starred: boolean) {
    const newBoard = new Board(title, color, shared, starred);
    this.boardService.addBoard(newBoard);
    this.showForm = null;
  }

  clickedCreate() {
    this.showForm = true;
  }

  clickedExit() {
    this.showForm = null;
  }

  constructor(private router: Router, private boardService: BoardService) { }

  ngOnInit() {
  }

}
