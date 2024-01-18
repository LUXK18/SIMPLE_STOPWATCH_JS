const segEl = document.getElementById("segundos");
const mlsEl = document.getElementById("milesegundos");

let seg = 0;
let mls = 0;
let pause = true;

function ativarContagem() {
  
  mls = 0;
  seg = 0;

  interval = setInterval(() => {
    mls += 10;

    if (mls == 1000) {
      seg++;
      mls = 0;
    }

    segEl.textContent = seg;
    mlsEl.textContent = mls;
  }, 10);

}

function pararContagem() {
  clearInterval(interval);
}
