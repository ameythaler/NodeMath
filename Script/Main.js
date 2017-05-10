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
}
