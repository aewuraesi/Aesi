// FIRST BUTTON
let button = document.querySelector("#myBtn");

button.addEventListener("click", event => {
  const displayDate = () => {
    document.getElementById('date').innerHTML =  Date();
  }
  displayDate();
});

// SECOND BUTTON
const displayDate1 = () => {
  document.getElementById('date1').innerHTML = Date();
}
document.getElementById('myBtn1').onclick = displayDate1;

//THIRD BUTTON
let button2 = document.querySelector("#myBtn2");
button2.addEventListener("mouseover", event => {
  const displayDate2 = () => {
    document.getElementById('date2').innerHTML =  Date();
  }
  displayDate2();
});
button2.addEventListener("mouseout", event => {
  const displayDate2 = () => {
    document.getElementById('date2').innerHTML = "";
  }
  displayDate2();
});

document.getElementById('myBtn3').addEventListener("click", function myDate() {
    document.getElementById('date3').innerHTML = Date();

});
//CHANGING BACKGROUND COLOR ON MOUSEOVER
document.getElementById('date3').addEventListener("mouseover", function myDateColour() {

    document.getElementById('date3').style.backgroundColor = "red";
});
document.getElementById('date3').addEventListener("mouseout", function myNoDateColour() {

    document.getElementById('date3').style.backgroundColor = "white";
});
