let currentUsername = "";
let coinBalance = 0;

// Set username
function setUsername() {
  const input = document.getElementById("usernameInput").value.trim();
  if (input === "") {
    alert("Please enter a username.");
    return;
  }
  currentUsername = input;
  document.getElementById("displayUsername").innerText = currentUsername;
  document.getElementById("userInfo").style.display = "block";
  document.getElementById("coinsSection").style.display = "block";
}

// Buy coins
function buyCoins(amount) {
  coinBalance += amount;
  document.getElementById("coinBalance").innerText = coinBalance;
  alert(`Purchased ${amount} coins successfully!`);
}

// Custom buy
function buyCustomCoins() {
  const customAmount = parseInt(document.getElementById("customCoins").value);
  if (isNaN(customAmount) || customAmount <= 0) {
    alert("Enter a valid coin amount.");
    return;
  }
  coinBalance += customAmount;
  document.getElementById("coinBalance").innerText = coinBalance;
  alert(`Purchased ${customAmount} coins successfully!`);
  document.getElementById("customCoins").value = "";
}
