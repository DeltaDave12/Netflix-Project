//Je sais que cela fait beacoup de DRY code mais par manque de temps
// et parce que j'ai pris trop de temps à trouver une fonction qui 
// marche je n'ai pas tt de suite envie de rendre le code plus lisible 

/*Carousel Functions*/
//Carousel 1
function michel(){
    let div1 = document.querySelector('.scroll-left')
    div1.scrollLeft += 250
}

function jacques(){
    let div1 = document.querySelector('.scroll-right')
    div1.scrollLeft -= 250
}


//Carousel 2
function michel2(){
    let div1 = document.querySelector('.scroll-left2')
    div1.scrollLeft += 250
}

function jacques2(){
    let div1 = document.querySelector('.scroll-right2')
    div1.scrollLeft -= 250
}


//Carousel 3
function michel3(){
    let div1 = document.querySelector('.scroll-left3')
    div1.scrollLeft += 250
}

function jacques3(){
    let div1 = document.querySelector('.scroll-right3')
    div1.scrollLeft -= 250
}


//Carousel 4
function michel4(){
    let div1 = document.querySelector('.scroll-left4')
    div1.scrollLeft += 250
}

function jacques4(){
    let div1 = document.querySelector('.scroll-right4')
    div1.scrollLeft -= 250
}

//Carousel 5
function michel5(){
    let div1 = document.querySelector('.scroll-left5')
    div1.scrollLeft += 250
}

function jacques5(){
    let div1 = document.querySelector('.scroll-right5')
    div1.scrollLeft -= 250
}

//Carousel 6
function michel6(){
    let div1 = document.querySelector('.scroll-left6')
    div1.scrollLeft += 250
}

function jacques6(){
    let div1 = document.querySelector('.scroll-right6')
    div1.scrollLeft -= 250
}

//Carousel 7
function michel7(){
    let div1 = document.querySelector('.scroll-left7')
    div1.scrollLeft += 250
}

function jacques7(){
    let div1 = document.querySelector('.scroll-right7')
    div1.scrollLeft -= 250
}

//Carousel 8
function michel8(){
    let div1 = document.querySelector('.scroll-left8')
    div1.scrollLeft += 250
}

function jacques8(){
    let div1 = document.querySelector('.scroll-right8')
    div1.scrollLeft -= 250
}

/*End Carousel Functions*/

/* Random image function */

window.onload = RandomImage1

var type = document.getElementsByTagName("img")

/*Section 1*/ 
let image_array1 = ["./assets/categories/1.jpg", 
"./assets/categories/2.jpg", 
"./assets/categories/3.jpg",
"./assets/categories/4.jpg",
"./assets/categories/5.jpg",
"./assets/categories/6.jpg",
"./assets/categories/7.jpg",
"./assets/categories/8.jpg",
"./assets/categories/9.jpg", 
"./assets/categories/10.jpg",
"./assets/categories/11.jpg",
"./assets/categories/12.jpg",
"./assets/categories/13.jpg",
"./assets/categories/14.jpg",
"./assets/categories/15.jpg",
"./assets/categories/16.jpg",
"./assets/categories/17.jpg",
"./assets/categories/18.jpg",
"./assets/categories/19.jpg",
"./assets/categories/20.jpg"] 


function RandomImage1(){
    let index = Math.floor(Math.random()*image_array1.length)
    document.querySelector('.random1').src = image_array1[index];

    index = Math.floor(Math.random()*image_array1.length)
    document.querySelector('.random2').src = image_array1[index];

    index = Math.floor(Math.random()*image_array1.length)
    document.querySelector('.random3').src = image_array1[index];

    index = Math.floor(Math.random()*image_array1.length)
    document.querySelector('.random4').src = image_array1[index];

    index = Math.floor(Math.random()*image_array1.length)
    document.querySelector('.random5').src = image_array1[index];

    index = Math.floor(Math.random()*image_array1.length)
    document.querySelector('.random6').src = image_array1[index];

    index = Math.floor(Math.random()*image_array1.length)
    document.querySelector('.random7').src = image_array1[index];
}

/*Section 2*/ 
let image_array2 = ["./assets/r6/bank.jpg", 
"./assets/r6/border.jpg", 
"./assets/r6/chalet.jpg",
"./assets/r6/clubhouse.jpg",
"./assets/r6/coastline.jpg",
"./assets/r6/frontiere.jpg",
"./assets/r6/oregon.jpg",
"./assets/r6/theme.jpg",
"./assets/r6/villa.jpg", 
"./assets/r6/consulate.jpg",
"./assets/r6/cafe.jpg",
"./assets/r6/maison.jpg",
"./assets/r6/outback.jpg",
"./assets/r6/avion.jpg",
"./assets/r6/gratte.jpg",
"./assets/r6/favela.jpg",
"./assets/r6/yacht.jpg",] 


function RandomImage2(){
    let index = Math.floor(Math.random()*image_array2.length)
    document.querySelector('.random8').src = image_array2[index];

    index = Math.floor(Math.random()*image_array2.length)
    document.querySelector('.random9').src = image_array2[index];

    index = Math.floor(Math.random()*image_array2.length)
    document.querySelector('.random10').src = image_array2[index];

    index = Math.floor(Math.random()*image_array2.length)
    document.querySelector('.random11').src = image_array2[index];

    index = Math.floor(Math.random()*image_array2.length)
    document.querySelector('.random12').src = image_array2[index];

    index = Math.floor(Math.random()*image_array2.length)
    document.querySelector('.random13').src = image_array2[index];

    index = Math.floor(Math.random()*image_array2.length)
    document.querySelector('.random14').src = image_array2[index];
}


//VIDEOS SECTION

/*var file = $(".video").hover(hoverVideo, hideVideo);

function hoverVideo(e){
    $('video', this).get(0).play(); 
}

function hideVideo(e){
    $('video', this).get(0).pause();
}*/


