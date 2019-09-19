var person = function(first, last, came) {
	this.first = first;
	this.last = last;
	this.came = false;
};
var amount = 0;
var p0 = new person("Daniel", "Farkas", false);
amount++;
var p1 = new person("Avner", "Farkas", false);
amount++;
var p2 = new person("Ezra", "Farkas", false);
amount++;
var first = [p0.first,p1.first, p2.first];
var last = [p0.last, p1.last, p2.last];
var came = [p0.came, p1.came, p2.came];
p1.came = true;
p2.came = true;

function num() {
	var y = Math.floor(Math.random() * amount);
	return y;
}

var z = num();

if (came[z] === true) {
	alert(first[z] + last[z] + "won");
}
