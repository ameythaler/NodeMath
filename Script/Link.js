class Link {
  constructor(isInLink, location, size) {
    this.connector = null;
    this.isInLink = isInLink;
    this.location = location;
    this.size = size;
    
    this.bodyShape = new Path2D();
    
    if(isInLink) {
      this.bodyShape.moveTo(this.location.x - this.size.x / 2
        , this.location.y - this.size.y / 2);
      this.bodyShape.lineTo(this.location.x, this.location.y - this.size.y / 2);
      this.bodyShape.lineTo(this.location.x + this.size.x / 2, this.location.y);
      this.bodyShape.lineTo(this.location.x, this.location.y + this.size.y / 2);
      this.bodyShape.lineTo(this.location.x - this.size.x / 2
        , this.location.y + this.size.y / 2);
      this.bodySahpe.closePath();
    }
  }
  
  draw(context) {
    context.fill(this.bodyShape);
  }
}
