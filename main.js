const input = document.querySelector('input');
const cardContainer = document.querySelector('.card-container');

async function getData() {
    let value = input.value || 'fire';
    const url = `http://www.omdbapi.com/?apikey=e5646aba&s=${value}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data['Search']);
    cardContainer.innerHTML = '';
    data['Search'].forEach(element => {
        createCard(element);
    });

}

const showData = (data) => {

}

const createCard = (data) => {

    const figure = document.createElement('figure');

    const img = document.createElement('img');
    img.classList.add('poster');
    img.src = data.Poster;

    const figcaption = document.createElement('figcaption');
    figcaption.classList.add('card-info');

    const span = document.createElement('span');
    span.classList.add('title');
    span.textContent = data.Title;

    const span2 = document.createElement('span');
    span2.classList.add('year');
    span2.textContent = data.Year;

    figcaption.append(span);
    figcaption.append(span2);

    figure.append(img);
    figure.append(figcaption);

    cardContainer.append(figure);
}

document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        getData();
    }
});
document.addEventListener('DOMContentLoaded', getData);