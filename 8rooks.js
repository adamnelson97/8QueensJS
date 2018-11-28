function runDemo() {
      var rooks = []; // Stores the rook objects
      var occupiedSpots = []; // Stores the occupied spaces on the board
	  
	  iterate(rooks, occupiedSpots)
	  printInfo(rooks);
}

function placeRook(array, location) {
	var rook = {row:location.substr(0,1), col:location.substr(1, 1)};
	document.getElementById(location).innerHTML = "R";
	array.push(rook);
	return array;
}

function removeRook(array, location) {
	var index = 0;
	for (i = 0; i < array.length; i++) {
		if (array[i].row = location.substr(0, 1)) {
			if (array[i].col = location.substr(1, 1)) {
				index = i;
				document.getElementById(location).innerHTML = "-";
			}
		}
	}
	return array.splice(index, 1);
}

function removeSpot(array, spot) {
	var index = 0;
	for (i = 0; i < array.length; i++) {
		if (array[i] == spot) index = i;
	}
	return array.splice(index, 1);
}

function checkBoard(array) {
	var occupiedRows = [];
	var occupiedCols = [];
	var valid = {row:0, col:0}; // non-existent space to indicate valid board
	for (i = 0; i < array.length; i++) {
		// Check rows
		for (j = 0; j < occupiedRows.length; j++) {
			if (occupiedRows[j] == array[i].row) return array[i]; // Returns invalid rook
		}
		// Check cols
		for (j = 0; j < occupiedCols.length; j++) {
			if (occupiedCols[j] == array[i].col) return array[i];
		}
		occupiedRows.push(array[i].row);
		occupiedCols.push(array[i].col);
	}
	return valid;
}

function validate(array) {
	var temp = checkBoard(array);
	if (temp.row == 0 && temp.col == 0) {
		return true; // window.alert("Board is valid");
	} else {
		return false; // window.alert("Board is not valid");
	}
}

function randSpot() {
	var spots = [
	"a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", 
	"b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", 
	"c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", 
	"d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", 
	"e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", 
	"f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", 
	"g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8", 
	"h1", "h2", "h3", "h4", "h5", "h6", "h7", "h8"];
	var item = spots[Math.floor(Math.random()*spots.length)];
	return item;
}	

function printInfo(array) {
	if (array.length > 0) document.getElementById("R1").innerHTML = "R1: " + array[0].row + array[0].col;
	if (array.length > 1) document.getElementById("R2").innerHTML = "R2: " + array[1].row + array[1].col;
	if (array.length > 2) document.getElementById("R3").innerHTML = "R3: " + array[2].row + array[2].col;
	if (array.length > 3) document.getElementById("R4").innerHTML = "R4: " + array[3].row + array[3].col;
	if (array.length > 4) document.getElementById("R5").innerHTML = "R5: " + array[4].row + array[4].col;
	if (array.length > 5) document.getElementById("R6").innerHTML = "R6: " + array[5].row + array[5].col;
	if (array.length > 6) document.getElementById("R7").innerHTML = "R7: " + array[6].row + array[6].col;
	if (array.length > 7) document.getElementById("R8").innerHTML = "R8: " + array[7].row + array[7].col;
}