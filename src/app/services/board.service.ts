import { Injectable } from '@angular/core';
import { Board } from '../models/board.model';
// import { BOARDS } from '../mock-board';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class BoardService {
  boards: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.boards = database.list('boards');
  }

  getBoards() {
    return this.boards;
  }

  addBoard(newBoard: Board) {
    this.boards.push(newBoard);
  }

  getBoardId(boardId: number) {
    return this.database.object('boards/' + boardId);
  }

}
