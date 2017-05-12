const HORIZONTAL_LAYOUT = 0;
const VERTICAL_LAYOUT = 1;
const USE_LAYOUT = HORIZONTAL_LAYOUT;

class Point {
  constructor(x, y) {
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

class Link {
  constructor() {
    this.connector = null;
  }
}

const CORNER_RADIUS = 5;

class BasicNode {
  constructor(inLinks, outLinks) {
    this.location = new Point(200, 200);
    //this.location.x = 200;
    this.size = new Point(100, 40);
    this.inLinks = inLinks;
    this.outLinks = outLinks;
    this.fillColor = 'rgb(0, 200, 0)';
    this.strokeColor = 'rgb(0, 0, 0)';
    this.bodyShape = new Path2D();
    this.bodyShape.rect(this.location.x - this.size.x / 2
      , this.location.y - this.size.y / 2 + CORNER_RADIUS
      , this.size.x
      , this.size.y - 2 * CORNER_RADIUS);
    this.bodyShape.rect(this.location.x - this.size.x / 2 + CORNER_RADIUS
      , this.location.y - this.size.y / 2
      , this.size.x - 2 * CORNER_RADIUS
      , this.size.y);
    this.bodyShape.moveTo(this.location.x - this.size.x / 2 + CORNER_RADIUS
      , this.location.y - this.size.y / 2 + CORNER_RADIUS);
    this.bodyShape.arc(this.location.x - this.size.x / 2 + CORNER_RADIUS
      , this.location.y - this.size.y / 2 + CORNER_RADIUS
      , CORNER_RADIUS, 0, 2 * Math.PI);
    this.bodyShape.arc(this.location.x + this.size.x / 2 - CORNER_RADIUS
      , this.location.y - this.size.y / 2 + CORNER_RADIUS
      , CORNER_RADIUS, 0, 2 * Math.PI);
    this.bodyShape.moveTo(this.location.x - this.size.x / 2 + CORNER_RADIUS
      , this.location.y + this.size.y / 2 - CORNER_RADIUS);
    this.bodyShape.arc(this.location.x - this.size.x / 2 + CORNER_RADIUS
      , this.location.y + this.size.y / 2 - CORNER_RADIUS
      , CORNER_RADIUS, 0, 2 * Math.PI);
    this.bodyShape.arc(this.location.x + this.size.x / 2 - CORNER_RADIUS
      , this.location.y + this.size.y / 2 - CORNER_RADIUS
      , CORNER_RADIUS, 0, 2 * Math.PI);

    this.outlineShape = new Path2D();
    this.outlineShape.moveTo(this.location.x - this.size.x / 2 + CORNER_RADIUS
      , this.location.y - this.size.y / 2);
    this.outlineShape.lineTo(this.location.x + this.size.x / 2 - CORNER_RADIUS
      , this.location.y - this.size.y / 2);
    this.outlineShape.arc(this.location.x + this.size.x / 2 - CORNER_RADIUS
      , this.location.y - this.size.y / 2 + CORNER_RADIUS
      , CORNER_RADIUS, Math.PI * 1.5, Math.PI * 2);
    this.outlineShape.lineTo(this.location.x + this.size.x / 2
      , this.location.y + this.size.y / 2 - CORNER_RADIUS);
  }

  draw(context) {
    // Loop through links and queue them up for drawing.
    context.fillStyle = this.fillColor;
    context.fill(this.bodyShape);
    context.strokeStyle = this.strokeColor;
    context.stroke(this.outlineShape);
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
  var testNode = new BasicNode(null, null);
  testNode.draw(mainContext);
  console.log("Test");
}

