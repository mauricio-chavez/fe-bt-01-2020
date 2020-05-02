const showButton = document.querySelector('#show-button')
const countries = document.querySelector('#countries')

let show = false


function showCountries() {
  if (!show) {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(data => {
        let countriesUl = ''
        for (let i = 0; i < data.length; i++) {
          const country = data[i];
          if (country.name === 'Albania') {
            console.log(country)
          }
          countriesUl += `<li>${country.name} - ${country.timezones}</li>\n`
        }
        countries.innerHTML = countriesUl
      })
      showButton.textContent = 'Ocultar países'
  } else {
    showButton.textContent = 'Mostrar países'
    countries.innerHTML = ''
  }
  show = !show
}

showButton.addEventListener('click', showCountries)
