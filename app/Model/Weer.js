export class Weer {


    generateJsonFromAPI(city) {
        /*        return new Promise((resolve, reject) => {
                    fetch('http://weerlive.nl/api/json-data-10min.php?key=33156b745d&locatie=' + city)
                        .then(response => response.json().then(data => {
                            if(data.success == 'success') {
                                console.log(response);
                                resolve(data.success);
                            }
                            else
                                reject(data);
                        }))
                        .catch(err => reject(err))
                        .finally(() => {
                            this.counter++;
                        });
                });*/

        fetch('http://weerlive.nl/api/json-data-10min.php?key=33156b745d&locatie=' + city)
            .then(function(resp) { return resp.json() })
            .then(function (data) {
                    return data.liveweer[0].temp
                })
            .catch(function(error){
            console.log(error);
        });



    }




    getWeatherFromJson(jsonResult) {
        let result = JSON.parse(jsonResult);

        let cities = {};

        for (let i = 0, std; i < result.steden.length; i++) {
            std = result.steden[i];
            steden[std.id] = std;
        }

        return console.log(steden);
    }

    getTemperature(city) {
        let api = this.generateJsonFromAPI(city);

        return api;
    }
}
