
//----------------------------------------------------


function sity(Name,CountOfPeople) {
	this.name = Name;
	this.countOfPeople = CountOfPeople;
};


var Vinnitia = new sity("Vinnitsia", 80000);


//----------------------------------------------------


function country(){
	this.bigsities = [];
	this.count = 0;
	this.sities = {};
	
};


//-----------------------------------------------------------------------------


country.prototype.addsity = function(sity){   // добавляє місто
	this.sities[sity.name] = sity;
}


//---------------------------------------------------------------------------


country.prototype.addsities = function(sities){ // добавляє місто в масив
	sities.forEach(function(sity){
			this.sities[sity.name] = sity;
		});
};


//---------------------------------------------------------------------------


country.prototype.tick = function(){    // проходить один рік і додає 5% від жителів  

		this.sities.forEach(function(sity){
			sity.countOfPeople += sities.countOfPeople*0.05;
		});

		console.log('One year passed');
	};

//---------------------------------------------------------------------------

//---------------------------------------------------------------------------
country.prototype.Congratilation = function(){

		this.bigsities.forEach(function(bigsity){

				console.log("Congratilation " + bigsity.name + "! You are a real big sity");
									
			});

};
country.prototype.toPassYear = function(years){  //проходить задану кількість років
	    
	var newBigSities = [];   // містить імена міст і все

	for(i in years){

		this.tick();
		this.count++;
		

		if(cont/25 - Math.floor(count/25) == 0){

			count = 0;

			this.sities.forEach(function(sity){

				if(sity.countOfPeople > 100000) this.bigsities.puch(sity);
									
			});

			this.Congratilation();

		}; 
	};
};




//---------------------------------main------------------------------------
var Ukraine = new country ();

Ukraine.addsity(Vinnitia);
console.log(Ukraine.sities);


Ukraine.toPassYear(50);



