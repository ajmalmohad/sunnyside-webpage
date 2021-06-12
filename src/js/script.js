if(window.innerWidth > 600){
    luxy.init()
}

let hamburger = document.querySelector('.hamburger');
let navlinks = document.querySelector('.navlinks');

let active = false;
hamburger.addEventListener('click',()=>{
    active =!active;
    if(active){
        navlinks.classList.add('active');
    }else{
        navlinks.classList.remove('active');
    }
})