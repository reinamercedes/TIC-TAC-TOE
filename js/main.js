
$(document).ready(function() {
	var play = 0;
	 var arreglo = [
	        ["0", "1", "2"],
	        ["3", "4", "5"],
	        ["6", "7", "8"]
	    ]
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

		//aqui vienen los arreglos D:

		arreglo[0][0] = $("#0").text();
	        	arreglo[0][1] = $("#1").text();
	        	arreglo[0][2] = $("#2").text();

	        	arreglo[1][0] = $("#3").text();
	        	arreglo[1][1] = $("#4").text();
	        	arreglo[1][2] = $("#5").text();

	        	arreglo[2][0] = $("#6").text();
	        	arreglo[2][1] = $("#7").text();
	        	arreglo[2][2] = $("#8").text();

	        /*for y arreglos :c*/

	        for (var i = 0; i < 3; i++) {
	            if (arreglo[i][0] == arreglo[i][1] && arreglo[i][1] == arreglo[i][2] && arreglo[i][0] != "+") {
	                alert("Gano " + arreglo[i][0] + "!");
	            }
	        }

	        for (var i = 0; i < 3; i++) {
	            if (arreglo[0][i] == arreglo[1][i] && arreglo[1][i] == arreglo[2][i] && arreglo[0][i] != "+") {
	                alert("Gano " + arreglo[0][i] + "!");
	            }
	        }
	        if (arreglo[0][0] == arreglo[1][1] && arreglo[0][0] == arreglo[2][2] && arreglo[0][0] != "+") {
	            alert("Gano " + arreglo[0][0] + "!");
	        }
	        if (arreglo[0][2] == arreglo[1][1] && arreglo[0][2] == arreglo[2][0] && arreglo[0][2] != "+") {
	            alert("Gano " + arreglo[0][2] + "!");
	        }
	});
});



//recargar el juego 
$(document).ready(function() {
     $('#recargar').click(function() {
            location.reload();
     });
});




