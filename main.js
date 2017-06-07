addedItem
console.log("lol trying to come up with ideas")

var trigger = document.getElementById("buyNowButton")
var modal = document.getElementById("addedItem")
var close = document.getElementById("closeBtn")

trigger.addEventListener('click', function addItem(){
  console.log("buyNowButton clicked")
  modal.style.visibility="visible";
});

close.addEventListener('click', function addItem(){
  console.log("buyNowButton clicked")
  modal.style.visibility="hidden";
});
