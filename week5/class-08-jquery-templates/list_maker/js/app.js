// Users should be able to:
// 1. Enter an item into #new-item
// 2. Submit the form #item-form (remember to prevent the form's default behavior!)
// 3. New item is appended as a <li> element to the #list
// 4. After item is added, the text inside #new-item should clear


// Bonus: Focus on #new-item after the item is added
// Itermediate Bonus: If the value of #item is blank, do not append the <li> and alert user
// Legendary Bonus: Remove individual <li> elements when they are clicked

// similar to window.onload
$(document).ready(function () {
	// INIT TEMPLATE APPEND

	var initTodos = {
		todos: [
			'Data types',
			'Array',
			'Objects',
			'Functions',
		]

	};

//2: get temaplate and compile using Handlers
var initSource = $('#init-template').html();
var initCompiled = Handlebars.compile(initSource);
var initTemplate = presidentCompiled(initTodoObject);

console.log(initTodoObject);

$(#init-template).append(initTodoTemplate);






// IN-CLASS WORK

// jQuey submit event
$('#item-form').submit(function (event) {
	event.preventDefault();
	
	// get DOM input
	var input = $('#new-item').val().trim();

	// If the value of #item is blank, do not append the <li> and alert user
	if (!input) return alert('no input!');

	// append new <li>
	$('#list').append('<li>'+ input +'</li>');

	// clear input
	$('#new-item')
		.val('');
		.focus();
});

// remove <li> on click
$(document).on('click', 'li', funtion () {
	$(this).remove();

});


//CHANDLERS JQUERY SOLUTION
// // similar to window.onload
// $(document).ready(function () {

// 	// jQuery submit
// 	$('#item-form').submit(function (event) {
// 		event.preventDefault();

// 		// get DOM input
// 		var input = $('#new-item').val().trim();

// 		if (input === "") {
// 			return alert('no input!');
// 		} else {
// 			// append new <li>
// 			$('#list').append('<li>' + input + '</li>');

// 			// clear input
// 			$('#new-item')
// 				.val('')
// 				.focus();
// 		}
// 	})

// 	// $('li').click(function () {
// 	// 	$(this).remove();
// 	// });

// 	// remove <li> on click
// 	$(document).on('click', 'li', function () {
// 		$(this).remove();
// 	});


// })
