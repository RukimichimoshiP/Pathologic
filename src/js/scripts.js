window.addEventListener('scroll', () => {
        //Scroll Animation Main
        document.querySelector('#bachelor').style.marginLeft = `-${window.scrollY}px`
        document.querySelector('#haruspex').style.marginLeft = `-${window.scrollY}px`
        document.querySelector('#changelin').style.marginLeft = `-${window.scrollY}px`
})

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY

    //History Img Game
    if(scrolled >= 600){
        document.querySelector('#img-game').classList.add('translate-on')
        document.querySelector('#img-game').classList.remove('translate-off')
    }else if(scrolled < 600){
        document.querySelector('#img-game').classList.remove('translate-on')
        document.querySelector('#img-game').classList.add('translate-off')
    }

    //History Content
    if(scrolled >= 752){
        document.querySelector('#content-history').classList.remove('opacity-off')
        document.querySelector('#content-history').classList.add('opacity-on')
    }else if(scrolled < 752){
        document.querySelector('#content-history').classList.add('opacity-off')
        document.querySelector('#content-history').classList.remove('opacity-on')
    }
})

//Persons
const history = document.querySelector('#history')
const circle = document.querySelector('#circle')
const persons = document.querySelector('#persons')

circle.addEventListener('click', function() {
    history.classList.add('hidden')
    persons.classList.remove('display-off')
    persons.classList.remove('hidden')
})

// Person Clicked
const bachelor = document.querySelector('#bachelor')
const haruspex = document.querySelector('#haruspex')
const changelin = document.querySelector('#changelin')
const select = document.querySelector('.activate')


function ClickBachelor() {
     bachelor.classList.add('activate')
     select.classList.remove('activate')
}
function ClickHaruspex() {
    haruspex.classList.add('activate')
     select.classList.remove('activate')
}
function ClickChangelin() {
    changelin.classList.add('activate')
     select.classList.remove('activate')
}

//Back History
const circle_back = document.querySelector('#circle_back')

circle_back.addEventListener('click', function() {
    persons.classList.add('hidden')
    history.classList.remove('hidden')
    persons.classList.remove('display-off')
})