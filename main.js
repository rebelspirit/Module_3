const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";


let keyboard = [];

	for(i = 0; i < alphabet.length; i++){	
		let string1 = alphabet.slice(0,12);
		let string2 = alphabet.slice(12,23);
		let string3 = alphabet.slice(23);
		keyboard[0] = string1.split('');
		keyboard[1] = string2.split('');
		keyboard[2] = string3.split('');
	};

console.log(keyboard[1][5] + keyboard[0][2] + keyboard[1][8] + keyboard[1][8] + keyboard[0][8]);
console.log(keyboard[1][6] + keyboard[1][0] + keyboard[2][3] + keyboard[1][0] + keyboard[1][1] + keyboard[2][2] + keyboard[0][3] + keyboard[0][7] + keyboard[0][9] + keyboard[0][4]);
console.log(keyboard[0][4] + keyboard[0][3] + keyboard[1][0] + keyboard[0][7] + keyboard[2][5] + keyboard[0][2] + keyboard[0][3]);