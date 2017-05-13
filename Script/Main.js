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
  var inLinks = ['Numerator', 'Denominator', 'A', 'B', 'C'];
  var outLinks = ['Output'];
  var testNode = new BasicNode(inLinks, outLinks);
  testNode.draw(mainContext);
}
