
var finances = [
    ['Jan-2010', 20344],
    ['Feb-2010', 34852],
    ['Mar-2010', -1483],
    ['Apr-2010', -29444],
]

// for Q2
var totalProfitLoss = 0
//for Q3
var totalChanges = 0
// so we can track the diffence between the current profit/loss and the previous one
var prevProfitLoss = 0

//for Q4 and Q5
var biggestProfitChange = 0
var biggestProfitChangeDate = ''
var biggestLossChange = 0
var biggestLossChangeDate = ''

for (var i = 0; i < finances.length; i++) {
    var currDate = finances[i][0]
    var currProfitLoss = finances[i][1]

    // for Q2
    //totalProfitLoss += currProfitLoss

    //for Q3
    // get current change
    if (i != 0) { // only do this if we are NOT looking at the first element of the array, as there can be no change for the first element

        // rather than ln 14 and 51 we could access the previous profit/loss like the line below if we wanted to, 'on the fly', but I've removed this as idk if it's complicated.
        // var prevProfitLoss = finances[i-1][1] // if we look at i-1 we look at the previous item in the array. by doing finances[i-1][1] we get the previous profit/loss

        var currChange = currProfitLoss - prevProfitLoss // the change is the current profit/loss - the previos profit/loss
        //for Q4 and Q5
        if (currChange > biggestProfitChange) {
            biggestProfitChange = currChange
            biggestProfitChangeDate = currDate
        }
        //this could be an else if statement, if you've covered that
        else if (currChange < biggestLossChange) {
            biggestLossChange = currChange
            biggestLossChangeDate = currDate
        }
        // this next line might not be necessary. question isn't clear. i.e if we have changes of -100 and 100 is that a total change of 0 or 200? I've assumed the first but uncomment the line if that's wrong
        // currChange = Math.abs(currChange) // the Math.abs() function will take a positive value in case the change is negetaive e.g Math(-100) would be 100. 
        totalChanges += currChange
    }
    //for Q3,4,5
    // this line means the next time the if loop executes we will have acess to the previous profit/loss.
    //note this is outside the if statement, as we want to run this line even when we look at the first item in the array.
    prevProfitLoss = currProfitLoss
}

// 1) Total months = finances.length
// 2) Total profit/loss = totalProfitLoss
// 3) totalChanges/finances.length
// 4) biggestProfitChange & biggestProfitChangeDate
// 5) biggestLossChange & biggestLossChangeDate


var differenceArray = []
var difference = 0
//var currProfitLoss = 0

for (var i = 0; i < finances.length; i++) {
    var currDate = finances[i][0]
    var currProfitLoss = finances[i][1]
}

console.log(totalProfitLoss += currProfitLoss)




for (var i = 0; i < finances.length; i++) {
    //date = finances[i][0]

    profit = month[1]
    //month[0] is the month name
    //month[1] is the month profit
    prevMonth = finances[i - 1]
    if I > 0 { difference = profit - prevMonth[1]; }
    else { difference = profit; }
    differenceArray.push(difference);
}

console.log("Average Change: " + (totalProfitLoss / finances.length).toFixed(2))

var greatestIncrease = 0
if (currProfitLoss > greatestIncrease) {
    greatestIncrease = currProfitLoss
}

var greatestDecrease = 0
if (currProfitLoss > greatestDecrease) {
    greatestDecrease = currProfitLoss
}
//For greatest increase have a variable outside the loop initialised to 0 then if the current profitLoss is greater than that variable, replace it with the current one
//So  like if it is 6 and the currProfitLoss is 8 you’d set the first variable to currProfitLoss
//And the last one is the same but in reverse
//So you’d do like if (currProfitLoss > greatestDecrease) {
//greatestDecrease = currProfitLoss}
//The greatest increase in profits (date and amount) over the entire period.
console.log("The greatest profit increase was in " + "when the increase was " + greatestIncrease)
//* The greatest decrease in losses (date and amount) over the entire period.
console.log("The greatest decrease in profits was in " + "when the decrease was " + greatestDecrease)