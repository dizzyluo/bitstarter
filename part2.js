#!/usr/bin/env node

function isPrime (num) {
	if (num == 1)
		return false;
	
	if (num == 2)
		return true;

	if (num % 2 == 0)
		return false;

	for (var q = 3; q <= Math.ceil(Math.sqrt(num)); q = q + 2) {
		if (num % q == 0)
			return false;
	}
	return true;
}

//
var primeArray = new Array();
var i = 1;
while(1) {
	if (isPrime(i))
		primeArray.push(i);
	
	if (primeArray.length >= 100)
		break;

	i++;
};

var fs = require('fs');
var outfile = "part2.txt";

var out = primeArray.join();
fs.writeFileSync(outfile, out);
console.log("Script " + __filename + "\nWrote " + out + " To " + outfile);