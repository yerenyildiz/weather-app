const API_KEY = "3cb4e3f241c24a0792d203219230101";

const cardEl = document.querySelector(".cards")

// cardEl.insertAdjacentHTML("afterend", '<div class="card1"> <p>ISTANBUL <br> <img src="" alt=""> <br> Sisli <br> 45 Derece </p> </div>');

async function callWeather (city) {
    await fetch(`http://api.weatherapi.com/v1/current.json?key=3cb4e3f241c24a0792d203219230101&q=${city}&aqi=yes`).then(res => res.json()).then(data => cardEl.insertAdjacentHTML("beforeend", `<div class="card1"> <p>${data.location.name} <br> <img src="${data.current.condition.icon}" alt=""> <br> ${data.current.condition.text} <br> ${data.current.temp_c} °C </p> </div>`));
}


callWeather("Istanbul")
callWeather("Ankara")
callWeather("Kahramanmaras")
