const loader = document.getElementById("loader");
const bitsEl = document.getElementById("bits");
const KbpsEl = document.getElementById("Kbps");
const MbpsEl = document.getElementById("Mbps");
const btnEl = document.getElementById("btn");

function calculateSpped(){
  // Slower loader
  loader.style.display = 'block';
  bitsEl.textContent = "0";
  KbpsEl.textContent = "0";
  MbpsEl.textContent = "0";
  btnEl.disabled = true;
  btnEl.textContent = 'Testing...';

  setTimeout(() => {
    // Generate random fake Mbps speed
    let mbps = (Math.random() * (1000 - 100) + 100).toFixed(2);
    let kbps = (mbps * 1024).toFixed(1);
    let bits = (kbps * 1024).toFixed(2);

    // Show result

    MbpsEl.textContent = mbps;
    KbpsEl.textContent = kbps;
    bitsEl.textContent = Number(bits).toLocaleString();

    loader.style.display = "none";
    btnEl.disabled = false;
    btnEl.textContent = "Re-Check Network Speed"
  },2500)
}

btnEl.addEventListener('click', calculateSpped);