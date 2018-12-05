// check off todo by clicking
$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

// click on X to delete list item
$("ul").on("click", "span", function (e) {
  $(this).parent().fadeOut(500, function (){ 
    $(this).remove();
  });
  e.stopPropagation();
});

// create new todo
$("input[type='text']").keypress(function(e) { 
  if(e.which === 13){
    // take the value from input
    var todoText = $(this).val();
    // clearout form input
    $(this).val("");
    // create new list item with value
    $("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span> " + todoText + "</li>");
  }
});

// toggle todo input
$(".fa-plus-square-o").click(function() { 
  $("input[type='text']").fadeToggle();
});
