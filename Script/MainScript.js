const HORIZONTAL_LAYOUT = 0;
const VERTICAL_LAYOUT = 1;
const USE_LAYOUT = HORIZONTAL_LAYOUT;

class Point {
  construct(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Connector {
  constructor() {
    this.inLink = null;
    this.outLink = null;
  }
}


class BasicNode {
  constructor(inLinks, outLinks) {
    this.location = new Point(0, 0);
    this.size = new Point(100, 40);
    this.inLinks = inLinks;
    this.outLinks = outLinks;
  }

  function draw(context) {

  }
}

 /*
  * Global Variables
  */
var mainCanvas;
var mainContext;

/*
 * Global functions
 */
function startNodes(mainCanvasName) {
  mainCanvas = document.getElementById(mainCanvasName);
  mainContext = mainCanvas.getContext("2d");
}

