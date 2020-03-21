import {DecoratieView} from "../View/DecoratieView";
import {KledingView} from "../View/KledingView";
import {TierelantijnView} from "../View/TierelantijnView";
import {MenuView} from "../View/MenuView";
import {FormView} from "../View/FormView";
import {WeerView} from "../View/WeerView";
import {Weer} from "../Model/Weer.js"

export default class MagazijnController{

    constructor() {
        this.decoratieView = new DecoratieView(this);
        this.kledingView = new KledingView(this);
        this.tierelantijnView = new TierelantijnView(this);
        this.menuView = new MenuView(this);
        this.formView = new FormView(this);
        this.weerView = new WeerView();
        this.Weer = new Weer();

        this.menuView.createMenu();
        this.decoratieView.draw();
        this.kledingView.draw();
        this.tierelantijnView.draw();
        this.formView.createForm();
        this.weerView.generateTable();


        this.weerView.getTemp = (city) =>{
            this.getTemp(city);
        };

        this.weerView.getTemp("Amsterdam");

        document.getElementById("kleding").style.display = "none";
        document.getElementById("tierelantijn").style.display = "none";
    }

    async getTemp(city){
        let x = await this.Weer.generateJsonFromAPI(city);
        this.weerView.setTemp(x);
    }

}
