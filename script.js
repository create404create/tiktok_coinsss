let selectedCoins = null;

document.querySelectorAll(".coin-box").forEach(box => {
  box.addEventListener("click", () => {
    document.querySelectorAll(".coin-box").forEach(b => b.classList.remove("active"));
    box.classList.add("active");
    selectedCoins = box.dataset.coins;
  });
});

document.getElementById("purchaseBtn").addEventListener("click", () => {
  const cardNumber = document.getElementById("cardNumber").value.trim();
  const expiry = document.getElementById("expiry").value.trim();
  const cvv = document.getElementById("cvv").value.trim();

  if (!selectedCoins) {
    alert("Please select a coin package!");
    return;
  }

  if (cardNumber.length !== 16 || expiry.length !== 5 || cvv.length !== 3) {
    alert("Please enter valid card details!");
    return;
  }

  document.getElementById("loader").style.display = "block";
  document.getElementById("successMessage").style.display = "none";

  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("successMessage").style.display = "block";
  }, 2000); // 2 sec loading
});
