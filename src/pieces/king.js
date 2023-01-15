import Piece from './piece.js';
import { isSameDiagonal, isSameRow } from '../helpers'
import {skin} from "./skinChanger";
let skins = skin
const png1 = '/static/media/Young_gru.7d1568a0.png'
const png2 = '/static/media/Perez.4e22c401.png'
export default class King extends Piece {
  constructor(player) {
    super(player, (player === 1 ? (skins === 1 ? png1  :"https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg") : (skins === 1 ? png2 :"https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg")));
  }

  isMovePossible(src, dest) {
    return ((src - 9 === dest && isSameDiagonal(src, dest)) ||
      src - 8 === dest ||
      (src - 7 === dest && isSameDiagonal(src, dest)) ||
      (src + 1 === dest && isSameRow(src, dest)) ||
      (src + 9 === dest && isSameDiagonal(src, dest)) ||
      src + 8 === dest ||
      (src + 7 === dest && isSameDiagonal(src, dest)) ||
      (src - 1 === dest && isSameRow(src, dest)))
  }

  /**
   * always returns empty array because of one step
   * @return {[]}
   */
  getSrcToDestPath(src, dest) {
    return [];
  }
}
