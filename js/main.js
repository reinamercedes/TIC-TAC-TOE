//al hacerle un click aparece el X - color azul
$(document).ready(function() {
	var play = 0;
	$(".userBox").click(function() {
		play++;
		if(play%2===0) {
			$(this).html("O");
			$(this).css({"background-color":"#FF6862","color":"white"});
			// $(this).prop("disabled",true); Solo desabilita button
		} else {
			$(this).html("X");
			$(this).css({"background-color":"#B0DEED","color":"white"});
		}

		var box1 = $("#1").text();
		var box2 = $("#2").text();
		var box3 = $("#3").text();
		var box4 = $("#4").text();
		var box5 = $("#5").text();
		var box6 = $("#6").text();
		var box7 = $("#7").text();
		var box8 = $("#8").text();
		var box9 = $("#9").text();

		if(box1 == box2 && box1 == box3 && box2 == box3) {
			$(".respuesta").html("El ganador es " + box1 + "." + "<br/>" + "Vamos a jugar otra vez!");
			$(".respuesta").css({"text-align":"center","font-size":"5em","margin-bottom":"4%"});
		} else if(box4 == box5 && box4 == box6 && box5 == box6) {
			$(".respuesta").html("El ganador es " + box1 + "." + "<br/>" + "Vamos a jugar otra vez!");
			$(".respuesta").css({"text-align":"center","font-size":"5em","margin-bottom":"4%"});
		} else if(box7 == box8 && box7 == box9 && box8 == box9) {
			$(".respuesta").html("El ganador es " + box1 + "." + "<br/>" + "Vamos a jugar otra vez!");
			$(".respuesta").css({"text-align":"center","font-size":"5em","margin-bottom":"4%"});
		} else if(box1 == box4 && box1 == box7 && box4 == box7) {
			$(".respuesta").html("El ganador es " + box1 + "." + "<br/>" + "Vamos a jugar otra vez!");
			$(".respuesta").css({"text-align":"center","font-size":"5em","margin-bottom":"4%"});
		} else if(box2 == box5 && box2 == box8 && box5 == box8) {
			$(".respuesta").html("El ganador es " + box1 + "." + "<br/>" + "Vamos a jugar otra vez!");
			$(".respuesta").css({"text-align":"center","font-size":"5em","margin-bottom":"4%"});
		} else if(box3 == box6 && box3 == box9 && box6 == box9) {
			$(".respuesta").html("El ganador es " + box1 + "." + "<br/>" + "Vamos a jugar otra vez!");
			$(".respuesta").css({"text-align":"center","font-size":"5em","margin-bottom":"4%"});
		} else if(box1 == box5 && box1 == box9 && box5 == box9) {
			$(".respuesta").html("El ganador es " + box1 + "." + "<br/>" + "Vamos a jugar otra vez!");
			$(".respuesta").css({"text-align":"center","font-size":"5em","margin-bottom":"4%"});
		} else if(box3 == box5 && box3 == box7 && box5 == box7) {
			$(".respuesta").html("El ganador es " + box1 + "." + "<br/>" + "Vamos a jugar otra vez!");
			$(".respuesta").css({"text-align":"center","font-size":"5em","margin-bottom":"4%"});
		} else {
			$(".respuesta").html("Es un empate!! (:" + "<br/>" + "Vamos a jugar otra vez!");
			$(".respuesta").css({"text-align":"center","font-size":"5em","margin-bottom":"4%"});
		}
	});
});

// $(document).ready(function() {
// 	$(".userBox").click(function() {
// 		$(this).css({"background-color":"#B0DEED","color":"white"});
// 	});
// });

// //al hacerle dobleclick aparece el O - color rojito
// $(document).ready(function() {
// 	$(".userBox").dblclick(function() {
// 		$(this).html("O");
// 	});
// });

// $(document).ready(function() {
// 	$(".userBox").dblclick(function() {
// 		$(this).css({"background-color":"#FF6862","color":"white"});
// 	});
// });

//recargar el juego 
$(document).ready(function() {
     $('#recargar').click(function() {
            location.reload();
     });
});




