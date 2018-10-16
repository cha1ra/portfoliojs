const tokyoOlympic = 2020;
let currentYear = 2018;

console.log(tokyoOlympic - currentYear);



console.log("test");

const doFunc = function(){
    $('.hero-image__text').html('<h1>ハリルホジッチ<h1>');
    $('#about').fadeOut(3000).fadeIn(3000);
}

$("#btn").on('click', doFunc);

/*
$("#btn").on('click', function(){
    $('.hero-image__text').html('<h1>ハリルホジッチ<h1>');
    $('#about').fadeOut(3000).fadeIn(3000);
});
*/