const tokyoOlympic = 2020;
let currentYear = 2018;

console.log(tokyoOlympic - currentYear);
console.log("test");


const pageScroll = function(){
    const aboutFromTop = $("#about").offset().top;
    console.log("about!!");
    $('html, body').animate({scrollTop:aboutFromTop},1000);
    console.log(aboutFromTop);
};

$('#aboutlink').on('click', pageScroll);