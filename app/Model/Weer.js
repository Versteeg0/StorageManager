export class Weer {


    generateJsonFromAPI(city) {
       return fetch('http://weerlive.nl/api/json-data-10min.php?key=33156b745d&locatie=' + city)
            .then(function(resp) { return resp.json() })
            .then(function (response) {
                   let x = response.liveweer[0].temp;
                   console.log(x)
                   return x;
                })
            .catch(function(error){
            console.log(error);
            });

   /*     return fetch('http://weerlive.nl/api/json-data-10min.php?key=33156b745d&locatie=' + city)
            .then(res => res.json()) //wat denk jij dat dit doet?
            .then(data => {
                if(data.status != 'success')
                    return Promise.reject(data.status); //en dit?
                console.log(data.liveweer[0].temp);
                return data.liveweer[0].temp;
            })*/
    }

}
