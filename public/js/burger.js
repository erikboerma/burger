$(function () {

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            name: $("#burger_name").val().trim(),
            devoured: "0"
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                location.reload();
            }
        );
    });
    $(".devour").on("click", function (event) {
        var id = $(this).data("id");
        var newStatus = $(this).data("devoured");
        
        var eaten = {
            devoured: true
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: eaten
        }).then(
            function () {
                console.log("changed status to", newStatus);
                // Reload the page to get the updated list
                location.reload();
            }
            );
      
    });

});