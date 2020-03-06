$(".btn1").click(function(){
    var place = $(".place").val(); 
    console.log(place); 
    //open the console to see what is being stored in this varibale. You don't need to this for each input variable
    $(".placeVal").text(place);
});
$(".btn2").click(function(){
    var Adjective = $(".adjective1").val(); console.log(Adjective); 
      $(".adjective1Val").text(Adjective);
});
$(".btn3").click(function(){
    var Noun = $(".Noun1").val(); 
    console.log(Noun); 
   $(".noun1Val").text(Noun);
});
$(".btn4").click(function(){
    var Situation = $(".Badsituation").val(); 
    console.log(Situation); 
   $(".badSitVal").text(Situation);
});
$(".btn5").click(function(){
    var Verb = $(".Verb1").val(); 
    console.log(Verb); 
   $(".verb1Val").text(Verb);
});
$(".btn6").click(function(){
    var secondplace = $(".place2").val(); 
    console.log(secondplace); 
   $(".place2Val").text(secondplace);
});







