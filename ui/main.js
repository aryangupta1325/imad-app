console.log('Loaded!');
var element = document.getElementById("maintext");
element.innerHTML= "New value";

var img = document.getElementById("modi");
var marginLeft= 0;
function moveRight(){
    marginLeft = marginLeft +10;
    img.style.marginLeft = marginLeft + "px";
}
img.onclick = function(){
    var interval = setInterval(moveRight,100);
}
var counter = 0;
var ct1 = document.getElementById("ct1");
ct1.onclick = function(){
    counter = counter =1 ;

}