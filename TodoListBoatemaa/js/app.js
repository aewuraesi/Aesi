//In the second version of the

//get the button
let button = document.querySelector("#add");

//get the unordered list tag
let list = document.querySelector("#todolist");

//add click event listener to the button
button.addEventListener("click", event => {
  //selecting the value of the tag we are working on
  let val = document.querySelector("#todo").value;

  //this creates a new li element within the unordered list
  let elem = document.createElement("li");

  //sets the inner HTML of the li element as the val
  elem.innerText = val;

  //add remove event listener to the list
  elem.addEventListener("click", remove);

  //appends the element in the unordered list
  list.appendChild(elem);
});

function remove(event) {
  let elem = event.target;
  list.removeChild(elem);
  console.log(elem);
}
