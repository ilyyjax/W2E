let walletAddress = null;
let timeWatched = 0;
let tickets = 0;

const walletBtn = document.getElementById("connectWallet");
const walletDisplay = document.getElementById("walletAddress");
const timeDisplay = document.getElementById("timeWatched");
const ticketsDisplay = document.getElementById("tickets");

// Connect wallet function
walletBtn.addEventListener("click", async () => {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      walletAddress = accounts[0];
      walletDisplay.innerText = `Connected: ${walletAddress}`;
    } catch (err) {
      alert("Connection failed!");
    }
  } else {
    alert("Install MetaMask to connect your wallet.");
  }
});

// Track time watched and calculate tickets
setInterval(() => {
  if (walletAddress) {
    timeWatched += 1;
    timeDisplay.innerText = timeWatched;
    // 1 ticket per 60 seconds
    tickets = Math.floor(timeWatched / 60);
    ticketsDisplay.innerText = tickets;
  }
}, 1000);
