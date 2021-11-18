const knopka = document.querySelector('.btn');
const bodka = document.querySelector('body')

let shpek = document.createElement('button')

knopka.addEventListener('click', ()=>{
    bodka.style.backgroundColor = 'white'


    shpek.textContent = 'Ещё раз? '
    bodka.append(shpek)

})

shpek.addEventListener('click', ()=>{
    bodka.style.backgroundColor = 'black'
    shpek.remove('shpek')
})