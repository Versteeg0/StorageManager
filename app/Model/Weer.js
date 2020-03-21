export class Weer {

    constructor() {
        document.createElement("li")
    }

    generateJsonFromAPI(city) {

        return fetch('http://weerlive.nl/api/json-data-10min.php?key=33156b745d&locatie=' + city)
            .then(res => res.json()) //wat denk jij dat dit doet?
            .then(data => {
                return data.liveweer[0].temp;
            }) .catch(err => reject(err))
    }
}
