let navbar = document.querySelector(`#navJs`);

let intersectTitle = document.querySelector(`#intersectTitle`);

let navIcon = document.querySelector(`#navIcon`);

let logoA = document.querySelector(`#logoA`);

let logoB = document.querySelector(`#logoB`);

let test = document.querySelector(`#test`);

let firstSpan = document.querySelector(`#first-span`);
let secondSpan = document.querySelector(`#second-span`);
let terzoSpan = document.querySelector(`#terzo-span`);

let check = false;

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
        navbar.style.backgroundColor = `rgba(84, 11, 13, 0.556)`;
        navbar.style.padding = `10px`;
        logoA.classList.add(`d-none`);
        logoB.classList.remove(`d-none`);
        navIcon.style.color = `var(--autunno)`
    } else {
        navbar.style.backgroundColor =`rgba(246, 189, 96, 0.733)`;
        navbar.style.padding = `0px`;
        logoB.classList.add(`d-none`);
        logoA.classList.remove(`d-none`);
        navIcon.style.color = `var(--bordeux)`
    }
    
});

function createInterval(finalNumber, elemento){

    let counter = 0;
    let interval = setInterval(()=>{
       
        if(counter < finalNumber){
            counter++
            elemento.innerHTML = counter;
        
        } else {
            clearInterval(interval);

        }
    },5);

}

let observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting && check == false){
            createInterval(47, firstSpan);
            createInterval(200, secondSpan);
            createInterval(21, terzoSpan);
            
            check = true;
        }
    });
});

observer.observe(intersectTitle);
