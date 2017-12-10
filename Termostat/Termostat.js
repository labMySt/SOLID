function Termostat(){
	this.maxTemp = 35;
	this.minTemp = 0;
	this.power = (this.maxTemp - this.minTemp)/2;
	
}


Termostat.prototype.SetMax = function(){
	var a = prompt("maxTemp?: ", 35);
	a = Number(a);
	if(a>this.minTemp) this.maxTemp = a;
	this.power = (this.maxTemp - this.minTemp)/2;
}

Termostat.prototype.SetMin = function(a){
	var a = prompt("minTemp?: ", 0);
	a = Number(a);
	if(a<this.maxTemp) this.minTemp = a;
	this.power = (this.maxTemp - this.minTemp)/2;
}




var term1 = new Termostat();

console.log(term1.power);
term1.SetMin();
console.log(term1.minTemp);
console.log(term1.power);


function extend(Child, Parent) {
    var F = function() { };
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.superclass = Parent.prototype;
}

function TermostatNew(a){
	Termostat.call(this);
	this.String = "";

}
extend(TermostatNew, Termostat);	

TermostatNew.prototype.SetComfortTemp = function(){
	var a = prompt("input comfort temp: ", 24);
	a = Number(a);
	this.maxTemp = a+1;
	this.minTemp = a-1;
	this.power = (this.maxTemp - this.minTemp)/2;
}



//TermostatNew.prototype = Object.create(Termostat.prototype);  // як наслєдування свойств
//TermostatNew.prototype.constructor = TermostatNew;

var term2 = new TermostatNew();
term2.SetComfortTemp();
console.log(term2.power);
//term2.SetMax();
//console.log(term2.power);
