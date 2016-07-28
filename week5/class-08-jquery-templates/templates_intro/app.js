var presidentObject = {
    presidents: [
        'Washington',
        'Adams',
        'Jefferson',
        'Madison',
        'Monroe',
        'Adams',
        'Jackson',
        'Van Buren',
        'Harrison',
        'Tyler',
        'Polk',
        'Taylor',
        'Fillmore',
        'Pierce',
        'Buchanan',
        'Lincoln',
        'Johnson',
        'Grant',
        'Hayes',
        'Garfield',
        'Arthur',
        'Cleveland',
        'Harrison',
        'Cleveland',
        'McKinley',
        'Roosevelt',
        'Taft',
        'Wilson',
        'Harding',
        'Coolidge',
        'Hoover',
        'Roosevelt',
        'Truman',
        'Eisenhower',
        'Kennedy',
        'Johnson',
        'Nixon',
        'Ford',
        'Carter',
        'Reagan',
        'Bush',
        'Clinton',
        'Bush',
        'Obama',
    ]
}

// jQuery list append
presidentObject.presidents.forEach( function (presidents) {
    $('#jquery-list').append('<option value="">' + presidents + '</option>');
})

//Handlebars Template Append
var titleObject = {
      title: 'Presidents',
      description: 'A JSD Project'
}

//2: get temaplate and compile using Handlers
var titleSource = $('#title-template').html();
var titleCompiled = Handlebars.compile(titleSource)

//3: pass compile tempalte JS object
var titleTemplate = template(titleObject);

//4: append template to the DOM
$('#title').append(titleTemplate);



// PRESIDENT LIST APPEND
var presidentSource = $('#president-template').html();
var presidentCompiled = Handlebars.compile(presidentSource)
var presidentTemplate = presidentCompiled(presidentObject)

console.log(presidentObject)

$(#handlebars-list).append(presidentTemplate);

