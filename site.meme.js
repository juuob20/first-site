const PI = 3.14159;
let radius;
let volume;
let length;







document.getElementById("mySubmit").onclick = function(){
   radius = document.getElementById("myText").value
   radius = Number(radius);
   length = document.getElementById("myText").value
   length = Number(length);
   volume = PI * radius * radius * length;
   document.getElementById("myH3").textContent = volume + " Cubic Dick-o-meters";

}