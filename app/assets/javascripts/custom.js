$(document).ready( function() {
    $('.close').click(function(event) {
        event.preventDefault();
        $(this).closest('li').remove();
    });
})
