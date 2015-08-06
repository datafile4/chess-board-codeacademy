//constructors
function Cell(x,y,figure){
  this.x = x;
  this.y = y;
  this.figure = figure;
}

//constructors



var container = document.createElement("DIV");//big container
$(container).addClass("colorGrey");
$(container).addClass("container");
document.body.appendChild(container);

var divCells = new Array(); //array for cells

//creating cells
for(var i=0; i<8; i++){
  divCells[i] = new Array(); //i-row
  for(var j=0; j<8; j++){
    divCells[i][j] = document.createElement("DIV"); //j - column
    divCells[i][j].setAttribute("class", "cell");
    if((i+j)%2!=0){ //paint cells black
      $(divCells[i][j]).addClass("colorBlack");
    }
    container.appendChild(divCells[i][j]);
  }
}
