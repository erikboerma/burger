
    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            name: $("#burger").val().trim()
            };
        console.log(newBurger);

        // Send the POST request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("new burger added");
                location.reload();
            }
        ).catch(error => console.log(error))
    });


    $(document).on("click", ".eat", function(event) {
        event.preventDefault();
        var id = $(this).data("id");
        // var newEaten = $(this).data("neweaten") = false;
    
        var newEatenState = {
          devoured:  true
        };
        console.log('id:' + id)
        console.log('eaten:' + newEatenState.devoured)

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatenState
        }).then(
            function () {
                console.log("changed status to", newEatenState);
                // Reload the page to get the updated list
                location.reload();
            }
        );

    });




