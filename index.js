initListeners();

var savingsAmount;
var contributionAmount;
var targetHousePrice;
var interestRateAmount;

var minDepositValue;

function initListeners() {
    addSubmitListener();
}

function addSubmitListener() {
    $('#submit-btn').click(function() {
        calculateResults();
    });
}

function calculateResults() {

    var result = document.getElementById("results");
    result.innerText = "";

    //Get values
    savingsAmount = parseFloat(document.getElementById("savings").value);
    contributionAmount = parseFloat(document.getElementById("contribution").value);
    targetHousePrice = parseFloat(document.getElementById("targetprice").value);
    interestRateAmount = parseFloat(document.getElementById("interest-rate").value);

    //Calculate minimum deposit
    minDepositValue = (targetHousePrice / 100) * 20;
    result.innerText += "Minimum deposit (20%): $" + (minDepositValue) + "\n";

    //Check minimum deposit
    if(minDepositValue > savingsAmount) {
        //Calculate time until deposit achieved
       var timeTilDeposit = (minDepositValue - savingsAmount) / contributionAmount;
       result.innerText += "Savings amount is less than minimum deposit. It will take " + timeTilDeposit + " years to save for the deposit.\n";
       savingsAmount = 1;
    }

    //Check savings sufficient
    if(savingsAmount >= targetHousePrice) {
        var difference = savingsAmount - targetHousePrice;
        result.innerText += "You could buy this house for " + targetHousePrice + " and still have " + difference + " left over.\n";
    }

    //Calculate time until mortgage paid off
    var topVal = parseFloat(contributionAmount / (contributionAmount - (savingsAmount * interestRateAmount)));
    var top = parseFloat(Math.log10(Math.abs(topVal)));
    var bottomVal = parseFloat(1 + (interestRateAmount / 100));
    var bottom = parseFloat(Math.log10(Math.abs(bottomVal)));
    var timeUntilPaidOff = parseFloat(Math.abs(top / bottom));

    alert(top + " " + bottom);

    result.innerText += "Time until paid off: " + timeUntilPaidOff + " years \n";

}