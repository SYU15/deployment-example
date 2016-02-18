$(document).ready(function(){
  

  $("#addButton").click(function(){
    var listVal = $("#listInput").val();
    console.log(listVal);
    $.ajax({
      url: "/list",
      method: "POST",
      data: {"listItem": listVal}
    }).done(function() {
      console.log("success");
    });
  });

});


// $.ajax({
//   url: "/list",
//   context: document.body
// }).done(function() {
//   $( this ).addClass( "done" );
// });
