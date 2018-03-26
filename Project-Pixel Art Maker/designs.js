// Select color input
let colorPicker = $("#colorPicker");
let newColor = $("#colorPicker").val();
// selecting canvas
let canvas = $("#pixelCanvas");

// When size is submitted by the user,call makeGrid()
function makeGrid(submitButn) {
  let rows = $("#inputHeight").val();
  let cols = $("#inputWeight").val();
  
  //Prevent submit button from submitting form
  submitButn.preventDefault();
  
  //empty canvas before making new grid
  canvas.empty();

  for (let i = 1; i <= rows; i++) {
    let cell = "";
    for (let j = 1; j <= cols; j++) {
      cell += "<td></td>";
    }
    canvas.append("<tr>" + cell + "</tr>");
  }
}
// Submit button event
var submit = $("input[type='submit']");
submit.on("click", makeGrid);

// assigning new color
colorPicker.on("change", function() {
  newColor = $(this).val();
});

//  fill color with single click
canvas.on("mousedown", "td", function() {
  $(this).css("backgroundColor", newColor);
});

// remove color by doubleclick
canvas.on("dblclick", "td", function() {
  $(this).css("backgroundColor", "");
});
