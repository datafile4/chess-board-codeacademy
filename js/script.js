//constructors section
function Cell(x,y,filled){ //one cell of table
  this.x = x;
  this.y =y;
  this.filled = filled;
}

function Figure(x,y){ //parent class for all figures
  this.x = x;
  this.y = y;
}

//constructors section
//arrays
var divCells = new Array();
var divColumns = new Array();
//arrays
var container = document.createElement("DIV");
container.setAttribute("class", "container");
document.body.appendChild(container);
for(var i=0; i<8; i++){
  divColumns[i] = document.createElement("DIV");
  divColumns[i].setAttribute("class", "column");
  container.appendChild(divColumns[i]);
  for(var j=0; j<8; j++){
    divCells[j] = document.createElement("DIV");
    divCells[j].setAttribute("class", "cells");

    divColumns[i].appendChild(divCells[j]);
  }
}
