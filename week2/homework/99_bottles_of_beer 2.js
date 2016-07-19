// 99 BOTTLES OF BEER
// Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal
// Make sure your program can handle both singular and plural cases (i.e. both "100 bottles of beer" and "1 bottle of beer")
// Hint: you will want to use a for loop that starts at 99 and counts down to 0
var bottles;
for (var i = 99; i >= 1; i--) {
	if (i != 1) {
		bottles = 'bottles';
	} else { 
		bottles = 'bottle';
	}
	console.log(i+" "+bottles+" of beer on the wall.");
	if (i < 99) {
        console.log("");
        console.log(i+" "+bottles+" of beer on the wall.");
    }
    console.log(i+" "+bottles+" of beer.");
    console.log("Take one down.");
    console.log("Pass it around.");
    if (i === 1) {
        console.log("No bottles of beer on the wall.");
    }
};