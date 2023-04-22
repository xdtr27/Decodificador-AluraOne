const input = document.querySelector("textarea");
const section_result = document.getElementsByClassName("result");
const requestsDOM = document.querySelector("#section-requests");

let c = 0;

function encrypt() {
  const phrase = input.value;
  requestsDOM.classList.remove("hidden");
  section_result[0].classList.add("hidden");

  const criptography = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
  };

  const encryptedPhrase = phrase
    .split("")
    .map((w) => criptography[w] || w)
    .join("");

  requestsDOM
    .querySelector("#requests")
    .insertAdjacentHTML("afterbegin", divTransform(encryptedPhrase));

}

function decrypt() {
  let phrase = input.value;
  requestsDOM.classList.remove("hidden");
  section_result[0].classList.add("hidden");

  const criptography = {
    ai: "a",
    enter: "e",
    imes: "i",
    ober: "o",
    ufat: "u",
  };

  phrase = phrase.split(" ");

  for (let cript in criptography) {
    phrase = phrase.map((w) => w.replaceAll(cript, criptography[cript]));
  }

  const decryptedPhrase = phrase.join(" ");

  requestsDOM
    .querySelector("#requests")
    .insertAdjacentHTML("afterbegin", divTransform(decryptedPhrase));

  
}
let copp = 'copiar'
function divTransform(phrase) {

  return `
  <div class="request">
    <p>${phrase}</p>
    <button class="button white" onclick="copy(event)">copiar</button>
  </div>`;
}

function copy(event) {
  const button = event.target
  const text = button.parentNode.querySelector('p').textContent
  navigator.clipboard.writeText(text)
  button.textContent = "copiado!"
  button.style.background = "#0a3671"
  button.style.color = "white"
  
  
}


