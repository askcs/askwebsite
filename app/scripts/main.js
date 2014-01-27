console.log('\'Allo \'Allo!');


if ($( ".item1").hasClass("active")) {
    $( "#photo" ).delay(1000).fadeOut( 1000, function() {
        $(".devices").show(500);
    });
}



/*
$( "#test" ).click(function() {
    $( "#photo" ).fadeOut( 1000, function() {
// Animation complete.
    });
});*/
