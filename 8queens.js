function runDemo() {
      var queens = [];
      var valid;
      queens = placeQueen(queens, "a1");
      queens = placeQueen(queens, "c1");
      

      printInfo(queens);
}

function placeQueen(array, location) {
	var queen = {row:location.substr(0,1), col:location.substr(1, 1)};
	document.getElementById(location).innerHTML = "Q";
	array.push(queen);
	return array;
}

function removeQueen(array, location) {
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
		for (j = 0; j < occupiedRows.length; j++) {
			if (occupiedRows[j] == array[i].row) return array[i]; // Returns invalid queen
		}
		for (j = 0; j < occupiedCols.length; j++) {
			if (occupiedCols[j] == array[i].col) return array[i];
		}
		occupiedRows.push(array[i].row);
		occupiedCols.push(array[i].col);
	}
	return valid;
}

function printInfo(array) {
	if (array.length > 0) document.getElementById("Q1").innerHTML = "Q1: " + array[0].row + array[0].col;
	if (array.length > 1) document.getElementById("Q2").innerHTML = "Q2: " + array[1].row + array[1].col;
	if (array.length > 2) document.getElementById("Q2").innerHTML = "Q2: " + array[2].row + array[2].col;
	if (array.length > 3) document.getElementById("Q2").innerHTML = "Q2: " + array[3].row + array[3].col;
	if (array.length > 4) document.getElementById("Q2").innerHTML = "Q2: " + array[4].row + array[4].col;
	if (array.length > 5) document.getElementById("Q2").innerHTML = "Q2: " + array[5].row + array[5].col;
	if (array.length > 6) document.getElementById("Q2").innerHTML = "Q2: " + array[6].row + array[6].col;
	if (array.length > 7) document.getElementById("Q2").innerHTML = "Q2: " + array[7].row + array[7].col;
}