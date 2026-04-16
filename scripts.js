let buttonPrev = document.getElementById('1seta')
let Nextbutton = document.getElementById('2seta')
let tudo3 = document.querySelector('.tudo3')
let itens = tudo3.querySelectorAll('.lista .Itens')
let indicators = document.querySelector('.indicators')
let indicators1 = indicators.querySelectorAll('ul li')


let active = 0
let first = 0
let last = itens.length - 1


Nextbutton.onclick = () => {
    let itensOld = tudo3.querySelector('.lista .Itens.active')
    itensOld.classList.remove('active')

    active = active + 1 > last ? 0 : active + 1
    
    itens[active].classList.add('active')
}
buttonPrev.onclick = () => {
    
}