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


fetch(`./annunci.json`).then((response)=> response.json()).then((data)=>{
    
    let categoryWrapper = document.querySelector(`#categoryWrapper`);
    
    let cardsWrapper = document.querySelector(`#cardsWrapper`);
    
    function setCategoryFilter() {
        let categories = data.map((annuncio)=> annuncio.category);
        
        let uniqueCategories = [];
        
        categories.forEach((categoria) => {
            
            if (!uniqueCategories.includes(categoria)) {
                uniqueCategories.push(categoria);
            }
            
        });
        
        uniqueCategories.forEach((category)=>{
            let div = document.createElement(`div`);
            
            div.classList.add(`form-check`);
            
            div.innerHTML = `
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="${category}">
            <label class="form-check-label" for="${category}">
            ${category}
            </label>
            `;
            
            categoryWrapper.appendChild(div);
        })
    }
    
    setCategoryFilter();
    
    function showCards(array) {
        cardsWrapper.innerHTML = ``;

        array.sort((a, b)=> b.price - a.price);
        
        array.forEach((annuncio, i)=>{
            
            let div = document.createElement(`div`);
            
            div.classList.add(`col-12`, `col-md-3`);
            
            div.innerHTML = `
                <div class="announcement-card text-center">
                <div class="card-head">
                    <img class="img-card-Cus" src="https://lorempokemon.fakerapi.it/pokemon/200/${i*50}">
                    <h4>${annuncio.name}</h4>
                    <h5>${annuncio.category}</h5>
                    <p class="fw-bold">${annuncio.price} £</p>
                </div>
            `;
        
            cardsWrapper.appendChild(div);
            
        })
        
    }

    showCards(data);


    function filterByCategory(array) {

        let arrayFromNodeList = Array.from(checkInputs);

        let buttonChecked = arrayFromNodeList.find((bottone)=> bottone.checked);

        let categoria = buttonChecked.id;

        if (categoria != `allShop`) {
            let filtered = array.filter((annuncio)=>annuncio.category == categoria);
            
            return filtered;
        } else {
            return data;
        }
        
    }
    
    let checkInputs = document.querySelectorAll('.form-check-input');

    checkInputs.forEach((radio)=>{
        radio.addEventListener(`click`, ()=>{
            globalFilter();
        })
    })

    let priceInput = document.querySelector(`#priceInput`);

    let incrementNumber = document.querySelector(`#incrementNumber`);

    function setPriceInput() {
        let prices = data.map((annuncio)=> Number(annuncio.price));

        let maxPrice = (Math.max(...prices));

        priceInput.max = Math.ceil(maxPrice);

        priceInput.value = Math.ceil(maxPrice);

        incrementNumber.innerHTML = Math.ceil(maxPrice);
        
    }

    setPriceInput();

    function filterByPrice(array) {
        let filtered = array.filter((annuncio)=> Number(annuncio.price <= priceInput.value));

        return filtered;
        
    }

    priceInput.addEventListener(`input`, ()=>{
        

        incrementNumber.innerHTML = priceInput.value;

        globalFilter();
    });

    let wordInput = document.querySelector(`#wordInput`);

    function filterByWord(array) {

        let nome = wordInput.value;
        let filtered = array.filter((annuncio)=> annuncio.name.toLowerCase().includes(nome.toLowerCase()));

        return filtered;

    }

    wordInput.addEventListener(`input`, ()=>{
        globalFilter();
    });

    function globalFilter() {

        let filteredByCategory = filterByCategory(data);
        let filteredByPrice = filterByPrice(filteredByCategory);
        let filteredByWord = filterByWord(filteredByPrice);

        showCards(filteredByWord);
        
    }

    globalFilter();

});



