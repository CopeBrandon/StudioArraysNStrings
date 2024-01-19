const input = require('readline-sync');

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
const foodCabinet = food.split(",").sort();
const equipmentCabinet = equipment.split(",").sort();
const petsCabinet = pets.split(",").sort();
const sleepAidsCabinet = sleepAids.split(",").sort();

console.log(`
foodCabinet: ${foodCabinet.join(", ")}
equipmentCabinet: ${equipmentCabinet.join(", ")}
petsCabinet: ${petsCabinet.join(", ")}
sleepAidsCabinet: ${sleepAidsCabinet.join(", ")}
`);
//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [foodCabinet, equipmentCabinet, petsCabinet, sleepAidsCabinet];
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
let cabinetSelection = input.questionInt("Input the cabinet that you wish to select.\n0) Food\n1) Equipment\n2) Pets\n3) Sleep Aids\n");
if(cabinetSelection < 0 || cabinetSelection >= cargoHold.length){//cabinetSelect < 0 | >= 4
    cabinetSelection = 0;
    console.log("Invalid cabinet selection, defaulting to 0th.");
}
let cabinet = cargoHold[cabinetSelection]; //index 1 cargoHold[1]
let str = "Input the item you  wish to select.\n";
for(let i=0; i<cabinet.length; i++){
    str+=`${cabinet[i]}\n`;
}
let item = input.question(str).toLowerCase();
if(cabinet.includes(item)){
    console.log(`Retrieved ${item} from cabinet ${cabinetSelection}`);
} else {
    console.log(`Cabinet ${cabinetSelection} does NOT contain ${item}`);
}
//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
// console.log(`Contents of cargohold selected: ${cargoHold[cabinetSelection]}`);
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”