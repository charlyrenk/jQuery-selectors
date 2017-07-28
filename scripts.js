console.log("The Script is Sourced!")
var clicks = 0
// //function clickNumber(){
//     clicks += 1;
// }
$(document).ready(function(){
    $('body').append('<h2>Hey there!</h2>');
    $('body').prepend("<h2>I am going to the top</h2>");
    $('li').css('color','blue');
    $('#kevin li').css('color','maroon')
    $('.food').css('color','pink');
    $('#chief').css('color','green');
    $('ul').first().children().last().css('color','black');
    $('#kevinButton').on('click', function(){
        //clickNumber();
        clicks++;
        console.log('button was clicked', clicks, 'times.') ;
        

    })
});