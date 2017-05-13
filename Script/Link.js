const LINK_SIZE_X = 10;
const LINK_SIZE_Y = 10;

class Link {
  constructor(location, parent) {
    this.parent = parent;
    this.connector = null;
    this.location = location;
    this.fillColor = 'rgb(0, 255, 0)';

    this.bodyShape = new Path2D();

    this.bodyShape.moveTo(-LINK_SIZE_X / 2
      , -LINK_SIZE_Y / 2);
    this.bodyShape.lineTo(0, -LINK_SIZE_Y / 2);
    this.bodyShape.lineTo(LINK_SIZE_X / 2, 0);
    this.bodyShape.lineTo(0, LINK_SIZE_Y / 2);
    this.bodyShape.lineTo(-LINK_SIZE_X / 2
      , LINK_SIZE_Y / 2);
    this.bodyShape.closePath();
  }

  draw(context) {
    context.save();
    context.translate(this.location.x, this.location.y);
    context.fillStyle = this.fillColor;
    context.fill(this.bodyShape);
    context.restore();
  }
}
