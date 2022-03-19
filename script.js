const firstCard = document.querySelector('.first')
const submit = document.querySelector('.submit')
const choice = document.getElementById('choice')
const secondCard = document.querySelector('.second')



function fnc() {

}

let teller = 0;
firstCard.addEventListener('click', fnc, false) 
    function fnc(e) {
            teller = e.target.innerHTML
            console.log(teller)
    }




submit.addEventListener('click', function() {
    if (teller > 0) {
        choice.innerHTML = ` ${teller}`
        secondCard.style.zIndex = '50'
    }
else {
    alert('You must choose a specific rating!')
}



})