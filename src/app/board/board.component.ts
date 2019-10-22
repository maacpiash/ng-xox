import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares: any[];
  xIsNext: boolean;
  winner: string;

  constructor() { }

  ngOnInit() {
    this.newGame();
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(idx: number) {
    if (!this.squares[idx]) {
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }

    this.winner = this.calculateWinner(idx);
  }

  calculateWinner(i: number) {
    const lines = [
      [[0, 1, 2], [0, 3, 6], [0, 4, 8]],
      [[0, 1, 2], [1, 4, 7]],
      [[0, 1, 2], [2, 5, 8], [2, 4, 6]],
      [[3, 4, 5], [0, 3, 6]],
      [[3, 4, 5], [1, 4, 7], [0, 4, 8], [2, 4, 6]],
      [[3, 4, 5], [2, 5, 8]],
      [[6, 7, 8], [0, 3, 6], [2, 4, 6]],
      [[6, 7, 8], [1, 4, 7]],
      [[6, 7, 8], [2, 5, 8], [0, 4, 8]]
    ];

    for (const line of lines[i]) {
      const [a, b, c] = line;
      if (this.squares[a] && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c]) {
        return this.squares[a];
      }
    }
    return null;
  }

}
