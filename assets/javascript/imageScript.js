document.addEventListener('DOMContentLoaded', function() {


var img = document.getElementById('img');

var slides = ['assets/pictures/taustakuva.jpg','assets/pictures/islanninlammaskoira.jpg','assets/pictures/labbis.jpg'];

var Start=0;

function slider(){

    if(Start<slides.length){
        Start=Start+1;
    }
    else{
        Start=1;
    }
    console.log(img);
    img.innerHTML = "<img src="+slides[Start-1]+">";
}

setInterval(slider, 4000);

});