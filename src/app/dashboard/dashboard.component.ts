import { Component, OnInit } from '@angular/core';
import { Board } from '../models/board.model';
import { Router } from '@angular/router';
import { BoardService } from '../services/board.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [BoardService]
})
export class DashboardComponent implements OnInit {
  boards: FirebaseListObservable<any[]>;

  // selectedBoard = null;

  createNewBoard(board) {
    this.boards.push(board);
  }

  constructor(private router: Router, private boardService: BoardService) { }

  ngOnInit() {
    this.boards = this.boardService.getBoards();
  }

}
