var plan = ["####################",
			"#                  #",
			"#    o  # #   #    #",
			"#            o     #",
			"#      #        #  #",
			"#   o  #    #   #  #",
			"#      #    #      #",
			"#   #       #      #",
			"#  #   o           #",
			"#  #               #",
			"####################"]

var kierunki = {
	"n":  new Vector( 0, -1),
	"ne": new Vector( 1, -1),
	"e":  new Vector( 1, 0),
	"se": new Vector( 1, 1),
	"s":  new Vector( 0, 1),
	"sw": new Vector(-1, 1),
	"w":  new Vector(-1, 0),
	"nw":  new Vector(-1,-1)
}			

function Vector(x, y){
	this.x = x;
	this.y = y;
}

Vector.prototype.plus = function(inne) {
	return new Vector(this.x + inne.x, this.y+ inne.y);
};			

var directionNames = "nw n ne w e sw s se".split(" ");



function elementFromChar(legend, ch) {
	if (ch == " ")
		return null;

	var element = new legend[ch]();
	element.originChar = ch;
	return element;
}

function charFromElement(element) {
	if(element == null)
		return " ";
	else
		return element.originChar;
}

function Wall() {};

