//inputs:total amount of sale, and amount tendered.
//return:calculate and return change due in dollars, quarters, dimes, nickels and pennies.
function calculateChange(e) {
  var givenAmount = Number(document.getElementById("amount-received").value);
  var amountDue = Number(document.getElementById("amount-due").value);
  var returnValue = givenAmount - amountDue;
  var change = {
    "twenties-output": 0,
    "tens-output": 0,
    "fives-output": 0,
    "dollars-output": 0,
    "quarters-output": 0,
    "dimes-output": 0,
    "nickels-output": 0,
    "pennies-output": 0,
  };
  const coinTypes = [
    "twenties-output",
    "tens-output",
    "fives-output",
    "dollars-output",
    "quarters-output",
    "dimes-output",
    "nickels-output",
    "pennies-output",
  ];
  const coinValues = [20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
  var amount;
  for (var i = 0; i < coinValues.length; i++) {
    amount = Math.floor(returnValue / coinValues[i]);
    if (amount > 0) {
      change[coinTypes[i]] = amount;
      returnValue = (returnValue % coinValues[i]).toFixed(2);
    }
  }
  var returnAmount = (document.getElementById("total-change").innerHTML = `$${
    givenAmount - amountDue
  }`);
  return change;
}
function handleClickEvent(e) {
  let price = document.getElementById("amount-due").value;
  let cash = document.getElementById("amount-received").value;
  let result = calculateChange(price, cash);
  console.log(result);
  document.getElementById("twenties-output").innerHTML =
    result["twenties-output"];
  document.getElementById("tens-output").innerHTML = result["tens-output"];
  document.getElementById("fives-output").innerHTML = result["fives-output"];
  document.getElementById("dollars-output").innerHTML =
    result["dollars-output"];
  document.getElementById("quarters-output").innerHTML =
    result["quarters-output"];
  document.getElementById("dimes-output").innerHTML = result["dimes-output"];
  document.getElementById("nickels-output").innerHTML =
    result["nickels-output"];
  document.getElementById("pennies-output").innerHTML =
    result["pennies-output"];
  document.getElementById("total-change").innerHTML = `$${(
    cash - price
  ).toFixed(2)}`;
}
var changeBtn = document.getElementById("calculate-change");
changeBtn.addEventListener("click", handleClickEvent);
