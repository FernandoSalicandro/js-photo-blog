//DOM
const photoBlogSection = document.querySelector(`.row`);
const overlayOn = document.querySelector(`.overlay`);
const overlayImage = overlayOn.querySelector(`img`);
const closeBtn = overlayOn.querySelector(`.close`);

// API

// URL dell'API
const apiUrl = `https://lanciweb.github.io/demo/api/pictures/`;

//FETCH DEI DATI E CREAZIONE DELLE CARD
axios.get(apiUrl).then((response) => {
    // Inizializzazo il template delle card
    let template = ``;

    // Ciclo su ogni elemento della response API
    response.data.forEach(elem => {
        // Destrutturo i dati ricevuti
        const { title, date, url } = elem;

        // creo il template  per ogni card
        template += `
        <div class="col">
            <div class="card">
                <img src="${url}" alt="">
                <p class="date">${date}</p>
                <p class="title">${title}</p>
            </div>
        </div>`;
    });

    // Inietto il template nel DOM
    photoBlogSection.innerHTML = template;

    //EVENTI

    // Seleziono tutte le card
    const cards = document.querySelectorAll(`.card`);

    // Aggiungo l'event listener per ogni card
    cards.forEach((card) => {
        card.addEventListener(`click`, function () {
            // Ogni volta che clicco sulla una card
            // 
            // Prendo l'url dell'immagine cliccata
            const clickedImg = card.querySelector("img").src;
            // Imposto l'immagine nell'overlay (corrispondente a quella della card clickata)   
            overlayImage.src = clickedImg;
            // Mostro l'overlay                    
            overlayOn.classList.remove("hidden");
        });
    });

    //Aggiungo l'event listener per il pulsante di chiusura overlay
    closeBtn.addEventListener(`click`, function () {
        overlayOn.classList.add("hidden");
    });
});