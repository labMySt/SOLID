function point(arr, dep, stat){
	this.time = {
		arrival:arr,
		departure:dep
	};
	this.station = stat;
};

point.prototype.printInfo = function(){
	console.log(this.station + " - " + this.time.arrival +" - " + this.time.departure);
};


function sity(){
	this.name;
	this.routes = [];
};

sity.prototype.printRoutes = function(){
	this.routes.forEach(function(route){
		console.log(route + route.number);
	});
};


function route(){
	this.number = 0;
	this.points = [];
}

route.prototype.printPoints = function(){
	this.points.forEach(function(point){
		console.log(point.station);
	});
};

function schedule(ROUTS, val){
	this.routes = ROUTS;
	this.valide = val;
};

schedule.prototype.printOllInformations = function(){
	this.routes.forEach(function(route){
		console.log(route.number)
		route.points.forEach(function(point){
			console.log(point.station.name + ", " + point.time.arrival + "-" + 	point.time.departure + ";");
		});
	});	
};

//===========================================================================================================
 var Vin = new sity();
 Vin.name = "Vinnitsia";
 var Koz = new sity();
 Koz.name = "Koziatyn";

 var Express = new route();
 Express.number = 1;
 Express.points = [
 	new point(12, 13, Vin), new point(15, 16, Koz)
 ];

 var Slow = new route();
 Slow.number = 2;
 Slow.points = [
 	new point(20, 21, Vin), new point(23, 24, Koz)
 ];

	
var Schedule = new schedule([Express, Slow], 19);
Schedule.printOllInformations();


