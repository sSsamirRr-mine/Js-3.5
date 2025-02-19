'use strict';

let btn = document.querySelector('button');
let search = document.querySelector('input');
let ol = document.querySelector('ol');
async function getNationality() {
    let url = await fetch(`https://api.nationalize.io/?name=${search.value}`);
    let info = await url.json();
    ol.innerHTML = ''
    info?.country.forEach(Item => {
        let li = document.createElement('li');
        li.innerHTML = li.innerHTML = `<img src="https://flagcdn.com/w20/${Item.country_id.toLowerCase()}.png" srcset="https://flagcdn.com/w40/${Item.country_id.toLowerCase()}.png 2x"> ${Item.country_id.toUpperCase()} - ${Math.round(Item.probability * 100)}%`;
        ol.appendChild(li);
    });
}
btn.addEventListener('click', () => {
    getNationality();
});
