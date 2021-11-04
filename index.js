

function checkbirthday(){

    let dayofbirth;
  let monthofbirth;
  let nameUser;
  const today_date=new Date();

  const today_day=today_date.getDay();

  const today_month=today_date.getMonth();

  
    dayofbirth=localStorage.getItem("dayOfBirth");

 monthofbirth=localStorage.getItem("monthOfBirth");
nameUser=localStorage.getItem("name");

 if(dayofbirth==today_day && monthofbirth==today_month){

  alert("happy birthday "+nameUser);
 }
}




         
 
 


 document.getElementById("input-btn-save").addEventListener("click", function(){
     
             
          
  let userName=document.getElementById("name-el").value;
    let userInput=document.getElementById("userInput-el").value;

    const birth_date=new Date(userInput);


    const birth_date_day=birth_date.getDate();
    const birth_month=birth_date.getMonth();
    const birth_year=birth_date.getFullYear();



    const today_date=new Date();

    const today_day=today_date.getDay();

    const today_month=today_date.getMonth();


    const today_year=today_date.getFullYear();

  let dayofbirth;
  let monthofbirth;

  let nameLocalStorage;

    
   var calculate_age = 0;

       if(today_month>birth_month){

        calculate_age=today_year-birth_year;
       }

       else if(today_month==birth_month){
         
         if(today_day>=birth_date_day){

              calculate_age=today_year-birth_year;
         }


         else{
             calculate_age=today_year-birth_year-1;
         }

       }
       else{


        calculate_age=today_year-birth_year-1;

       }
     

      


localStorage.setItem("name",userName);
localStorage.setItem("dayOfBirth",birth_date_day);
localStorage.setItem("monthOfBirth",birth_month);
localStorage.setItem("yearOfBirth",birth_year);



 const age=document.getElementById("calculate_age").innerHTML=birth_date;


 dayofbirth=localStorage.getItem("dayOfBirth");

 monthofbirth=localStorage.getItem("monthOfBirth");
 nameLocalStorage=localStorage.getItem("name");


 if(dayofbirth==today_day && monthofbirth==today_month){

  alert("You just turned "+calculate_age+" years old ... HAPPY BIRTHDAY  "+nameLocalStorage);
 }


 


 

    
 })


 

 document.getElementById("input-btn-delete").addEventListener("click",function(){
    
         
    localStorage.clear()

 })
 