import { Component, OnInit } from '@angular/core';
import { Board } from '../models/board.model';
import { Router } from '@angular/router';
// import { BoardService } from '../board.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  boards: FirebaseListObservable<any[]>;

  selectedBoard = null;

  createNewBoard(board) {
    this.boards.push(board);
  }

  constructor() { }

  ngOnInit() {
  }

}
