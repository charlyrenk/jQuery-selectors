console.log("The Script is Sourced!")
var clicks = 0
// //function clickNumber(){
//     clicks += 1;
// }
$(document).ready(function () {
    $('body').append('<h2>Hey there!</h2>');
    $('body').prepend("<h2>I am going to the top</h2>");
    $('li').css('color', 'blue');
    $('#kevin li').css('color', 'maroon')
    $('.food').css('color', 'pink');
    $('#chief').css('color', 'green');
    $('ul').first().children().last().css('color', 'black');
    $('#kevinButton').on('click', function () {
        //clickNumber();
        clicks++;
        console.log('button was clicked', clicks, 'times.');
        //input text should be added to the list
        var favoriteThing = $('#kevinInput').val()
        $('#kevin').append('<li>' + favoriteThing +
            '<button class="deleteKevinButton">delete</button></li>');
    });

    $('#kevin').on('click', '.deleteKevinButton', function () {
        $(this).parent().remove();
    })




    $('#brendtButton').on('click', function () {
        //clickNumber();
        clicks++;
        console.log('button was clicked', clicks, 'times.');
        //input text should be added to the list
        var favoriteThing = $('#brendtInput').val()
        $('#brendt').append('<li>' + favoriteThing + '</li>');
    })
    //delete button
    //     $('.deleteKevinButton').on('click',  function (){
    //         // $(this) calls clicked item to log; refers to the thing that was clicked on
    //             console.log('test delete', $(this))

    //             $(this).parent().remove()
    //         })
});