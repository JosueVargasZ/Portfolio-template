const toggle = document.querySelector('#menu-check');
let menu = document.querySelector('#menu');

toggle.addEventListener('change', ()=> {
    if( toggle.checked){
        menu.style = 'animation: menu-in 400ms ease-in-out forwards';
    }else{
        menu.style = 'animation: menu-out 400ms ease-in-out forwards';
    }
});

window.addEventListener('resize', () =>{
    if( window.innerWidth >= 768){
        menu.style = 'visibility: visible;';
    }
    else{
        toggle.checked = false;
        menu.style = 'visibility: hidden;';
    }
});


