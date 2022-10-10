let count = 0;
let countEl = document.getElementById("count-display")
let saveEl = document.getElementById("save-el")
console.log(saveEl)
function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
  let count_str = count + " - ";
  saveEl.textContent += count_str
  count = 0;
  countEl.innerText = count
}

