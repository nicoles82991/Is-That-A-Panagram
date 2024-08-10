const inputEl = document.getElementById("inputEl");
const result = document.getElementById("result");
const userInput = document.getElementById("userInput");
//"the quick brown fox jumped over the lazy dog"

//prettier-ignore
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function isPanagram(str) {
  if (!str || str.trim() === "") {
    result.innerHTML = "";
    return;
  }
  let arr = str.toLowerCase().split("");
  for (let i = 0; i < alphabet.length; i++) {
    if (!arr.includes(alphabet[i])) {
      result.innerHTML = `<p id="false">That is a not panagram!</p>`;
      return;
    }
  }
  result.innerHTML = `<p id="true">That is a panagram!</p>`;
}

inputEl.addEventListener("input", function () {
  isPanagram(inputEl.value);
});
