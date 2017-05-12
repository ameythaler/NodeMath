const CORNER_RADIUS = 5;
const LINK_SIZE_X = 10;
const LINK_SIZE_Y = 10;
const LINK_SPACE = 5;
const MIN_NODE_X = 100;
const MIN_NODE_Y = 50;

class BasicNode {
  constructor(inLinks, outLinks) {
    this.location = new Point(200, 200);
    //this.location.x = 200;
    this.size = new Point(MIN_NODE_X, MIN_NODE_Y);
    this.inLinks = inLinks;
    this.outLinks = outLinks;
    this.fillColor = 'rgb(0, 0, 200)';
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
    this.outlineShape.arc(this.location.x + this.size.x / 2 - CORNER_RADIUS
      , this.location.y + this.size.y / 2 - CORNER_RADIUS
      , CORNER_RADIUS, 0, Math.PI * 0.5);
    this.outlineShape.lineTo(this.location.x - this.size.x / 2 + CORNER_RADIUS
      , this.location.y + this.size.y / 2);
    this.outlineShape.arc(this.location.x - this.size.x / 2 + CORNER_RADIUS
      , this.location.y + this.size.y / 2 - CORNER_RADIUS
      , CORNER_RADIUS, Math.PI * 0.5, Math.PI);
    this.outlineShape.lineTo(this.location.x - this.size.x / 2
      , this.location.y - this.size.y / 2 + CORNER_RADIUS);
    this.outlineShape.arc(this.location.x - this.size.x / 2 + CORNER_RADIUS
      , this.location.y - this.size.y / 2 + CORNER_RADIUS
      , CORNER_RADIUS, Math.PI, Math.PI * 1.5);
  }

  draw(context) {
    // Loop through links and queue them up for drawing.
    context.fillStyle = this.fillColor;
    context.fill(this.bodyShape);
    context.strokeStyle = this.strokeColor;
    context.stroke(this.outlineShape);
  }
}
