
/*
// Get the modal
var modal = document.getElementById("open");

// Get the button that opens the modal
var slike = document.getElementById("slike");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
slike.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

*/



const open = document.getElementById("box");
const slike = document.getElementById("slike");
const close = document.getElementById("close");

open.addEventListener("click", () => {
  slike.classList("show");
});

close.addEventListener("click", () => {
  slike.classList.remove("show");
});

