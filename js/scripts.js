// Creation of the Vue to show the countries
const vueCountries = new Vue({
    el: '#vueContainer',
    data: {
        countries: countries,
        country:country,
        theme: "dark",
        isShow :true
    },
    methods: {
        //function to show the countries by name
        name: function (event) {
            showCountries("https://restcountries.eu/rest/v2/name/", event.target.value)
        },
        //function to show the countries by region
        region: function (event) {
            showCountries("https://restcountries.eu/rest/v2/", event.target.value)
        },
        //function to show all the countries
        all: function (event) {
            showCountries("https://restcountries.eu/rest/v2/all", "")
        },
        //function to switch between themes
        switchTheme: function(event) {
            if (this.theme == "dark") {
                    this.theme = "light"
            } else {
                    this.theme = "dark"
            }
        },
        //function to get details
        getDetailsOfCountry: function (name) {
            console.log(name)
            fetch("https://restcountries.eu/rest/v2/name/"+name)
            .then(response => response.json())
            .then(
                function (country) {
                    vueCountries.countries = ""
                    vueCountries.country = country
                    vueCountries.isShow = false
                })
        },
    },
    mounted(){
        // Load all countries when the page load the first time
        this.all()
    }
})

// Function to show the countries depends on the filter choosen
function showCountries(url, eventValue) {
    
    fetch(url + eventValue)
        .then(response => response.json())
        .then(
            function (countries) {
                vueCountries.countries = countries
                vueCountries.country = ""
                vueCountries.isShow = true
            })
}

