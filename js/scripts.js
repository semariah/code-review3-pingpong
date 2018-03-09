$(document).ready(function(){
  $("form#num").submit(function(event){
    event.preventDefault();
    var enterNumber = parseInt($("input#number").val());
    var result = pingPong(enterName);
    $("#result").text(result);
  });
});
