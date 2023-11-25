let navbar = document.querySelector(`#navJs`);

let navIcon = document.querySelector(`#navIcon`);

let logoA = document.querySelector(`#logoA`);

let logoB = document.querySelector(`#logoB`);



let confirm = false;

let movedDivs = document.querySelectorAll(`.moved`);

let opener = document.querySelector(`.opener`);

let cartaWrapper = document.querySelector(`#cartaWrapper`);


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

let authors = [
        {name:`Emolga`, skill:[`Elettricità, Arrampicata`], url:`./media/Emolga.png`},
        {name:`Pikachu`, skill:[`TuonoShock, Dolcezza`], url:`./media/Pikachu.png`},
        {name:`Eevee`, skill:[`Carineria, Fuoco, Velocità`], url:`./media/Eevee.png`},
        {name:`Grookey`, skill:[`Foglielama, Megassorbimento, Lealtà`], url:`./media/Grookey.png`},
];

movedDivs.forEach((moved, i)=>{
        moved.style.backgroundImage = `url("${authors[i].url}")`;

        moved.addEventListener(`click`, ()=>{
            cartaWrapper.innerHTML = ``;

            let divisore = document.createElement(`div`);

            divisore.classList.add(`authorsCard`,`text-bordeux`);
            divisore.innerHTML = `
                        <h3 class="display-2">${authors[i].name}</h3>
                        <p class="fw-bold">${authors[i].skill}</p>
            `;

            cartaWrapper.appendChild(divisore);

            let cartaAuthors = document.querySelector(`.authorsCard`);

            cartaAuthors.style.backgroundImage = `url(${authors[i].url})`;

        });
});

opener.addEventListener(`click`, ()=>{

    if (confirm == false) {
        confirm = true;

        opener.style.transform = `rotate(360deg)`;

        movedDivs.forEach((moved, i)=>{
            let angle = (360*i) / movedDivs.length;
            moved.style.transform = `rotate(${angle}deg) translate(150px) rotate(-${angle}deg)`;
        });
    } else {

        opener.style.transform = `rotate(0deg)`;

        cartaWrapper.innerHTML = ``;

        movedDivs.forEach((moved)=>{
       
            moved.style.transform = `rotate(0deg) translate(0px)`;
        });
         
        confirm = false;
        
    }

});