var btn = document.querySelector('.navbar-toggle');
var menu = document.querySelector('#menu');

btn.addEventListener('click', expand);

function expand() {
    //    menu.classList.remove('collapse');
    //     menu.classList.add('collapse');
    menu.classList.toggle('collapse')

}
document.addEventListener('keydown', function (event) {
    console.log(event.keyCode)
    if (event.keyCode == 27) {
        menu.classList.add('collapse');

    }
})
var drink = document.querySelector('#drink')
var fotos = ['img/cola.jpg', 'img/cola1.jpg', 'img/cola2.jpg']
var current = 0

drink.addEventListener('click', function () {
    drink.src = fotos[current];
    current++;
    if (current == 3) {
        current = 0
    }

})

var right = document.querySelector('.right');
var left = document.querySelector('.left');

right.addEventListener('click', function (){
     drink.src = fotos[current];
    current++
    if (current == 3) {
        current = 0
    }
})

left.addEventListener('click', function (){
     drink.src = fotos[current];
     current--
    if (current >current.length){
        current=0
    } 
   
})


//
