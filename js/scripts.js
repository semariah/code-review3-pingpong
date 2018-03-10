//business logic
var pingPong = function(enterNumber){
    alert(numberArray);

}





//user interface logic
$(document).ready(function(){
  $("form#num").submit(function(event){
    event.preventDefault();
    var numberArray = []
    var enterNumber = parseInt($("input#number").val());
    var result = pingPong(enterNumber);
    $("#result").text(result);
  });
});
