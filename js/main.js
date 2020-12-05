const toggle = document.querySelector('#menu-check');
let menu = document.querySelector('#menu');

const home = document.querySelector('#home');
const about = document.querySelector('#about');
const projects = document.querySelector('#projects');
const contact = document.querySelector('#contact');

const home_section = document.querySelector('header');
const about_section = document.querySelector('#about-section');
const projects_section = document.querySelector('#projects-section');
const contact_section = document.querySelector('#contact-section');
const to_work = document.querySelector('#to-work');
const to_home = document.querySelector('#arrow-home');


home.addEventListener('click', ()=>{
    home_section.scrollIntoView({ behavior: "smooth" });
});

about.addEventListener('click', ()=>{
    about_section.scrollIntoView({ behavior: "smooth" });
});

projects.addEventListener('click', ()=>{
    projects_section.scrollIntoView({ behavior: "smooth" });
});

contact.addEventListener('click', ()=>{
    contact_section.scrollIntoView({ behavior: "smooth" });
});

to_work.addEventListener('click', ()=>{
    projects_section.scrollIntoView({ behavior: "smooth" });
});

to_home.addEventListener('click', ()=>{
    home_section.scrollIntoView({ behavior: "smooth" });
});

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


