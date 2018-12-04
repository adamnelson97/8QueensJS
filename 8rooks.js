function runDemo() {
    var board = {
      	rooks : [], // Stores the rook objects
      	placeRook : function(location) {
      		var rook = {row:location.substr(0,1), col:location.substr(1, 1)};
			this.rooks.push(rook);
      	},
      	removeRook : function(location) {
      		var index = 0;
      		for (i = 0; i < this.rooks.length; i++) {
      			if (this.rooks[i].row = location.substr(0, 1)) {
					if (this.rooks[i].col = location.substr(1, 1)) {
						index = i;
					}
				}
      		}
      		this.rooks = this.rooks.splice(index, 1);
      	},
      	validate : function() {
      		var temp = checkBoard(this.rooks);
			if (temp.row == 0 && temp.col == 0) {
				return true;
			} else {
				return false;
			}
      	},
      	fillBoard : function() {
      		var valid = false;
      		while (valid == false) {
  				var spot = randSpot();
  				this.placeRook(spot);
  				if (this.validate() == false) this.removeRook(spot);
      			if (this.rooks.length == 8 && this.validate()) valid = true;
      		}
      	}
	};

	var spots = [
	"a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", 
	"b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", 
	"c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", 
	"d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", 
	"e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", 
	"f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", 
	"g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8", 
	"h1", "h2", "h3", "h4", "h5", "h6", "h7", "h8"];
	// Reset board with each button click
	for (i = 0; i < spots.length; i++) document.getElementById(spots[i]).innerHTML = "-";
	board.fillBoard();
	printInfo(board.rooks);
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
	for (i = 0; i < 8; i++) {
		document.getElementById("R" + (i + 1)).innerHTML = "R" + (i + 1) + ": " + array[i].row + array[i].col + "&nbsp;&nbsp;&nbsp;&nbsp;";
		document.getElementById(array[i].row + array[i].col).innerHTML = "R";
	}
}