
const example1 = new Vue({
    el: '#vueContainer',
    data: {
        countries: countries,
    },
    methods: {
        name: function (event) {
            fetch("https://restcountries.eu/rest/v2/name/" + event.target.value)
                .then(response => response.json())
                .then(
                    function (countries) {
                        console.log(countries)
                        this.countries = countries
                    })
        },
        region: function (event) {
            fetch("https://restcountries.eu/rest/v2/region/" + event.target.value)
                .then(response => response.json())
                .then(
                    function (countries) {
                        this.countries = countries
                    })
        },
        all: function (event) {
            fetch("https://restcountries.eu/rest/v2/all")
                .then(response => response.json())
                .then(
                    function (countries) {
                        console.log(countries)
                        
                        this.countries = countries
                    })
        }
    }
})


example1.all()