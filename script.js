//Function to Calc and display Tip, Total bill and amount per person
function calculateAndDisplay(){
    //get the values from the html form
    let bill = parseFloat(document.getElementById ('totalBill').value)
    let numOfPpl = ParseInt(document.getElementById ('numOfPeople').value)
    let serviceQuality = document.getElementById ('serviceQuality').value

    //Calculate tip, total Bill and the amount each person knows
    let tip = calculateTip(bill, serviceQuality)
    let totalBill =calculateTotalBill (bill, tip)
    let amtPerPers = calcAmtPerPers(totalBill, numOfPpl)

    //Display the results in the HTML
    document.getElementById('tipResult').innerText = 'Tip:$' = tip.toFixed(2)
    document.getElementById('amtPerPersonResult').innerText = 'Amount per person: $' +amtPerPers.toFixed(2)
}


