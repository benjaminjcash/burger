$(document).ready(function () {    
    $(".change-eaten").on("click", function () {
        $(this).data("devoured") = 0;
        location.reload();
    });

    $(".delete-burger").on("click", function () {
        var id = $(this).data("id");
        $.ajax("/api/burgers/" + id, {
            type: "DELETE",
        }).then(function () {
            location.reload();
        })
    });

    $(".update-burger").on("click", function () {
        var id = $(this).data("id");
        $.ajax("/api/burgers/" + id, {
            type: "PUT"
        }).then(function () {
            location.reload();
        })
    });

    $(".submit").on("click", function () {
        var newBurger = {
            name: $("#submit-field").val().trim()
        }
        $.ajax("/api/create", {
            type: "POST",
            data: newBurger
        }).then(function () {
            location.reload();
        })
    });
})