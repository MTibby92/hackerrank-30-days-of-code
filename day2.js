function main(mealCost, tipPercent, taxPercent) {
	// Write your code here
    var tipAmount = (mealCost * (tipPercent/100)).toFixed(2)
    var taxAmount = (mealCost * (taxPercent/100)).toFixed(2)
    var total = mealCost + parseFloat(tipAmount) + parseFloat(taxAmount)
    total = Math.round(total)
    // Use console.log() to print to stdout
    console.log('The total meal cost is',total, 'dollars.')
}

main(12.00, 15, 8.25)