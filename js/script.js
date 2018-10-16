const tokyoOlympic = 2020;
let currentYear = 2018;

console.log(tokyoOlympic - currentYear);



console.log("test");

const doFunc = function(){
    const time = new Date();

    //getMonth(), getDate(), getDay()
    const year = time.getFullYear();

    console.log(year);

    const link = '<a href = "https://www.cha1ra.com">ジーズアカデミー </a>';
    $('.hero-image__text').html(link);

    const animationTime = 2000;
    $('#message').fadeOut(animationTime).fadeIn(animationTime);
}

$("#btn").on('click', doFunc);

/*
$("#btn").on('click', function(){
    $('.hero-image__text').html('<h1>ハリルホジッチ<h1>');
    $('#about').fadeOut(3000).fadeIn(3000);
});
*/