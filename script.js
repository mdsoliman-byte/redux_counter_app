// select elements from ui 
const display = document.getElementById("display")
const increment = document.getElementById("increment")
const deincrement = document.getElementById("deincrement");

// inital count 
let count = 0;


// add eventListner 
increment.addEventListener("click", () => {
    count++;
    display.innerHTML = count;

});
deincrement.addEventListener("click", () => {
    count--;
    display.innerHTML = count

})



