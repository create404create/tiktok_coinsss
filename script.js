let currentUsername = "";
let coinBalance = 0;

// Set username and show coin balance section
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

// Add coins to balance
function buyCoins(amount) {
  coinBalance += amount;
  document.getElementById("coinBalance").innerText = coinBalance;
}

// Buy custom coins
function buyCustomCoins() {
  const customAmount = parseInt(document.getElementById("customCoins").value);
  if (isNaN(customAmount) || customAmount <= 0) {
    alert("Enter a valid coin amount.");
    return;
  }
  coinBalance += customAmount;
  document.getElementById("coinBalance").innerText = coinBalance;
  document.getElementById("customCoins").value = "";
}
