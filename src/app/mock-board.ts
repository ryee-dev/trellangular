import { Board } from './models/board.model';

export const BOARDS: Board[] = [
  new Board('To-Do Board', 'green', true, false),
  new Board('Wish-List', 'blue', false, true),
  new Board('Shopping List', 'brown', false,false)
];
