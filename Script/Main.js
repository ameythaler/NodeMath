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
  var testLink = new Link(true, new Point(50, 50), new Point(10, 10));
  testLink.draw(mainContext);
}
