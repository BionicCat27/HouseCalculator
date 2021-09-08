initListeners();

function initListeners() {
    addSubmitListener();
    priceChangeListener();
}

function addSubmitListener() {
    $('#submit-btn').click(function() {
        priceChangeListener();
        calculateSimpleTime();
        calculateMortgagedTime();
    });
}

function priceChangeListener() {
    $('#targetprice').change(function() {
        var price = $(this).val();
        var minDeposit = $('#deposit-result');
        minDeposit.text("Minimum deposit (20%): $" + ((price / 100) * 20));
    });
}

function calculateSimpleTime() {
    var savings = document.getElementById("savings").value;
    var salary = document.getElementById("salary").value;
    var targetprice = document.getElementById("targetprice").value;

    var result = (targetprice-savings) / salary;
    var resultEl = document.getElementById("simple-result");
    resultEl.innerText = "Simple purchase: " + result + " years of saving";
}

function calculateMortgagedTime() {
    var savings = document.getElementById("savings").value;
    var salary = document.getElementById("salary").value;
    var targetprice = document.getElementById("targetprice").value;
    var interestrate = document.getElementById("interest-rate").value;

    var postdepositprice = targetprice - (savings);
    var years = 0;
    while(postdepositprice > 0) {
        years++;
        postdepositprice -= salary;
        postdepositprice = Math.pow(postdepositprice, 1 + (interestrate / 100));
    }

    var result = years;
    var resultEl = document.getElementById("mortgaged-result");
    resultEl.innerText = "Mortgaged purchase: " + result + " years until paid off";
}