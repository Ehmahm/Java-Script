let detectiveName = "Magomu Emmanuel";
let solvedCases = 0;
solvedCases += 1;

//qn2
function solveMystery() {
    console.log("Mystery Solved!");
}

function solveMystery(clue){
    if (clue === "obvious"){
        console.log("This was an easy case!");
    } else {
        console.log("This one was tricky!");
    }}

    function solveMystery(clue) {
        if (clue === "obvious") {
            console.log("This was an easy case!");
        } else {
            console.log("This one was tricky!");
        }
        return clue.length;
    }

    
    let i = 0;
while (i < 5) {
    console.log("Looping... " + i);
    i++;
}

//qn3
for (let i = 1; i <= 5; i++) {
    console.log("Detective on the case...");
}

for (let i = 1; i <= 5; i++) {
    console.log(`Case ${i} solved!`);
}

//qn4
let suspectName = "Mr. Green";

if (suspectName === "Ms. Scarlet") {
    console.log("Ms. Scarlet is the suspect!");
} else {
    console.log("Keep looking...");
}

if (suspectName === "Ms. Scarlet") {
    console.log("Ms. Scarlet is the suspect!");
} else if (suspectName === "Mr. Green") {
    console.log("Mr. Green is looking suspicious...");
} else {
    console.log("Keep looking...");
}


function findClue(clueText) {
    return clueText[0];
}

console.log(findClue("mysterious clue")); // Output: "m"



