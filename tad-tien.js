$( document ).ready(function() {
    $(".tad-tien").on("focus", function() {
        $(this).val("")
    });
    $(".tad-tien").on("blur", function() {
        var a = $(this).val().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
        $(this).val("₫" + a)
    });
      
});
