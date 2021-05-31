var countriesDiv = document.querySelector('.countries');

fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(function (countries) {
        showCountries(countries)
    })


let selectRegion = document.querySelector('.regions');
selectRegion.addEventListener('change', function (event) {
    console.log(`You like ${event.target.value}`);
    countriesDiv.innerHTML = '';
    fetch('https://restcountries.eu/rest/v2/region/' + event.target.value)
        .then(response => response.json())
        .then(
            function (countries) {
                showCountries(countries)
            })
})

let inputRegion = document.querySelector('input');
inputRegion.addEventListener('change', function (event) {
    console.log(`You like ${event.target.value}`);
    countriesDiv.innerHTML = '';
    fetch('https://restcountries.eu/rest/v2/name/' + event.target.value)
        .then(response => response.json())
        .then(
            function (countries) {
                showCountries(countries)
            })
})

function showCountries(countries) {
    console.log(countries)
    countries.forEach(country =>
        countriesDiv.innerHTML +=
        '<div class="country"> <div class="flag" style="background-image: url(\'' + country.flag +
        '\');"> </div><p class="name">' + country.name + '</p><p class="infos">Population : <span>' + country
        .population + '</span></p><p class="infos">Region : <span>' + country.region +
        '</span></p><p class="infos">Capital : <span>' + country.capital + '</span></p></div>'
    )
}


let themeButton = document.querySelector('.themeButton');
themeButton.addEventListener('click', function(){
    let themeLink = document.querySelector('.theme');
    if (themeLink.classList.contains('dark')){
        themeLink.href="css/light-styles.css";
        themeLink.classList.remove('dark');
        themeLink.classList.add('light');}
    else {
        themeLink.href="css/dark-styles.css";
        themeLink.classList.remove('light');
        themeLink.classList.add('dark');}
    
})