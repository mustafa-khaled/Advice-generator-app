const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");
const diceBtn = document.getElementById("dice");
const loader = document.getElementById("loader");

window.addEventListener("load", showQuote);
diceBtn.addEventListener("click", showQuote);

async function showQuote() {
    loader.classList.remove("hidden");
    adviceText.innerText = "";
    const response = await fetch("https://api.adviceslip.com/advice");
    const { slip } = await response.json();
    adviceId.innerText = `Advice #${slip.id}`;
    adviceText.innerText = `"${slip.advice}"`;
    loader.classList.add("hidden");
}
