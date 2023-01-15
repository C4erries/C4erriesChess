import Piece from './piece.js';
import { isSameDiagonal } from '../helpers'
import {skin} from "./skinChanger";
let skins = skin
const png2 = 'data:image/png;base64,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'
const png1 = 'data:image/png;base64,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'
export default class Pawn extends Piece {
  constructor(player) {
    super(player, (player === 1 ? (skins === 1 ? png1 :'https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg') : ( skins === 1 ? png2:"https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg")));
    this.initialPositions = {
      1: [48, 49, 50, 51, 52, 53, 54, 55],
      2: [8, 9, 10, 11, 12, 13, 14, 15]
    }
  }

  isMovePossible(src, dest, isDestEnemyOccupied) {

    if (this.player === 1) {
      if ((dest === src - 8 && !isDestEnemyOccupied) || (dest === src - 16 && !isDestEnemyOccupied && this.initialPositions[1].indexOf(src) !== -1)) {
        return true;
      }
      else if (isDestEnemyOccupied && isSameDiagonal(src, dest) && (dest === src - 9 || dest === src - 7)) {
        return true;
      }
    }
    else if (this.player === 2) {
      if ((dest === src + 8 && !isDestEnemyOccupied) || (dest === src + 16 && !isDestEnemyOccupied && this.initialPositions[2].indexOf(src) !== -1)) {
        return true;
      }
      else if (isDestEnemyOccupied && isSameDiagonal(src, dest) && (dest === src + 9 || dest === src + 7)) {
        return true;
      }
    }
    return false;
  }

  getSrcToDestPath(src, dest) {
    if (dest === src - 16) {
      return [src - 8];
    }
    else if (dest === src + 16) {
      return [src + 8];
    }
    return [];
  }
}
