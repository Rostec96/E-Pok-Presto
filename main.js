let navbar = document.querySelector(`#navJs`);

let intersectTitle = document.querySelector(`#intersectTitle`);

let navIcon = document.querySelector(`#navIcon`);

let logoA = document.querySelector(`#logoA`);

let logoB = document.querySelector(`#logoB`);

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

let scroller = document.querySelector(`#scroller`);

window.addEventListener(`scroll`, ()=>{
    
    if(window.scrollY > 0){
        navbar.style.backgroundColor = `rgba(84, 11, 13, 0.556)`;
        navbar.style.padding = `10px`;
        logoA.classList.add(`d-none`);
        logoB.classList.remove(`d-none`);
        navIcon.style.color = `var(--autunno)`;
        scroller.classList.remove(`d-none`);
    } else {
        navbar.style.backgroundColor =`rgba(246, 189, 96, 0.733)`;
        navbar.style.padding = `0px`;
        logoB.classList.add(`d-none`);
        logoA.classList.remove(`d-none`);
        navIcon.style.color = `var(--bordeux)`;
        scroller.classList.add(`d-none`);
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

let spedizioni = document.querySelectorAll(`#iconTrans`);

let colsTrans = document.querySelectorAll(`.col-cus-trans`);

colsTrans.forEach((colTrans, i)=>{
    let colsConfirm = false;
    
    colTrans.addEventListener(`mouseenter`, ()=>{
        if(colsConfirm == false){
            spedizioni[i].classList.remove(`text-autunno`);
            spedizioni[i].classList.add(`text-cipria`);
        } else {
            spedizioni[i].classList.remove(`text-light`);
            spedizioni[i].classList.add(`text-bordeux`);
        }
    });    
    
    colTrans.addEventListener(`mouseleave`, ()=>{
        if(colsConfirm == false){
            spedizioni[i].classList.remove(`text-bordeux`);   
            spedizioni[i].classList.add(`text-light`);
            colsConfirm = true;
        } else {
            spedizioni[i].classList.remove(`text-cipria`);
            spedizioni[i].classList.add(`text-autunno`);
            colsConfirm = false;
        }
    });
});

let categorie = [
    {name: `Food`, icon: `<i class="fa-2x fa beat-fade my-3 fa-solid fa-utensils"></i>`, announcements: 1540},
    {name: `Salute`, icon: `<i class="fa-2x fa beat-fade my-3 fa-solid fa-briefcase-medical"></i>`, announcements: 30000},
    {name: `Strumenti`, icon: `<i class="fa-2x fa beat-fade my-3 fa-solid fa-bicycle"></i>`, announcements: 50},
    {name: `Rarità`, icon: `<i class="fa-2x fa beat-fade my-3 fa-solid fa-bone"></i>`, announcements: 30},
    {name: `PokèBall`, icon: `<i class="fa-2x fa beat-fade my-3 fa-solid fa-circle"></i>`, announcements: 80},
    {name: `DischiMosse`, icon: `<i class="fa-2x fa beat-fade my-3 fa-solid fa-compact-disc"></i>`, announcements: 1000},
];

let cardsCategoryWrapper = document.querySelector(`#cardsCategoryWrapper`);

categorie.forEach((categoria)=>{
    let div = document.createElement(`div`);
    div.classList.add(`col-12`, `col-md-3`, `mb-4`);
    div.innerHTML = `
    <div class="category-card">
        <div class="border-dashed">
            ${categoria.icon}
            <h3>${categoria.name}</h3>
            <p>${categoria.announcements}</p>
        </div>
    </div>
    `;
    cardsCategoryWrapper.appendChild(div);
});