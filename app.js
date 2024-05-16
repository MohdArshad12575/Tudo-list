let input = document.getElementById("input-box");
let addBtn = document.getElementById("add-btn");
let listCont = document.querySelector(".list-cont");

addBtn.addEventListener("click", addTask);

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

function addTask() {
  if (input.value === "") {
    alert("Please write something in placeholder!!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    listCont.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  input.value = "";
}

listCont.addEventListener("click", (e) => {
  if (e.target.tagName == "SPAN") {
    deleteFn(e);
  }
});

function deleteFn(e) {
  e.target.parentElement.remove();
}
