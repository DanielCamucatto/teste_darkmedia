const btnMobile = document.querySelector('.navbar-toggler')
console.log(btnMobile);

function menuToggle(ev){
    if(ev.type === 'touchstart') ev.preventDefaut()
    const nav = document.querySelector('.navbar');

    nav.classList.toggle('active');

    const active = nav.classList.contains('active');
    ev.currentTarget.setAttribute('aria-expanded', active)

    if(active){
        ev.currentTarget.setAttribute('aria-label', 'fechar menu');
    }else{
        ev.currentTarget.setAttribute('aria-label', 'abrir menu')
    }
}


 btnMobile.addEventListener('click', menuToggle)
 btnMobile.addEventListener('touchstart', menuToggle)