let balance = 1000;

function deposit() {
  let amount = parseFloat(document.getElementById("amount").value);
  let message = document.getElementById("message");

  if (isNaN(amount) || amount <= 0) {
    message.textContent = "Enter a valid deposit amount!";
    message.style.color = "red";
  } else {
    balance += amount;
    document.getElementById("balance").textContent = "₹" + balance;
    message.textContent = "Successfully deposited ₹" + amount;
    message.style.color = "green";
  }
  document.getElementById("amount").value = "";
}

function withdraw() {
  let amount = parseFloat(document.getElementById("amount").value);
  let message = document.getElementById("message");

  if (isNaN(amount) || amount <= 0) {
    message.textContent = "Enter a valid withdrawal amount!";
    message.style.color = "red";
  } else if (amount > balance) {
    message.textContent = "Insufficient balance!";
    message.style.color = "red";
  } else {
    balance -= amount;
    document.getElementById("balance").textContent = "₹" + balance;
    message.textContent = "Successfully withdrawn ₹" + amount;
    message.style.color = "green";
  }
  document.getElementById("amount").value = "";
}
