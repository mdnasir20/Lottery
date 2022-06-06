
	var names = [];
	var index = 0;

	function addName() {
		names[index] = document.getElementById("name").value;
		index = index + 1;

		var namesText = "";
		for (var i = 0; i < names.length; i++) {
			namesText = namesText + "<br>Inserted names: " + " " + names[i];
		}

		document.getElementById("nameList").innerHTML =  namesText;

		document.getElementById("name").value = "";

		document.getElementById("answer").innerHTML = "";
	}

	function makeDraw() {
		var winner = Math.floor((Math.random() * names.length));
		
		document.getElementById("answer").innerHTML = "<br>Winner is: " + names[winner];

	}
