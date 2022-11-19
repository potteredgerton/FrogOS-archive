var inputval = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')

apik = "3045dd712ffe6e702e3245525ac7fa38"

function convertion(val) {
  return val
}

btn.addEventListener('click', function() {

  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputval.value + '&appid=' + apik)
    .then(res => res.json())

    .then(data => {

      var nameval = data['name']
      var descrip = data['weather']['0']['description']
      var tempature = data['main']['temp']
      var wndspd = data['wind']['speed']
      city.innerHTML = `Weather of <span>${nameval}<span>`
      temp.innerHTML = `Temperature: <span>${convertion(tempature)} F</span>`
      description.innerHTML = `Sky Conditions: <span>${descrip}<span>`
      wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`
      return;
    })
    .catch(err => alert('Please enter a valid city name. If you did enter a valid city name and are still getting this error contact Frog on discord.'))
})
