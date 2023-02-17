// Creating of object 1st method

var car = {};                                       //  Object creating

car.mileage = 98765;                                //  Object values                
car.color = "red";                                  //  Object values            

car.turnTheKey = function() {                       //  function of object from outside
    console.log("The engine is running")            //
}                                                   //
car.lightsOn = function() {                         //
    console.log("The lights are on.")               //
}

console.log(car);                                   // display object
car.turnTheKey();                                   // Display method in object
car.lightsOn()                                      //


// Creation of object 2nd method

var car = {                                          //  Object creating

    mileage : 98765,                                 //  Object values                
    color : "red",                                   //  Object values            

    turnTheKey () {                                  //  function of object from outside
        console.log("The engine is running")         //  
    },                                               //
    lightsOn () {                                    //
        console.log("The lights are on.")            //
    }
};

console.log(car);                                    // display object
car.turnTheKey();                                    // Display method in object
car.lightsOn()                                       //
