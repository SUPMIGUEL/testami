$(function() {

  $("#less").click(function(e){
    document.getElementById("slide").value--;
    var display = document.getElementById("chosen");
    display.innerHTML=document.getElementById("slide").value;
  });

  $("#plus").click(function(e){
    document.getElementById("slide").value++;
    var display = document.getElementById("chosen");
    display.innerHTML=document.getElementById("slide").value;
  });
});

function showVal(val){
  var display = document.getElementById("chosen");
  display.innerHTML=document.getElementById("slide").value;
}