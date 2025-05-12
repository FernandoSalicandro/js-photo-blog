//DOM
const photoBlogSection = document.querySelector(`.row`)
//API
const apiUrl = `https://lanciweb.github.io/demo/api/pictures/`;

//CHIAMATA AJAX
axios.get(apiUrl).then((response) => {
    let template = ``;

    // PRELIEVO OGGETTI DALL'ARRAY RESPONSE
    response.data.forEach(elem => {

        // DESTRUCTURING DELLE CHIAVI UTILI AL TEMPLATE
        const { title, date, url } = elem

        // CREAZIONE TEMPLATE
        template += ` <div class="col">
                    <div class="card">
                        <img src=${url} alt="">
                        <p class="date">${date}</p>
                        <p class="title">${title}</p>
                    </div>
                </div>`
    });
    // INIEZIONE TEMPLATE NELLA ROW DEDICATA
    photoBlogSection.innerHTML = template;
})







