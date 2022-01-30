const input = document.querySelector('input');
const cardContainer = document.querySelector('.card-container'); 

async function getData() {
    let value = input.value || 'fire';
    const url = `http://www.omdbapi.com/?apikey=e5646aba&s=${value}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
}

document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        getData();
    }
});