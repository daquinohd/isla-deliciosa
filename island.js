const width = 1100;
const height = 850;

var _meep;

window.onload = function () {
  _meep = meep();
  _meep.init();
};

document.addEventListener('keydown', k => {
  switch (k.key) {
    case 'ArrowLeft':
      _meep.moveLeft();
      break;
    case 'ArrowRight':
      _meep.moveRight();
      break;
    case 'ArrowUp':
      _meep.moveUp();
      break;
    case 'ArrowDown':
      _meep.moveDown();
      break;
    case 'R':
      _meep.init();
      break;
  }
});

var meep = function () {
  const canvas = document.getElementById("islandCanvas");
  const img = document.getElementById("mep");

  let ctx = canvas.getContext("2d");
  let x = -1;
  let y = -1;
  let n = 0;

  function init() {
    this.x = 0;
    this.y = 0;
    this.n = 5;
    draw(img, this.x, this.y);
    return;
  }

  function moveLeft() {
    this.x = this.x < this.n ? 0 : this.x - this.n;
    draw(img, this.x, this.y);
    return;
  }

  function moveRight() {
    this.x = this.x > width ? (width - (75 / 2)) : this.x + this.n;
    draw(img, this.x, this.y);
    return;
  }

  function moveUp() {
    this.y = this.y < this.n ? 0 : this.y - this.n;
    draw(img, this.x, this.y);
    return;
  }

  function moveDown() {
    this.y = this.y > height ? (height - (75 / 2)) : this.y + this.n;
    draw(img, this.x, this.y);
    return;
  }

  var draw = function (img, x, y) {
    ctx.reset();
    ctx.drawImage(img, x, y);
  }

  return {
    init: init,
    moveLeft: moveLeft,
    moveRight: moveRight,
    moveUp: moveUp,
    moveDown: moveDown,
  };
}
