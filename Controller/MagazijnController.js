import { Decoratie } from '../views/decoratie.html';
import { Kleding } from '../views/kleding.html';
import { Tierlantijn } from '../views/tierelantijn.html';

export default class MagazijnController{
    viewContainer;

    constructor() {
        this.viewContainer = document.getElementById('app');
        this.decoratieview = new Decoratie(this);
        this.kledingview = new KledingView(this);
        this.tierlantijnview = new TierlantijnView(this);
        start();
    }

     start(){
        fetch('decoratie.html')
            .then(function(){
                this.viewContainer.innerHTML(result);
            })
    }

}
