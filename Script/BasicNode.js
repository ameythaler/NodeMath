class BasicNode {
  constructor(inLinks, outLinks) {
    this.location = new Point(0, 0);
    this.size = new Point(100, 40);
    this.inLinks = inLinks;
    this.outLinks = outLinks;
    this.fillColor = 'rgb(255, 255, 255)';
    this.bodyShape = new Path2D();
    this.bodyShape.rect(10, 10, 50, 50);
  }

  draw(context) {
    context.fill(this.bodyShape);
  }
}
