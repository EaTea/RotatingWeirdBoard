function Sheet(canvas, opts) {
  var width = opts.width;
  var height = opts.height;
  var topLeft = opts.topLeft;

  // Create a Paper.js Path to draw a line into it:
  var rectangle = new paper.Rectangle(topLeft, new paper.Size(width, height));
  var path = new paper.Path.Rectangle(rectangle);
  // Give the stroke a color
  path.strokeColor = 'black';
}
