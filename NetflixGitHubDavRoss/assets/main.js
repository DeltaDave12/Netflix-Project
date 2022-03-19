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
let image_array1 = ["./assets/r6/aruni.jpg", 
"./assets/r6/frost.jpg", 
"./assets/r6/fuze.jpeg",
"./assets/r6/castle.jpg",
"./assets/r6/nokk.jpg",
"./assets/r6/pulse.jpg",
"./assets/r6/iq.jpg",
"./assets/r6/jackal.jpg",
"./assets/r6/kapkan.jpg", 
"./assets/r6/maestro.jpg",
"./assets/r6/maverick.jpg",
"./assets/r6/melusi.jpg",
"./assets/r6/ace.jpg",
"./assets/r6/mozzie.jpg",
"./assets/r6/mira.jpg",
"./assets/r6/osa.png",
"./assets/r6/grid.jpg",
"./assets/r6/ash.jpg",
"./assets/r6/sledge.jpg",
"./assets/r6/warden.jpg"] 


function RandomImage1(){
    let index = Math.floor(Math.random()*image_array1.length)
    document.querySelector('.random11').src = image_array1[index];

    index = Math.floor(Math.random()*image_array1.length)
    document.querySelector('.random12').src = image_array1[index];

    index = Math.floor(Math.random()*image_array1.length)
    document.querySelector('.random13').src = image_array1[index];

    index = Math.floor(Math.random()*image_array1.length)
    document.querySelector('.random14').src = image_array1[index];

    index = Math.floor(Math.random()*image_array1.length)
    document.querySelector('.random15').src = image_array1[index];

    index = Math.floor(Math.random()*image_array1.length)
    document.querySelector('.random16').src = image_array1[index];

    index = Math.floor(Math.random()*image_array1.length)
    document.querySelector('.random17').src = image_array1[index];

    index = Math.floor(Math.random()*image_array1.length)
    document.querySelector('.random18').src = image_array1[index];
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
    document.querySelector('.random21').src = image_array2[index];

    index = Math.floor(Math.random()*image_array2.length)
    document.querySelector('.random22').src = image_array2[index];

    index = Math.floor(Math.random()*image_array2.length)
    document.querySelector('.random23').src = image_array2[index];

    index = Math.floor(Math.random()*image_array2.length)
    document.querySelector('.random24').src = image_array2[index];

    index = Math.floor(Math.random()*image_array2.length)
    document.querySelector('.random25').src = image_array2[index];

    index = Math.floor(Math.random()*image_array2.length)
    document.querySelector('.random26').src = image_array2[index];

    index = Math.floor(Math.random()*image_array2.length)
    document.querySelector('.random27').src = image_array2[index];

    index = Math.floor(Math.random()*image_array2.length)
    document.querySelector('.random28').src = image_array2[index];
}

