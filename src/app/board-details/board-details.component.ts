import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Board } from '../models/board.model';
import { BoardService } from '../services/board.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-board-details',
  templateUrl: './board-details.component.html',
  styleUrls: ['./board-details.component.css'],
  providers: [BoardService]
})
export class BoardDetailsComponent implements OnInit {
  boardId: number;
  boardToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private boardService: BoardService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.boardId = urlParameters['id'];
    });
    this.boardToDisplay = this.boardService.getBoardId(this.boardId);
  }

}
