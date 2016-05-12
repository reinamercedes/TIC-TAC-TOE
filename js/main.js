//al hacerle un click aparece el X
$(document).ready(function() {
	$(".userBox").click(function() {
		$(this).html("X");
	});
});

//al hacerle dobleclick aparece el O
$(document).ready(function() {
	$(".userBox").dblclick(function() {
		$(this).html("O");
	});
});

//recargar el juego 
$(document).ready(function() {
        $('#recargar').click(function() {
            location.reload();
     });
});

//empezar con la X 
// $(document).ready(function() {
	
// });


