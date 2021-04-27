let openModal = document.querySelector('#openModal');
let btnFecharModal = document.querySelector('.btnFechar');
let modal = document.querySelector('.modal');
let body = document.querySelector('body');

openModal.addEventListener('click', function (){
   modal.classList.remove('inviseble')
});

btnFecharModal.addEventListener('click', function(){
    modal.classList.add('inviseble')
});

document.addEventListener('keydown', function(event){
    const isEscKey = event.key === 'Escape';

    if(isEscKey){
        modal.classList.add('inviseble')
    }
});