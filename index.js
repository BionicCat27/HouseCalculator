initListeners();

function initListeners() {
    addSubmitListener();
}

function addSubmitListener() {
    $('#submit-btn').click(function() {
        calculateSimpleTime();
    });
}

function calculateSimpleTime() {
    var savings = document.getElementById("savings").value;
    var salary = document.getElementById("salary").value;
    var targetprice = document.getElementById("targetprice").value;

    var result = (targetprice-savings) / salary;
    var resultEl = document.getElementById("result");
    resultEl.innerText = "Result: " + result + " years";
}