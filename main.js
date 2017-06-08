//    var $this = $(this);
//    $this.toggleClass('buyNowButton');
//    if($this.hasClass('buyNowButton')){
//        $this.text('Buy Now!');
//    } else {
//        $this.text('In Cart!');
//    }
//});
//$("buyNowButton").click( function(){//
//  ("buyNowButton").text
//});
//console.log("lol trying to come up with ideas")

//var trigger = document.getElementById("buyNowButton")
//var modal = document.getElementById("addedItem")
//var close = document.getElementById("closeBtn")

//trigger.addEventListener('click', function addItem(){
//  console.log("buyNowButton clicked")
//  modal.style.visibility="visible";
//});

//close.addEventListener('click', function addItem(){
  //console.log("buyNowButton clicked")
  //modal.style.visibility="hidden";
//});

//function addItem(){
  //onclick = true;
  //document.getElementById("buyNowButton")
//}
//

//$("#buyNowButton").click(function() {
//  $("#addedItem").css("visibility" : "visible");
//});

$('#buyNowButton').click(function() {
    console.log('hey');
  $('#buyNowButton').toggle();
  $('#addedItem').toggle();
});

$("#productDetails").click(function(){
  console.log("test")
  $("#productDetailsText").toggle()
})

$("#sizeAndFit").click(function(){
  console.log("test")
  $("sizeAndFit").toggle()
})

//$("#buyNowButton").click( function())

//$(".addedItem").css("background-color", "yellow")
