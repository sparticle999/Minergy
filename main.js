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
var pulseLevel = 0; var pulse2Level = 0; var pulse3Level = 0; var pulse4Level = 0;
var pulseCost = 5000; var pulse2Cost = 100000; var pulse3Cost = 2000000; var pulse4Cost = 50000000;
var genLevel = 0; var gen2Level = 0; var gen3Level = 0; var gen4Level = 0;
var genCost = 5000; var gen2Cost = 100000; var gen3Cost = 2000000; var gen4Cost = 50000000;
var energy = 0; var energyPerSec = 0;
var autoSell = 0; var autoSellCount = 0;

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

function checkEnergyPositive(){
	document.getElementById("energyPerSec").innerHTML = energyPerSec;
	if(energyPerSec > 0){
		document.getElementById("energyPerSec").style.color = "#00FF00";
	}
	if(energyPerSec < 0){
		document.getElementById("energyPerSec").style.color = "red";
	}
	if(energyPerSec === 0){
		document.getElementById("energyPerSec").style.color = "white";
	}
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
	"use strict";
	var save = {
		money: money,
		energy: energy,
		orePerClick: orePerClick,
		pulseLevel: pulseLevel,
		pulse2Level: pulse2Level,
		pulse3Level: pulse3Level,
		pulse4Level: pulse4Level,
		pulseCost: pulseCost,
		pulse2Cost: pulse2Cost,
		pulse3Cost: pulse3Cost,
		pulse4Cost: pulse4Cost,
		genLevel: genLevel,
		gen2Level: gen2Level,
		gen3Level: gen3Level,
		gen4Level: gen4Level,
		genCost: genCost,
		gen2Cost: gen2Cost,
		gen3Cost: gen3Cost,
		gen4Cost: gen4Cost,
		pickCost: pickCost,
	};
	localStorage.setItem("save",JSON.stringify(save));
	alert("Save Successful!");
}

function load(){
	"use strict";
	var savegame = JSON.parse(localStorage.getItem("save"));
	if (typeof savegame.money !== "undefined") money = savegame.money;
	if (typeof savegame.energy !== "undefined") energy = savegame.energy;
	if (typeof savegame.orePerClick !== "undefined") orePerClick = savegame.orePerClick;
	
	if (typeof savegame.pulseLevel !== "undefined") pulseLevel = savegame.pulseLevel;
	if (typeof savegame.pulse2Level !== "undefined") pulse2Level = savegame.pulse2Level;
	if (typeof savegame.pulse3Level !== "undefined") pulse3Level = savegame.pulse3Level;
	if (typeof savegame.pulse4Level !== "undefined") pulse4Level = savegame.pulse4Level;
	
	if (typeof savegame.pulseCost !== "undefined") pulseCost = savegame.pulseCost;
	if (typeof savegame.pulse2Cost !== "undefined") pulse2Cost = savegame.pulse2Cost;
	if (typeof savegame.pulse3Cost !== "undefined") pulse3Cost = savegame.pulse3Cost;
	if (typeof savegame.pulse4Cost !== "undefined") pulse4Cost = savegame.pulse4Cost;
	
	if (typeof savegame.genLevel !== "undefined") genLevel = savegame.genLevel;
	if (typeof savegame.gen2Level !== "undefined") gen2Level = savegame.gen2Level;
	if (typeof savegame.gen3Level !== "undefined") gen3Level = savegame.gen3Level;
	if (typeof savegame.gen4Level !== "undefined") gen4Level = savegame.gen4Level;
	
	if (typeof savegame.genCost !== "undefined") genCost = savegame.genCost;
	if (typeof savegame.gen2Cost !== "undefined") gen2Cost = savegame.gen2Cost;
	if (typeof savegame.gen3Cost !== "undefined") gen3Cost = savegame.gen3Cost;
	if (typeof savegame.gen4Cost !== "undefined") gen4Cost = savegame.gen4Cost;
	
	if (typeof savegame.pickCost !== "undefined") pickCost = savegame.pickCost;
	
	refreshStats();
	
	document.getElementById("orePerClick").innerHTML = orePerClick;
	
	document.getElementById("genLevel").innerHTML = genLevel;
	document.getElementById("gen2Level").innerHTML = gen2Level;
	document.getElementById("gen3Level").innerHTML = gen3Level;
	document.getElementById("gen4Level").innerHTML = gen4Level;
	
	document.getElementById("genCost").innerHTML = genCost;
	document.getElementById("gen2Cost").innerHTML = gen2Cost;
	document.getElementById("gen3Cost").innerHTML = gen3Cost;
	document.getElementById("gen4Cost").innerHTML = gen4Cost;
	
	document.getElementById("pulseLevel").innerHTML = pulseLevel;
	document.getElementById("pulse2Level").innerHTML = pulse2Level;
	document.getElementById("pulse3Level").innerHTML = pulse3Level;
	document.getElementById("pulse4Level").innerHTML = pulse4Level;
	
	document.getElementById("pulseCost").innerHTML = pulseCost;
	document.getElementById("pulse2Cost").innerHTML = pulse2Cost;
	document.getElementById("pulse3Cost").innerHTML = pulse3Cost;
	document.getElementById("pulse4Cost").innerHTML = pulse4Cost;
	
	document.getElementById("pickCost").innerHTML = pickCost;
	alert("Load Successful!");
}

function deleteSave(){
	"use strict";
	var deleteSave = prompt("Are you sure you want to delete this save? It is irreversible! If so, type 'DELETE' into the box.");
	if(deleteSave === "DELETE"){
		localStorage.removeItem("save");
		alert("Deleted Save");
	}
	else{
		alert("Deletion Cancelled");
	}
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
		diamond += (16 * pulseLevel);
		}
		if(oreType2 < 96 && oreType2 >= 86){
			gold += (16 * pulseLevel);
		}
		if(oreType2 < 86 && oreType2 >= 71){
			lithium += (16 * pulseLevel);
		}
		if(oreType2 < 71 && oreType2 >= 51){
			iron += (16 * pulseLevel);
		}
		if(oreType2 < 51 && oreType2 >= 31){
			tin += (16 * pulseLevel);
		}
		if(oreType2 < 31){
			copper += (16 * pulseLevel);
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
		energyPerSec += 8;
		document.getElementById("genLevel").innerHTML = genLevel;
		document.getElementById("genCost").innerHTML = genCost;
		document.getElementById("money").innerHTML = money;
		checkEnergyPositive();
	}
}

function upgradeGen2(){
	if(money > gen2Cost){
		money -= gen2Cost;
		gen2Level += 1;
		gen2Cost = Math.floor(gen2Cost * 1.5);
		energyPerSec += 64;
		document.getElementById("gen2Level").innerHTML = gen2Level;
		document.getElementById("gen2Cost").innerHTML = gen2Cost;
		document.getElementById("money").innerHTML = money;
		checkEnergyPositive();
	}
}

function upgradeGen3(){
	if(money > gen3Cost){
		money -= gen3Cost;
		gen3Level += 1;
		gen3Cost = Math.floor(gen3Cost * 1.5);
		energyPerSec += 512;
		document.getElementById("gen3Level").innerHTML = gen3Level;
		document.getElementById("gen3Cost").innerHTML = gen3Cost;
		document.getElementById("money").innerHTML = money;
		checkEnergyPositive();
	}
}

function upgradeGen4(){
	if(money > gen2Cost){
		money -= gen4Cost;
		gen4Level += 1;
		gen4Cost = Math.floor(gen4Cost * 1.5);
		energyPerSec += 4096;
		document.getElementById("gen4Level").innerHTML = gen4Level;
		document.getElementById("gen4Cost").innerHTML = gen4Cost;
		document.getElementById("money").innerHTML = money;
		checkEnergyPositive();
	}
}

function upgradePulse(){
	if(money > pulseCost){
		money -= pulseCost;
		pulseLevel += 1;
		pulseCost = Math.floor(pulseCost * 1.5);
		energyPerSec -= 8;
		document.getElementById("pulseLevel").innerHTML = pulseLevel;
		document.getElementById("pulseCost").innerHTML = pulseCost;
		document.getElementById("money").innerHTML = money;
		checkEnergyPositive();
	}
}

function upgradePulse2(){
	if(money > pulse2Cost){
		money -= pulse2Cost;
		pulse2Level += 1;
		pulse2Cost = Math.floor(pulse2Cost * 1.5);
		energyPerSec -= 64;
		document.getElementById("pulse2Level").innerHTML = pulse2Level;
		document.getElementById("pulse2Cost").innerHTML = pulse2Cost;
		document.getElementById("money").innerHTML = money;
		checkEnergyPositive();
	}
}

function upgradePulse3(){
	if(money > pulse3Cost){
		money -= pulse3Cost;
		pulse3Level += 1;
		pulse3Cost = Math.floor(pulse3Cost * 1.5);
		energyPerSec -= 512;
		document.getElementById("pulse3Level").innerHTML = pulse3Level;
		document.getElementById("pulse3Cost").innerHTML = pulse3Cost;
		document.getElementById("money").innerHTML = money;
		checkEnergyPositive();
	}
}

function upgradePulse4(){
	if(money > pulse4Cost){
		money -= pulse4Cost;
		pulse4Level += 1;
		pulse4Cost = Math.floor(pulse4Cost * 1.5);
		energyPerSec -= 4096;
		document.getElementById("pulse4Level").innerHTML = pulse4Level;
		document.getElementById("pulse4Cost").innerHTML = pulse4Cost;
		document.getElementById("money").innerHTML = money;
		checkEnergyPositive();
	}
}

function getEnergy(){
	energy += genLevel * 8;
	energy += gen2Level * 64;
	energy += gen3Level * 512;
	energy += gen4Level * 4096;
	refreshStats();
}

function pulseMine2(){
	if(energy > (pulse2Level * 64) && pulse2Level > 0){
		energy -= pulse2Level * 64;
		oreType2 = Math.floor(Math.random() * 100);
		if(oreType2 >= 96){
			diamond += (128 * pulse2Level);
		}
		if(oreType2 < 96 && oreType2 >= 86){
			gold += (128 * pulse2Level);
		}
		if(oreType2 < 86 && oreType2 >= 71){
			lithium += (128 * pulse2Level);
		}
		if(oreType2 < 71 && oreType2 >= 51){
			iron += (128 * pulse2Level);
		}
		if(oreType2 < 51 && oreType2 >= 31){
			tin += (128 * pulse2Level);
		}
		if(oreType2 < 31){
			copper += (128 * pulse2Level);
		}
		refreshStats();
	}
}

function pulseMine3(){
	if(energy > (pulse3Level * 512) && pulse3Level > 0){
		energy -= pulse3Level * 512;
		oreType2 = Math.floor(Math.random() * 100);
		if(oreType2 >= 96){
			diamond += (1024 * pulse3Level);
		}
		if(oreType2 < 96 && oreType2 >= 86){
			gold += (1024 * pulse3Level);
		}
		if(oreType2 < 86 && oreType2 >= 71){
			lithium += (1024 * pulse3Level);
		}
		if(oreType2 < 71 && oreType2 >= 51){
			iron += (1024 * pulse3Level);
		}
		if(oreType2 < 51 && oreType2 >= 31){
			tin += (1024 * pulse3Level);
		}
		if(oreType2 < 31){
			copper += (1024 * pulse3Level);
		}
		refreshStats();
	}
}

function pulseMine4(){
	if(energy > (pulse4Level * 4096) && pulse4Level > 0){
		energy -= pulse4Level * 4096;
		oreType2 = Math.floor(Math.random() * 100);
		if(oreType2 >= 96){
			diamond += (8192 * pulse4Level);
		}
		if(oreType2 < 96 && oreType2 >= 86){
			gold += (8192 * pulse4Level);
		}
		if(oreType2 < 86 && oreType2 >= 71){
			lithium += (8192 * pulse4Level);
		}
		if(oreType2 < 71 && oreType2 >= 51){
			iron += (8192 * pulse4Level);
		}
		if(oreType2 < 51 && oreType2 >= 31){
			tin += (8192 * pulse4Level);
		}
		if(oreType2 < 31){
			copper += (8192 * pulse4Level);
		}
		refreshStats();
	}
}

function upgradeAutoSell(){
	if(money >= 1000000){
		money -= 1000000;
		autoSell = 1;
		document.getElementById("upgradeAutoSell").className = "btn-info hidden"
	}
}

function autoSellAll(){
	if(autoSell === 1){
		autoSellCount += 1;
		if(autoSellCount = 60){
			autoSellCount = 0;
			sellAll();
		}
	}
}

function winGame(){
	if (money >= 1000000000){
		money -= 1000000000;
		refreshStats();
		alert("Congratulations! You Have Won The Game!!!");
		alert("You Can Quit Now (HIGHLY Unadvisable), or you can carry on playing!");
	}
}

window.setInterval(function(){
	getEnergy();
	pulseMine();
	pulseMine2();
	pulseMine3();
	pulseMine4();
	autoSellAll();
	refreshStats();
}, 1000);
