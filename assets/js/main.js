// get input value
function getInput(id) {
  const input = document.getElementById(id).value;
  const inputValue = parseFloat(input);
  return inputValue;
}

// get total expense function
function getTotalExpense() {
  const foodValue = getInput("food-expense");
  const rentValue = getInput("rent-expense");
  const clothValue = getInput("cloth-expense");
  if (foodValue < 0 || rentValue < 0 || clothValue < 0) {
    alert("Please input positive value");
  } else if (isNaN(foodValue) || isNaN(rentValue) || isNaN(clothValue)) {
    alert("Please enter positive number");
  } else {
    const totalExpense = foodValue + rentValue + clothValue;
    return totalExpense;
  }
  console.log(foodValue.length)
}

// calculate balance handler
const calculateBtn = document.getElementById("btn-calculate");
calculateBtn.addEventListener("click", function () {
  const incomeValue = getInput("income-amount");
  console.log("income", incomeValue);
  if (isNaN(incomeValue)) {
    alert("empty");
  } else {
    const totalExpense = getTotalExpense();
    if (typeof totalExpense == "undefined") {
      console.log("0");
    } else {
      const Balance = incomeValue - totalExpense;
      document.getElementById("expenses").innerText = totalExpense;
      document.getElementById("current-balance").innerText = Balance;
      // document.getElementById("food-expense").value = "";
    }
  }
});

// saving event hanlder
const savingBtn = document.getElementById("saving-button");
savingBtn.addEventListener("click", function () {
  const incomeValue = getInput("income-amount");
  const savingAmountValue = getInput("saving-amount");
  const savingAmount = (incomeValue * savingAmountValue) / 100;
  const totalExpense = getTotalExpense();
  const Balance = incomeValue - totalExpense;
  const newBalance = Balance - savingAmount;
  if (savingAmount > Balance) {
    alert("balance must be greater than saving");
    document.getElementById("saving-amount").value = "";
  } else {
    document.getElementById("saving-text").innerText = savingAmount;
    const remainingBalance = (document.getElementById(
      "remaining-balance"
    ).innerText = newBalance);
  }
});
