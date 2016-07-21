/*Work with a partner to create a monkey object, which has the following properties:

* name
* species
* foodsEaten

And the following methods:
* eatSomething(thingAsString)
* introduce: produces a string introducing itself, including its name, species, and what it's eaten.

Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.

Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes
for retrieving properties (dot notation and brackets).

*/

// WHERE I STARTED FIRST

// var monkey = {
//	name:
//	species:
//	foodsEaten:
// }


var Monkey = function (name, species) {
	this.name = name;
	this.species = species;
	this.foodsEaten = [];

	this.eatSomething = function (thingAsString) {
		console.log('This monkey is going to eat something.')
	}

	this.introduce = fucntion () {
		console.log('Hi, my name is' + this.name + '!')
		console.log('My species is' + this.species + '.')
		console.log('I love to eat' + this.foodsEaten + '!')
	}

}

var mandrill new Monkey('mandrill', 'priamte', 'bananas')
var pygmy new Monkey('pygmy', 'new world', 'apples')
var gelada new Monkey('gelada', 'old world', 'crickets')

mandrill.
console.log('pygmy')
console.log('gelada')