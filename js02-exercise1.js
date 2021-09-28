document.getElementById("calculate-costs").addEventListener("click", calculateCosts);

function calculateCosts() {
    const originalTransactionCost = Number(window.prompt("Enter the original cost of transaction Maria had this month"));
    const numberTransaction = Number(window.prompt("Enter the number of transactions Maria had this month"));    
    // window.alert("Your total costs of this month is $" + totalCost(originalTransactionCost, numberTransaction));
    window.alert(`Your total costs of this month is $${totalCost(originalTransactionCost, numberTransaction)}.`)
}

function totalCost(originalTransactionCost, numberTransaction) {
    const totalTransactionFee = 3 * numberTransaction;
    const totalInterestFee = 0.01 * originalTransactionCost;
    const totalCost = totalTransactionFee + totalInterestFee + originalTransactionCost;
    return totalCost;   
}

