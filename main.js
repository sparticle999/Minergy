var oreType = 0;
var oreType2 = 0;
var iron = 0; var ironPrice = 10; var ironNum = 0;
var gold = 0; var goldPrice = 24; var goldNum = 0;
var copper = 0; var copperPrice = 6; var copperNum = 0;
var tin = 0; var tinPrice = 8; var tinNum = 0;
var lithium = 0; var lithiumPrice = 15; var lithiumNum = 0;
var diamond = 0; var diamondPrice = 100; var diamondNum = 0;
var money = 0;
var pickCost = 500;
var orePerClick = 1;
var pulseLevel = 0; var pulseCost = 5000; var pulse2Level = 0; var pulse2Cost = 100000;
var genLevel = 0; var genCost = 5000; var gen2Level = 0; var gen2Cost = 100000;
var energy = 0;

function refreshStats(){
	document.getElementById("iron").innerHTML = iron;
	document.getElementById("gold").innerHTML = gold;
	document.getElementById("copper").innerHTML = copper;
	document.getElementById("tin").innerHTML = tin;
	document.getElementById("lithium").innerHTML = lithium;
	document.getElementById("diamond").innerHTML = diamond;
	document.getElementById("energy").innerHTML = energy;
	document.getElementById("money").innerHTML = money;
}

function activeMain() {
    "use strict";
    document.getElementById("mainTab").style.color = "#ffffff";
    document.getElementById("statsTab").style.color = "#414449";
    document.getElementById("settingsTab").style.color = "#414449";
    document.getElementById("shopTab").style.color = "#414449";
    document.getElementById("main").className = "active";
    document.getElementById("shop").className = "";
    document.getElementById("stats").className = "";
    document.getElementById("settings").className = "";
    document.getElementById("mainTab").style.display = block;
    document.getElementById("shopTab").style.display = none;
    document.getElementById("statsTab").style.display = none;
    document.getElementById("settingsTab").style.display = none;
    
}

function activeStats() {
    "use strict";
    document.getElementById("mainTab").style.color = "#414449";
    document.getElementById("statsTab").style.color = "#ffffff";
    document.getElementById("settingsTab").style.color = "#414449";
    document.getElementById("shopTab").style.color = "#414449";
    document.getElementById("main").className = "";
    document.getElementById("shop").className = "";
    document.getElementById("stats").className = "active";
    document.getElementById("settings").className = "";
    document.getElementById("mainTab").style.display = none;
    document.getElementById("shopTab").style.display = none;
    document.getElementById("statsTab").style.display = block;
    document.getElementById("settingsTab").style.display = none;

}

function activeSettings() {
    "use strict";
    document.getElementById("mainTab").style.color = "#414449";
    document.getElementById("statsTab").style.color = "#414449";
    document.getElementById("settingsTab").style.color = "#ffffff";
    document.getElementById("shopTab").style.color = "#414449";
    document.getElementById("main").className = "";
    document.getElementById("shop").className = "";
    document.getElementById("stats").className = "";
    document.getElementById("settings").className = "active";
    document.getElementById("mainTab").style.display = none;
    document.getElementById("shopTab").style.display = none;
    document.getElementById("statsTab").style.display = none;
    document.getElementById("settingsTab").style.display = block;
}

function activeShop() {
    "use strict";
    document.getElementById("mainTab").style.color = "#414449";
    document.getElementById("statsTab").style.color = "#414449";
    document.getElementById("settingsTab").style.color = "#414449";
    document.getElementById("shopTab").style.color = "#ffffff";
    document.getElementById("main").className = "";
    document.getElementById("shop").className = "active";
    document.getElementById("stats").className = "";
    document.getElementById("settings").className = "";
    document.getElementById("mainTab").style.display = none;
    document.getElementById("shopTab").style.display = block;
    document.getElementById("statsTab").style.display = none;
    document.getElementById("settingsTab").style.display = none;
}

function save(){
	var save = {
		money: money,
		energy: energy,
		orePerClick: orePerClick,
		pulseLevel: pulseLevel,
		pulseCost: pulseCost,
		pulse2Level: pulse2Level,
		pulse2Cost: pulse2Cost,
		genLevel: genLevel,
		genCost: genCost,
		gen2Level: gen2level,
		gen2Cost: gen2Cost,
	}
	localStorage.setItem("save",JSON.stringify(save));
}

function load(){
	var savegame = JSON.parse(localStorage.getItem("save"));
	if (typeof savegame.money !== "undefined") money = savegame.money;
	if (typeof savegame.energy !== "undefined") energy = savegame.energy;
	if (typeof savegame.orePerClick !== "undefined") orePerClick = savegame.orePerClick;
	if (typeof savegame.pulseLevel !== "undefined") pulseLevel = savegame.pulseLevel;
	if (typeof savegame.pulseCost !== "undefined") pulseCost = savegame.pulseCost;
	if (typeof savegame.pulse2Level !== "undefined") pulse2Level = savegame.pulse2Level;
	if (typeof savegame.pulse2Cost !== "undefined") pulse2Cost = savegame.pulse2Cost;
	if (typeof savegame.genLevel !== "undefined") genLevel = savegame.genLevel;
	if (typeof savegame.genCost !== "undefined") genCost = savegame.genCost;
	if (typeof savegame.gen2level !== "undefined") gen2level = savegame.gen2level;
	if (typeof savegame.gen2Cost !== "undefined") gen2Cost = savegame.gen2Cost;
}

function deleteSave(){
	var delete = prompt("Are you sure you want to delete this save? It is irreversible! If so, type 'DELETE' into the box. );
	if(delete = "DELETE"){
		localStorage.removeItem("save");
		alert("Deleted Save");
	}
	alert("Deletion Cancelled");
}

function gainOre(){
	oreType = Math.floor(Math.random() * 100);
	if(oreType >= 96){
		diamond += orePerClick;
	}
	if(oreType < 96 && oreType >= 86){
		gold += orePerClick;
	}
	if(oreType < 86 && oreType >= 71){
		lithium += orePerClick;
	}
	if(oreType < 71 && oreType >= 51){
		iron += orePerClick;
	}
	if(oreType < 51 && oreType >= 31){
		tin += orePerClick;
	}
	if(oreType < 31){
		copper += orePerClick;
	}
	refreshStats();
}

function pulseMine(){
	if(energy > (pulseLevel * 8) && pulseLevel > 0){
		energy = energy - (pulseLevel * 8);
		oreType2 = Math.floor(Math.random() * 100);
		if(oreType2 >= 96){
		diamond += 16;
		}
		if(oreType2 < 96 && oreType2 >= 86){
			gold += 16;
		}
		if(oreType2 < 86 && oreType2 >= 71){
			lithium += 16;
		}
		if(oreType2 < 71 && oreType2 >= 51){
			iron += 16;
		}
		if(oreType2 < 51 && oreType2 >= 31){
		tin += 16;
		}
		if(oreType2 < 31){
			copper += 16;
		}
		refreshStats();
	}
}

function sellAll(){
	ironNum = iron;
	goldNum = gold;
	copperNum = copper;
	tinNum = tin;
	lithiumNum = lithium;
	diamondNum = diamond;
	for (a = 0; a < ironNum; a++){
		iron -= 1;
		money += ironPrice;
	}
	for (b = 0; b < goldNum; b++){
		gold -= 1;
		money += goldPrice;
	}
	for (c = 0; c < copperNum; c++){
		copper -= 1;
		money += copperPrice;
	}
	for (d = 0; d < tinNum; d++){
		tin -= 1;
		money += tinPrice;
	}
	for (e = 0; e < lithiumNum; e++){
		lithium -= 1;
		money += lithiumPrice;
	}
	for (f = 0; f < diamondNum; f++){
		diamond -= 1;
		money += diamondPrice;
	}
	ironNum = 0;
	goldNum = 0;
	copperNum = 0;
	tinNum = 0;
	lithiumNum = 0;
	diamondNum = 0;
    refreshStats();
}
function upgradePick(){
	if(money > pickCost){
		money -= pickCost;
		if(orePerClick > 31){
		    orePerClick = orePerClick + 16;
		}
		if(orePerClick < 17){
		    orePerClick = orePerClick * 2;
		}
		pickCost *= 2;
		document.getElementById("orePerClick").innerHTML = orePerClick;
		document.getElementById("pickCost").innerHTML = pickCost;
		document.getElementById("money").innerHTML = money;
	}
}

function upgradeGen(){
	if(money > genCost){
		money -= genCost;
		genLevel += 1;
		genCost = Math.floor(genCost * 1.5);
		document.getElementById("genLevel").innerHTML = genLevel;
		document.getElementById("genCost").innerHTML = genCost;
		document.getElementById("money").innerHTML = money;
	}
}

function upgradeGen2(){
	if(money > gen2Cost){
		money -= gen2Cost;
		gen2Level += 1;
		gen2Cost = Math.floor(gen2Cost * 1.5);
		document.getElementById("gen2Level").innerHTML = gen2Level;
		document.getElementById("gen2Cost").innerHTML = gen2Cost;
		document.getElementById("money").innerHTML = money;
	}
}

function upgradePulse(){
	if(money > pulseCost){
		money -= pulseCost;
		pulseLevel += 1;
		pulseCost = Math.floor(pulseCost * 1.5);
		document.getElementById("pulseLevel").innerHTML = pulseLevel;
		document.getElementById("pulseCost").innerHTML = pulseCost;
		document.getElementById("money").innerHTML = money;
	}
}

function upgradePulse2(){
	if(money > pulse2Cost){
		money -= pulse2Cost;
		pulse2Level += 1;
		pulse2Cost = Math.floor(pulse2Cost * 1.5);
		document.getElementById("pulse2Level").innerHTML = pulse2Level;
		document.getElementById("pulse2Cost").innerHTML = pulse2Cost;
		document.getElementById("money").innerHTML = money;
	}
}

function getEnergy(){
	energy += genLevel * 8;
	energy += gen2Level * 32;
	refreshStats();
}

function pulseMine2(){
	if(energy > (pulse2Level * 64) && pulse2Level > 0){
		energy -= pulse2Level * 64;
		oreType2 = Math.floor(Math.random() * 100);
		if(oreType2 >= 96){
			diamond += 128;
		}
		if(oreType2 < 96 && oreType2 >= 86){
			gold += 128;
		}
		if(oreType2 < 86 && oreType2 >= 71){
			lithium += 128;
		}
		if(oreType2 < 71 && oreType2 >= 51){
			iron += 128;
		}
		if(oreType2 < 51 && oreType2 >= 31){
		tin += 128;
		}
		if(oreType2 < 31){
			copper += 128;
		}
		refreshStats();
	}
}

function winGame(){
	if (money >= 10000000){
		money -= 10000000;
		refreshStats();
		alert("Congratulations! You Have Won The Game!!!");
		alert("You Can Quit Now (HIGHLY Unadvisable), or you can carry on playing!");
	}
}

window.setInterval(function(){
	getEnergy();
    pulseMine();
	pulseMine2();
	refreshStats();
}, 1000);
