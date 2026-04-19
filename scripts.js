let buttonPrev = document.getElementById('1seta')
let Nextbutton = document.getElementById('2seta')
let tudo3 = document.querySelector('.tudo3')
let itens = tudo3.querySelectorAll('.lista .Itens')
let indicator = document.querySelector('.indicators')
let indicators1 = indicator.querySelectorAll('ul li')


let active = 0
let first = 0
let last = itens.length - 1


Nextbutton.onclick = () => {
    let itensOld = tudo3.querySelector('.lista .Itens.active')
    itensOld.classList.remove('active')

    active = active + 1 > last ? 0 : active + 1
    
    itens[active].classList.add('active')


    let indic = indicator.querySelector('ul li.active')

    indic.classList.remove('active')
    
    indicators1[active].classList.add('active')

    indicator.querySelector('.number').innerHTML = '0'+ (active + 1)

}

buttonPrev.onclick = () => {
    let itensOld = tudo3.querySelector('.lista .Itens.active')
    itensOld.classList.remove('active')

    active = active - 1 < 0 ? 7 : active - 1

    itens[active].classList.add('active')





    let indic = indicator.querySelector('ul li.active')

    indic.classList.remove('active')
    
    indicators1[active].classList.add('active')

    indicator.querySelector('.number').innerHTML = '0'+ (active + 1)

}





