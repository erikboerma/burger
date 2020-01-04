$(function () {

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            name: $("#burger").val().trim(),
            devoured: "0"
        };
        console.log(newBurger);

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("new burger added");
                location.reload();
            }
        );
    });


    $(".eat").on("click", function(event) {
        var id = $(this).data("id");
        var newEaten = $(this).data("neweaten") === false;
    
        var newEatenState = {
          devoured:  newEaten
        };
        console.log('id:' + id)
        console.log('eaten:' + newEatenState.devoured)

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatenState
        }).then(
            function () {
                console.log("changed status to", newEaten);
                // Reload the page to get the updated list
                location.reload();
            }
        );

    });

});