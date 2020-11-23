const toggle = document.querySelector('#menu-check');
let menu = document.querySelector('#menu');

toggle.addEventListener('change', ()=> {
    if( toggle.checked){
        menu.style.visibility = 'visible'
    }else{
        menu.style.visibility = 'hidden'
    }
})