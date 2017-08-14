var skin = ["A","B","C","D","E","F"];
for (var a = 0; a < skin.length; a++){
	for (var b = 0; b < skin.length; b++){
		for (var c = 0; c < skin.length; c++){
			for (var d = 0; d < skin.length; d++){
				var array1 = skin[a]+" "+skin[b]+" "+ skin[c]+" "+ skin[d];
				console.log(array1.split(" "));
			}
		}
	}
}
//["A", "A", "A", "A"]
//["A", "A", "A", "B"]

//["F", "F", "F", "F"]
