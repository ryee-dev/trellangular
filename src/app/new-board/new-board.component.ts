import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Board } from '../models/board.model';

@Component({
  selector: 'app-new-board',
  templateUrl: './new-board.component.html',
  styleUrls: ['./new-board.component.css']
})
export class NewBoardComponent implements OnInit {
  @Output() sendCreateBoardList = new EventEmitter();
  showForm = null;

  finishAddingBoard(title: string, color: string, shared: boolean, starred: boolean) {
    const newBoard = new Board();
    this.sendCreateBoardList.emit(newBoard);
    this.showForm = null;
  }

  clickedCreate() {
    this.showForm = true;
  }

  clickedExit() {
    this.showForm = null;
  }

  constructor() { }

  ngOnInit() {
  }

}
