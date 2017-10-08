// var hello = $('h1');
// var heading = hello.html();
// console.log(heading);

// var heading = jQuery('h1')

// $  // selector
// html  // some html content
// on // event, function
//hide // time


var heading = $('h1')
var paragraph = $('#first_paragraph');
paragraph.hide(3000);

heading.on('mouseover', function () {
    alert('rezwana');
});