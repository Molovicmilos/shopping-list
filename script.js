const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
const clearBtn = document.getElementById("clear");
const itemFilter = document.getElementById("filter");
const formBtn = itemForm.querySelector("button");

function addItem(e) {
  e.preventDefault();
  const newItem = itemInput.value;

  //Validate input
  if (newItem === "") {
    alert("Please add an item");
    return;
  }

  // Create list item
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(newItem));
  //Create delete button
  const delBtn = createBtn("remove-item btn-link text-red");
  li.appendChild(delBtn);
  //Add to DOM
  itemList.appendChild(li);
  itemInput.value = "";
}

function createBtn(classes) {
  const button = document.createElement("button");
  button.className = classes;
  const icon = createIcon("fa-solid fa-xmark");
  button.appendChild(icon);
  return button;
}

function createIcon(classes) {
  const icon = document.createElement("i");
  icon.className = classes;
  return icon;
}

//event listeners

itemForm.addEventListener("submit", addItem);
