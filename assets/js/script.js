// check off todo by clicking
$("li").click(function () {
  $(this).toggleClass("completed");
});

// click on X to delete list item
$("span").click(function (e) {
  $(this).parent().fadeOut(500, function (){ 
    $(this).remove();
   });
  e.stopPropagation();
});
