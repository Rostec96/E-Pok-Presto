let navbar = document.querySelector(`#navJs`);

let navIcon = document.querySelector(`#navIcon`);


let logoA = document.querySelector(`#logoA`);

let logoB = document.querySelector(`#logoB`);

let confirm = false;

navIcon.addEventListener(`click`, ()=>{

    if(confirm == false){
        navIcon.style.transform = `rotate(-180deg)`;
        confirm = true;
    } else {
        navIcon.style.transform = `rotate(0deg)`;
        confirm = false;
    }

});


window.addEventListener(`scroll`, ()=>{

    if(window.scrollY > 0){
        navbar.style.backgroundColor = `var(--light)`;
        navbar.style.padding = `10px`;
        logoA.classList.add(`d-none`);
        logoB.classList.remove(`d-none`);

    } else {
        navbar.style.backgroundColor = `transparent`;
        navbar.style.padding = `0px`;
        logoB.classList.add(`d-none`);
        logoA.classList.remove(`d-none`);
    }
    
});