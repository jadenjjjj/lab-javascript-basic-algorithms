// Iteration 1: Names and Input
let hacker1 = "Tim";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Tom";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker1.length} characters.`)
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
let driver_name = [];
for (let i = 0; i < hacker1.length; i++) {
    driver_name += hacker1[i] + " ";
}
console.log(driver_name.toUpperCase());

let navi_name = [];
for (let i = 2; i >= 0; i--) {
    navi_name += hacker2[i];
}
console.log(navi_name);

//---------------------------------------------------
var inter = 0;
var j = 0;
while(inter < hacker1.length) {
    j = inter + 1;
    while(hacker1[inter] < hacker1[j]) {
        temStr = hacker1[inter];
        hacker1[inter] = hacker1[j];
        hacker1[j] = hacker1[inter];
        j++;
    }
    inter++;
}
finalDri = temStr + hacker1[inter] + hacker1[j];

var interN = 0;
var jN = 0;
while (interN < hacker2.length) {
    jN = interN + 1;
    while (hacker2[interN] < hacker2[jN]) {
        temStr2 = hacker2[interN];
        hacker2[interN] = hacker2[jN];
        hacker2[jN] = temStr2;
        jN++; 
    } 
    interN++;
}
finalNav = temStr2 + hacker2[interN] + hacker2[jN];


switch (finalDri < finalNav) {
    case true:
        console.log("The driver's name goes first.");
        break;
    case false:
        console.log("Yo, the navigator goes first definitely.")
        break;
    default:
        console.log("What?! You both have the same name?")
    
}
