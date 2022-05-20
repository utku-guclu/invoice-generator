const info = document.querySelector(".info");
const totalCash = document.getElementById("total-cash");
const washCash = document.getElementById("wash-cash");
const mowCash = document.getElementById("mow-cash");
const pullCash = document.getElementById("pull-cash");
const washBtn = document.getElementById("wash-btn");
const mowBtn = document.getElementById("mow-btn");
const pullBtn = document.getElementById("pull-btn");

const invoice = document.getElementById("invoice");

const washSection = document.getElementById("wash-row");
const mowSection = document.getElementById("mow-row");
const pullSection = document.getElementById("pull-row");

const remove = document.getElementsByClassName("remove");

let total = 0;
let trashItems = [];

// remove
function del() {
  Array.from(remove).forEach((element) => {
    element.addEventListener("click", (e) => {
      trashItems.push(e.target.parentNode.parentNode.id);
      e.target.parentNode.parentNode.innerHTML = "";
      trashItems.forEach((item) => {
        if (item === "wash-row") {
          total -= washCashStore;
          washCashStore = 0;
        } else if (item === "mow-row") {
          total -= mowCashStore;
          mowCashStore = 0;
        } else if (item === "pull-row") {
          total -= pullCashStore;
          pullCashStore = 0;
        }
      });

      render();
    });
  });
}

// wash button
washCashStore = 0;
washBtn.addEventListener("click", () => {
  // if wash car isn't there, create one. else increment
  washCashStore += 10;
  washAction();
  render();
});

// mow button
mowCashStore = 0;
mowBtn.addEventListener("click", () => {
  mowCashStore += 20;
  mowAction();
  render();
});

// pull button
pullCashStore = 0;
pullBtn.addEventListener("click", () => {
  // if wash car isn't there, create one. else increment
  pullCashStore += 30;
  pullAction();
  render();
});

function washAction() {
  washSection.innerHTML = ` <div class="item">
        <h3 id="wash" class="job">Wash Car</h3>
        <span class="remove">Remove</span>
        </div>
        <h3>$<span id="wash-cash" class="amount">${washCashStore}</span></h3>`;
}

function pullAction() {
  pullSection.innerHTML = ` <div class="item">
          <h3 id="pull" class="job">Pull Car</h3>
          <span class="remove">Remove</span>
          </div>
          <h3>$<span id="pull-cash" class="amount">${pullCashStore}</span></h3>`;
}

function mowAction() {
  mowSection.innerHTML = ` <div class="item">
        <h3 id="mow" class="job">Mow Car</h3>
        <span class="remove">Remove</span>
        </div>
        <h3>$<span id="mow-cash" class="amount">${mowCashStore}</span></h3>`;
}

function reset() {
  mowCashStore = washCashStore = pullCashStore = 0;
  mowAction();
  washAction();
  pullAction();
  render();
}

invoice.addEventListener("dblclick", reset);

function render() {
  total = mowCashStore + washCashStore + pullCashStore;

  mowCash.innerHTML = mowCashStore;
  washCash.innerHTML = washCashStore;
  pullCash.innerHTML = pullCashStore;
  totalCash.innerHTML = total;
  del();
}

render();
