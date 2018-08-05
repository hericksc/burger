// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $("body").on("click", ".devour-burger", function(event) {
      var id = $(this).data("id");
      var burger_name = $(this).data("newburger");
  
      var newburger = {
        id: id,
        devoured: (burger_name == 1 ? 0 : 1)
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newburger
      }).then(
        function() {
          console.log("Burger added", burger_name);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
});
  
      // Send the POST request.
    //   $.ajax("/api/burgers", {
    //     type: "POST",
    //     data: burger_name
    //   }).then(
    //     function() {
    //       console.log("created new burger");
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    // });
  
    // $(".devour-burger").on("click", function(event) {
    //   var id = $(this).data("id");
  
    //   // Send the DELETE request.
    //   $.ajax("/api/burgers/" + id, {
    //     type: "DELETE"
    //   }).then(
    //     function() {
    //       console.log("deleted burgers", id);
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    // });
  
  