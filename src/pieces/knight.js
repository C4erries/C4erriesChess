import Piece from './piece.js';
import { isSameRow } from '../helpers'
import {skin} from "./skinChanger";
const skins = skin
const png1 = '/static/media/Agnes.8ea51d0f.png'
export default class Knight extends Piece {
  constructor(player) {
    super(player, (player === 1 ? (skins === 1 ? png1  :"https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg") : "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg"));
  }

  isMovePossible(src, dest) {
    return ((src - 17 === dest && !isSameRow(src, dest)) ||
      (src - 10 === dest && !isSameRow(src, dest)) ||
      (src + 6 === dest && !isSameRow(src, dest)) ||
      (src + 15 === dest && !isSameRow(src, dest)) ||
      (src - 15 === dest && !isSameRow(src, dest)) ||
      (src - 6 === dest && !isSameRow(src, dest)) ||
      (src + 10 === dest && !isSameRow(src, dest)) ||
      (src + 17 === dest && !isSameRow(src, dest)))
  }

  /**
   * always returns empty array because of jumping
   * @return {[]}
   */
  getSrcToDestPath() {
    return [];
  }
}
