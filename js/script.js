// DOM
const photoBlogSection = document.querySelector(`.row`);
const overlayOn = document.querySelector(`.overlay`);
const overlayImage = overlayOn.querySelector(`img`);
const closeBtn = overlayOn.querySelector(`.close`);

// API
const apiUrl = `https://lanciweb.github.io/demo/api/pictures/`;

axios.get(apiUrl).then((response) => {
    let template = ``;

    response.data.forEach(elem => {
        const { title, date, url } = elem;

        template += `
        <div class="col">
            <div class="card">
                <img src="${url}" alt="">
                <p class="date">${date}</p>
                <p class="title">${title}</p>
            </div>
        </div>`;
    });

    photoBlogSection.innerHTML = template;

    const cards = document.querySelectorAll(`.card`);

    cards.forEach((card) => {
        card.addEventListener(`click`, function () {
            const clickedImg = card.querySelector("img").src;
            overlayImage.src = clickedImg;
            overlayOn.classList.remove("hidden");
        });
    });

    closeBtn.addEventListener(`click`, function () {
        overlayOn.classList.add("hidden");
    });
});
