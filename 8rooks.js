function runDemo() {
      var rooks = [];
      rooks = placeRook(rooks, "a1");
      rooks = placeRook(rooks, "b3");
      validate(rooks);

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
		window.alert("Board is valid");
	} else {
		window.alert("Board is not valid");
	}
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