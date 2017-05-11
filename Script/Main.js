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
