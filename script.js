
let key = "9c2f887d913cab2d2c422313636ae896"

function putOnScreen(dice) {

    document.querySelector(".city").innerHTML = "Tempo em " + dice.name
    document.querySelector(".degrees").innerHTML = Math.floor(dice.main.temp) + " °C"
    document.querySelector(".time").innerHTML = dice.weather[0].description
    document.querySelector(".moisture").innerHTML = "Umidade " + dice.main.humidity + "%"
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + dice.weather[0].icon + ".png"

}

async function searchCity(city) {

    let dice = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + key + "&lang=pt_br" + "&units=metric").then(res => res.json())

    putOnScreen(dice)
}

function clickButton() {

    let city = document.querySelector(".input-city").value

    searchCity(city)

}