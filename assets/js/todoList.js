//Check off specific Todos by Clicking
$("ul").on("click", "li", function () {
    // if ($(this).css("color") === "rgb(128, 128, 128)") {
    //     $(this).css({
    //         color: "black",
    //         textDecoration: "none"
    //     });
    // } else {
    //     $(this).css({
    //         color: "gray",
    //         textDecoration: "line-through"
    //     });
    // }
    $(this).toggleClass("completed");
});

//Click on X to delete Todos
$("ul").on("click", "span", function (event) {
    //.parent will remove the parent element too i.e. li
    $(this).parent().fadeOut(500, function () {
        //here this is working on fadeout feature for li
        $(this).remove();
    });
    //this will prevent an event from bubbling up
    //means calling its parent elements functions like here strikethrough of a li
    event.stopPropagation();
});

//for inputing new todos
$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        //grabbing new todos text from input
        var todoText = $(this).val();
        //to clear the input
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class=\"fas fa-trash-alt\"></i></span> "+ todoText +"</li>")
    }
});

$(".fa-plus").click(function () {
    $("input[type='text']").fadeToggle();
});