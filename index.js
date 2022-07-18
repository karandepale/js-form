
//SET ERROR FUNCTION IMPLEMENTATION :-
function setError(id , errormsg){
   let  element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = errormsg  ;
}

//REMOVE ALL THE ERRORS WHEN REQUIRED FIELD MATCHED :-
function clearError (){
    errorss = document.getElementsByClassName('formerror');
    for(let item of errorss){
        item.innerHTML = "";
    }
}



function validateform(){

    //initial value of the submission is true .
    var returnvalue = true;
    clearError();


    //validate the username field :-
    var name = document.forms["myform"]["fname"].value ;    //it will get all the forms from document
    if(name.length < 5){
        setError ( "name" , "*name is too short" )
        returnvalue = false ;
    }
    if(name.length ==0){
        setError("name" , "*name should not be empty");
        returnvalue = false ;
    }
    



//VALIDATION OF EMAIL FIELD :-
var email = document.forms["myform"]["femail"].value ;    //it will get all the forms from document
if(name.length < 5){
    setError ( "email" , "*Email is too short" )
    returnvalue = false ;
}



//VALIDATION OF PHONE FIELD :-
var phone = document.forms["myform"]['fphone'].value ;
if(phone.length != 10){
    setError("phone" , "*fill 10 digits");
    returnvalue = false ;
}



//VALIDATION OF PASSWORD FIELD :-
var password = document.forms["myform"]["fpassword"].value;
if(password.length < 6 ){
    setError("password" , "*password length should be 6 ");
    returnvalue = false;
}





//VALIDATION OF CONFIRM PASSWORD FIELD :-
var cpassword = document.forms["myform"]["fcpassword"].value;
if(cpassword != password ){
    setError("cpassword" , "*password not matched");
    returnvalue = false;
}



return returnvalue;
}



