
function calculate() {
    let billAmount = document.querySelector("#amount").value;
    let totalPeople = document.querySelector("#people").value;

    let estimatedTip = document.querySelector("#service").value;
    let tipCalculate = Math.round(billAmount * estimatedTip) / totalPeople;
    tipCalculate.toFixed(2);
    document.querySelector("#showData").innerHTML = `TIP AMOUNT <br> ${tipCalculate}Rs. <br> PER PERSON`;

    document.querySelector("#amount").value = "";
    document.querySelector("#people").value = "";
    document.querySelector("#service").value = "";


}