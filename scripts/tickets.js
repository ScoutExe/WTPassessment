console.log("hello world")

//refrences
const slcShow = document.getElementById("show");
const numNumber = document.getElementById("number");
const rdoPost = document.getElementById("post");
const rdoBoxOffice = document.getElementById("boxOffice");
const rdoEMail = document.getElementById("eMail");
const btnPay = document.getElementById("pay");
const txtPrice = document.getElementById("price");
const txtDetails = document.getElementById("detail");

//listeners
slcShow.addEventListener("change", calc);
numNumber.addEventListener("change", calc);
rdoPost.addEventListener("change", calc);
rdoBoxOffice.addEventListener("change", calc);
rdoEMail.addEventListener("change", calc);
btnPay.addEventListener("click", btnOn);

//varibles
let shwPrice = 0;
let dlvPrice = 0;
let totPrice1 = 0;
let totPrice2 = 0;

//clac
function calc() {
    console.log("function")

    switch (slcShow.value) {
        case "phantom":
            shwPrice = 79;
            shwName = "The Phantom Of The Opera";
            break;
        case "hamilton":
            shwPrice = 85;
            shwName = "Hamilton";
            break;
        case "lionKing":
            shwPrice = 67;
            shwName = "The Lion King";
            break;
        case "missSigon":
            shwPrice = 83;
            shwName = "Miss Sigon";
            break;
    }

    console.log(`shwPrice: ${shwPrice}`);

    if (rdoPost.checked) {
        dlvPrice = 3.99;
        dlvName = "You have elected to have your Tickets posted tog you for a charge of £3.99";
    } else if (rdoBoxOffice.checked) {
        dlvPrice = 1.50;
        dlvName = "You have elected to pick up your tickets from the BoxOfice for a charge of 1.50";
    } else {
        dlvPrice = 0;
        dlvName = "your Tickets will be Emailed to you shortly for no extra charge";
    }

    console.log(`dlvPrice: ${dlvPrice}`);

    console.log("math");
    console.log(`numNumber: ${numNumber.value}`);

    totPrice1 = (shwPrice * numNumber.value) + dlvPrice;
    //totPrice1 = toPrice1);
    console.log(`totPrice1: ${totPrice1.toFixed(2)}`);

    if (numNumber.value >= 6 && numNumber.value < 10) {
        totPrice2 = totPrice1 - (totPrice1 * 0.1);
    }
    else if (numNumber.value >= 10) {
        totPrice2 = totPrice1 - (totPrice1 * 0.15);
    } else {
        totPrice2 = totPrice1
    }
    console.log(`totPrice2: ${totPrice2.toFixed(2)}`);

    totPrice2 = parseFloat(totPrice2);
    txtPrice.innerText = `Total Price: £${totPrice2.toFixed(2)}`;
}

//btn
function btnOn() {
    btnPay.setAttribute("class", "disactive");
    setInterval(btnOff, 1000);
    txtDetails.innerText = `you have booked ${numNumber.value} tickets for ${shwName} at £${shwPrice} each. \n ${dlvName}.`
}

function btnOff() {
    btnPay.setAttribute("class", "active");
}