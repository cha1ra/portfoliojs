const tokyoOlympic = 2020;
let currentYear = 2018;

console.log(tokyoOlympic - currentYear);
console.log("test");

/*
const pageScroll = function(){
    const aboutFromTop = $("#about").offset().top;
    console.log("about!!");
    $('html, body').animate({scrollTop:aboutFromTop},1000);
    console.log(aboutFromTop);
};


$('#aboutlink').on('click', pageScroll);
*/

const pageScroll = function(){
    const href = $(this).attr('href');
    console.log(href);
    const aboutFromTop = $(href).offset().top;
    $('html, body').animate({scrollTop:aboutFromTop},1000);
    console.log(aboutFromTop);
};


$('.nav-item > a').on('click', pageScroll);