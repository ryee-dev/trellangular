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

  selectedBoard = null;
  showForm = null;
  parentBoardList: Board[] = [
    new Board('Welcome Board', '#42a35f', true, false)
  ];



  createNewBoard(board) {
    this.parentBoardList.push(board);
  }

  constructor() { }

  ngOnInit() {
  }

}
