// for of loop on Arrays

var colours=["The primary colours are ","Red","Green","Blue"];
for(var colour of colours){
    console.log(colour);
}

// for of on objects
var car={
    colour:"red",
    brand:"tata",
}

for(var thi of Object.keys(car)){
    console.log(car[thi]);
}


// for of on class for objects
class car{
    colour="red";
    brand="tata";
}

var car1=new car();
for( var iti of Object.keys(car1)){
console.log(car1[iti]);
}