import { Board } from './models/board.model';

export const BOARDS: Board[] = [
  new Board('To-Do Board', 'green', true, false, 1),
  new Board('Wish-List', 'blue', false, true, 2),
  new Board('Shopping List', 'brown', false,false, 3)
];
