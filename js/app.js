'use strict';

(function (){
    function init(){
        var router = new Router([
           new Route('kleding', 'kleding.html', true),
           new Route('tierelantijn', 'tierelantijn.html'),
           new Route('decoratie', 'decoratie.html')
        ]);
    }
    init();
}());