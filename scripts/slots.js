console.log("hello world");

//get reffrences
const imgWheel1 = document.getElementById("wheel1");
const imgWheel2 = document.getElementById("wheel2");
const imgWheel3 = document.getElementById("wheel3");
const txtCredit = document.getElementById("credit");
const txtWinnings = document.getElementById("winnings");
const txtMessage = document.getElementById("message");
const btnAddCredit = document.getElementById("addCredit");
const btnSpin = document.getElementById("spin");
const btnCollect = document.getElementById("collect");

//declare variables
let credit = 0;
let winnings = 0;
let spining;
let stop1;
let stop2;
let stop3;
let creditsAdded = 0;

//add event listeners
btnSpin.addEventListener("click", spin);
btnCollect.addEventListener("click", collect);
btnAddCredit.addEventListener("click", addCredit);

//on boot
txtCredit.innerText = `Credit: ${credit}`;
txtWinnings.innerText = `Winnings: ${winnings}`;

//when Spin is pressed
function spin() {
    creditsAdded = 0;
    if (credit > 0) {
        console.log("spining");
        credit--;
        txtCredit.innerText = `Credit: ${credit}`;
        spining = Math.ceil(Math.random() * 5);
        stop1 = spining;
        spining = Math.ceil(Math.random() * 5);
        stop2 = spining;
        spining = Math.ceil(Math.random() * 5);
        stop3 = spining;
        imgWheel1.setAttribute("src", `javaImages//${stop1}.png`);
        imgWheel2.setAttribute("src", `javaImages//${stop2}.png`);
        imgWheel3.setAttribute("src", `javaImages//${stop3}.png`);
        if (stop1 == stop2 && stop2 == stop3) {
            winnings += 10;
            imgWheel1.setAttribute("class", " winner1");
            imgWheel2.setAttribute("class", " winner1");
            imgWheel3.setAttribute("class", " winner1");
            txtMessage.innerText = `WINNER!!!!!\nYou Have Won 10 Points!!!`;
        } else if (stop2 == stop3) {
            winnings += 5;
            imgWheel1.setAttribute("class", " winner2");
            imgWheel2.setAttribute("class", " winner2");
            imgWheel3.setAttribute("class", " winner2");
            txtMessage.innerText = `Winner!\nYou Have Won 5 Points!`;
        } else {
            imgWheel1.setAttribute("class", " looser");
            imgWheel2.setAttribute("class", " looser");
            imgWheel3.setAttribute("class", " looser");
            txtMessage.innerText = `you loose!\nUnfortunately you did not win this time.`;
        }
    }
    if (credit == 0) {
        btnSpin.setAttribute("class", "disactive");
        txtMessage.innerText = `add credits to spin`
    }
    if (winnings > 0) {
        btnCollect.setAttribute("class", "active");
    }
    txtWinnings.innerText = `Winnings: ${winnings}`;
}

//when add credit is pressed
function addCredit() {
    creditsAdded++;
    credit++;
    console.log("adding credit");
    btnSpin.setAttribute("class", "active");
    txtCredit.innerText = `Credit: ${credit}`;
    console.log(credit);
    txtMessage.innerText = `${creditsAdded} Credits Added.`;
}

//when collect is pressed
function collect() {
    creditsAdded = 0;
    if (winnings > 0) {
        console.log("cashing out");
        console.log(winnings)
        winnings = 0;
        btnCollect.setAttribute("class", "disactive");
        console.log(winnings);
        txtWinnings.innerText = `Winnings: 0`;
        txtMessage.innerText = `You Have Collected Your Winnings`;
    }
    if (winnings == 0) {
        btnSpin.setAttribute("class", "disactive")
        txtMessage.innerText = `you have no winning to collect`
    }
}

//setinteIval(1000eset
function reset() {
    imgWheel1.setAttribute("class", " blank");
    imgWheel2.setAttribute("class", " blank");
    imgWheel3.setAttribute("class", " blank");
}
