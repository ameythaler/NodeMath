const CORNER_RADIUS = 5;

class BasicNode {
  constructor(inLinks, outLinks) {
    this.location = new Point(0, 0);
    this.size = new Point(100, 40);
    this.inLinks = inLinks;
    this.outLinks = outLinks;
    this.fillColor = 'rgb(255, 255, 255)';
    this.bodyShape = new Path2D();
    this.bodyShape.rect(this.location.x - this.size.x / 2 + CORNER_RADIUS,
      this.location.y - this.size.y / 2 + CORNER_RADIUS,
      this.location.x + this.size.x / 2 - CORNER_RADIUS,
      this.location.y + this.size.y / 2 - CORNER_RADIUS);
  }

  draw(context) {
    // Loop through links and queue them up for drawing.
    context.fill(this.bodyShape);
  }
}
