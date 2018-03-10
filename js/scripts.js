//business logic
var pingPong = function(enterNumber){
  var resultArray = [];
  for (var i = 1; i <= enterNumber; i++){
    if(divisibleNumber(i, 15)){
      resultArray.push("ping pong");
    }else if (divisibleNumber(i, 5)){
      resultArray.push("pong");
    }else if (divisibleNumber(i, 3)){
      resultArray.push("ping");
    }else {
      resultArray.push(i);
    }
  }
    //alert(numberArray);
  alert(resultArray);
}

var divisibleNumber = function (enterNumber, value){
  if (enterNumber % value === 0){
    return true;
  }
}





//user interface logic
$(document).ready(function(){
  $("form#num").submit(function(event){
    event.preventDefault();
    //var numberArray = []
    var enterNumber = parseInt($("input#number").val());
    var result = pingPong(enterNumber);
    $(".error").text("");
    $("ul").empty();
    $(pingPong(input)).forEach(function (value){
      if (value === "ping"){
        $("ul").append("<li class='ping shadow'>" + value + "</li>");
      }else if (value === "pong"){
        $("ul").append("<li class='pong shadow'>" + value + "</li>");
      }else if (value === "ping pong"){
        $("ul").append("<li class='pingPong shadow'>" + value + "</li>");
      // change it into elseonly !}else{$("ul").append("<li>" + value + "</li>");
    }
    });


  });
});
