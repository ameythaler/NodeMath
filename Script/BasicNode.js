const CORNER_RADIUS = 5;
const LINK_SPACE = 5;
const MIN_NODE_X = 100;
const MIN_NODE_Y = 50;

class BasicNode {
  constructor(inLinks, outLinks) {
    this.location = new Point(200, 200);

    var inLinksSize = 0;
    if(inLinks != null) {
      inLinksSize = inLinks.length;
    }

    var outLinksSize = 0;
    if(outLinks != null) {
      outLinksSize = outLinks.length;
    }

    var maxInY = inLinksSize * LINK_SIZE_Y + (inLinksSize + 1) * LINK_SPACE;
    var maxOutY = outLinksSize * LINK_SIZE_Y + (outLinksSize + 1) * LINK_SPACE;
    var maxY = Math.max(Math.max(maxInY, MIN_NODE_Y), maxOutY);
    this.size = new Point(MIN_NODE_X, maxY);

    this.fillColor = 'rgb(0, 0, 200)';
    this.strokeColor = 'rgb(0, 0, 0)';
    this.bodyShape = new Path2D();
    this.bodyShape.rect(-this.size.x / 2, -this.size.y / 2 + CORNER_RADIUS
      , this.size.x, this.size.y - 2 * CORNER_RADIUS);
    this.bodyShape.rect(-this.size.x / 2 + CORNER_RADIUS, -this.size.y / 2
      , this.size.x - 2 * CORNER_RADIUS, this.size.y);
    this.bodyShape.moveTo(-this.size.x / 2 + CORNER_RADIUS, -this.size.y / 2 + CORNER_RADIUS);
    this.bodyShape.arc(-this.size.x / 2 + CORNER_RADIUS, -this.size.y / 2 + CORNER_RADIUS
      , CORNER_RADIUS, 0, 2 * Math.PI);
    this.bodyShape.arc(this.size.x / 2 - CORNER_RADIUS, -this.size.y / 2 + CORNER_RADIUS
      , CORNER_RADIUS, 0, 2 * Math.PI);
    this.bodyShape.moveTo(-this.size.x / 2 + CORNER_RADIUS, this.size.y / 2 - CORNER_RADIUS);
    this.bodyShape.arc(-this.size.x / 2 + CORNER_RADIUS, this.size.y / 2 - CORNER_RADIUS
      , CORNER_RADIUS, 0, 2 * Math.PI);
    this.bodyShape.arc(this.size.x / 2 - CORNER_RADIUS, this.size.y / 2 - CORNER_RADIUS
      , CORNER_RADIUS, 0, 2 * Math.PI);

    this.outlineShape = new Path2D();
    this.outlineShape.moveTo(-this.size.x / 2 + CORNER_RADIUS, -this.size.y / 2);
    this.outlineShape.lineTo(this.size.x / 2 - CORNER_RADIUS, -this.size.y / 2);
    this.outlineShape.arc(this.size.x / 2 - CORNER_RADIUS, -this.size.y / 2 + CORNER_RADIUS
      , CORNER_RADIUS, Math.PI * 1.5, Math.PI * 2);
    this.outlineShape.lineTo(this.size.x / 2, this.size.y / 2 - CORNER_RADIUS);
    this.outlineShape.arc(this.size.x / 2 - CORNER_RADIUS, this.size.y / 2 - CORNER_RADIUS
      , CORNER_RADIUS, 0, Math.PI * 0.5);
    this.outlineShape.lineTo(-this.size.x / 2 + CORNER_RADIUS, this.size.y / 2);
    this.outlineShape.arc(-this.size.x / 2 + CORNER_RADIUS, this.size.y / 2 - CORNER_RADIUS
      , CORNER_RADIUS, Math.PI * 0.5, Math.PI);
    this.outlineShape.lineTo(-this.size.x / 2, -this.size.y / 2 + CORNER_RADIUS);
    this.outlineShape.arc(-this.size.x / 2 + CORNER_RADIUS, -this.size.y / 2 + CORNER_RADIUS
      , CORNER_RADIUS, Math.PI, Math.PI * 1.5);

    // In links
    this.inLinks = new Map();

    if(inLinksSize > 0) {
      var inLinksTotalY = inLinksSize * LINK_SIZE_Y + (inLinksSize - 1) * LINK_SPACE;
      var inLinksY = -(inLinksTotalY / 2);

      for(var linkIdx = 0; linkIdx < inLinksSize; linkIdx++) {
        var newLink = new Link(new Point(-this.size.x / 2 + LINK_SPACE + LINK_SIZE_X / 2, inLinksY + LINK_SIZE_Y / 2), this);
        this.inLinks.set(inLinks[linkIdx], newLink);
        inLinksY += LINK_SPACE + LINK_SIZE_Y;
      }
    }

    // Out links
    this.outLinks = new Map();

    if(outLinksSize > 0) {
      var outLinksTotalY = outLinksSize * LINK_SIZE_Y + (outLinksSize - 1) * LINK_SPACE;
      var outLinksY = -(outLinksTotalY / 2);

      for(var linkIdx = 0; linkIdx < outLinksSize; linkIdx++) {
        var newLink = new Link(new Point(+this.size.x / 2 - LINK_SPACE - LINK_SIZE_X / 2, outLinksY + LINK_SIZE_Y / 2), this);
        this.outLinks.set(outLinks[linkIdx], newLink);
        outLinksY += LINK_SPACE + LINK_SIZE_Y;
      }
    }
  }

  draw(context) {
    // Loop through links and queue them up for drawing.
    context.save();
    context.translate(this.location.x, this.location.y);
    context.fillStyle = this.fillColor;
    context.fill(this.bodyShape);
    context.strokeStyle = this.strokeColor;
    context.stroke(this.outlineShape);

    for(var link of this.inLinks.values()) {
      link.draw(context);
    }

    for(var link of this.outLinks.values()) {
      link.draw(context);
    }

    context.restore();
  }
}
