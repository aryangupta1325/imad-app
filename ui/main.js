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
// var counter = 0;
var ct1 = document.getElementById("ct1");
var count = document.getElementById("count")  ; 
    ct1.onclick = function(){
     request = new XMLHttpRequest(); 
     request.onreadystatechange = function(){
         if (request.ReadyState ==  XMLHttpRequest.DONE) {
            if (request.status == 200){
                var counter = request.responseText;
                console.log(counter);
                count.innerHTML= counter.toString();
            } 
         }
     }
        
   request.open('GET','http://aryangupta1325.imad.hasura-app.io/counter',true);
   request.send(null);

}