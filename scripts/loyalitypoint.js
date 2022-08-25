let loyality = document.querySelectorAll('.loyality-points');
 

function loyalityCal(){
    
     var x = localStorage.length + 1 ;

    if(x > 3){

        let loyalityPoints = x * 20;
        alert("you have collected"+ loyalityPoints + " loyality points");
        console.log("you have collected",loyalityPoints);
     }

     else{

         alert("please buy more than 3 items to get loyality points");
     }
}

