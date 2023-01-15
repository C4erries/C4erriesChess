export default class Piece {
  constructor(player, iconUrl) {
    this.player = player;
    this.style = {
      backgroundImage: "url('" + iconUrl + "')",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: '100% 100%'
    };
  }

  getPlayer() {
    return this.player
  }
}