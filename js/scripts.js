//business logic
var pingPong = function(numberTo){
  var resultArray = [];
  for (var i = 1; i <= numberTo; i++){
    var index = resultArray.indexOf(i);
    if(i % 15 === 0){
      resultArray.slice(index, 0);
      resultArray.push("pingpong");
    }else if (i % 5 === 0){
      resultArray.slice(index, 0);
      resultArray.push("pong");
    }else if (i % 3 === 0){
      resultArray.slice(index, 0);
      resultArray.push("ping");
    }else {
      resultArray.push(i);
    }
  }
    //debugger
    //alert(resultArray);
    //console.log(resultArray);
  return resultArray;
};


//user interface logic
$(document).ready(function(){
  $("form#num").submit(function(event){
    event.preventDefault();
    debugger
    $("#output").empty();
    var numberTo = parseInt($("input#number").val());
    var result = pingPong(numberTo);
    //$(".error").text("");

    result.forEach(function(value){
      $("#output").append('<li>' + value + '</li>');
    });
  });
});
