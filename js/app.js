'use strict';
import MagazijnController from "../Controller/MagazijnController";

(function (){
    function init(){

        let controller = new MagazijnController();
         var router = new Router([
            new Route('kleding', 'kleding.html', true),
            new Route('tierelantijn', 'tierelantijn.html'),
            new Route('decoratie', 'decoratie.html')
         ]);

        controller.start();
    }
    init();
}());
