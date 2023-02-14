var age=10                                                                                             
if(age>=65)                                                               //IF Statement   
{                                                                         
    console.log("You get your income from your pension");                 //if Block
}                                                                                           
else if(age>=18 && age<65)                                                //ELSE IF Statement
{
    console.log("Each month you get a salary");                           //else if Block
}
else if(age<18)                                                           //ELSE IF Statement
{
    console.log("You get an allowance");                                  //else if Block
}
else                                                                      //ELSE Statement
{
    console.log("The value of the age variable is not numerical");        //else Block
}

var day="Sunday";
switch(day)                                                               // Switch statement                          
{
    case "Monday":
        console.log("Do something");                                      // Switch Block
        break;
    case "Tuesday":
        console.log("Do something");
        break;
    case "Wednesday":
        console.log("Do something");
        break;
     case "Thursday":
        console.log("Do something");
        break;
     case "Friday":
        console.log("Do something");
        break;
     case "Saturday":
        console.log("Do something");
        break;
     case "Sunday":
        console.log("Do something");
        break;
    default :
        console.log("There is no such day");
}