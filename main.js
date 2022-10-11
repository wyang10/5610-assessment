
const btn = document.querySelector("#btnAddOne");
const ul = document.querySelector("ul#itemsList");

function addOne(content) {
  const li = document.createElement("li");
  li.innerText = content;

  ul.appendChild(li);
}

function onClick(evt) {
  console.log("OnClick was called", evt);

  if (evt.shiftKey) {
    addOne("I want control!!!!");
  } else {
    addOne("Whatttt");
  }
}

btn.addEventListener("click", onClick);
