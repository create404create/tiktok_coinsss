let selectedCoins = 0;
let currentBalance = 0;

// Username set
function setUsername() {
  const username = document.getElementById("username").value.trim();
  if (username === "") {
    alert("Please enter a username!");
    return;
  }
  document.querySelector(".username-section").classList.add("hidden");
  document.getElementById("balanceSection").classList.remove("hidden");
  document.getElementById("coinShop").classList.remove("hidden");
  document.getElementById("displayUsername").textContent = username;
}

// Select coins
function purchaseCoins(amount) {
  selectedCoins = amount;
  alert(amount + " coins selected!");
}

// Process purchase
function processPurchase() {
  if (selectedCoins === 0) {
    alert("Please select coin package first!");
    return;
  }

  // Show loading
  document.getElementById("loadingOverlay").classList.remove("hidden");
  document.getElementById("loadingText").textContent = "Processing your purchase...";

  setTimeout(() => {
    document.getElementById("loadingOverlay").classList.add("hidden");
    document.getElementById("successOverlay").classList.remove("hidden");

    // Update balance
    currentBalance += selectedCoins;
    document.getElementById("coinBalance").textContent = currentBalance;

    // Reset selected coins
    selectedCoins = 0;

    setTimeout(() => {
      document.getElementById("successOverlay").classList.add("hidden");
    }, 2000);
  }, 2000);
}
