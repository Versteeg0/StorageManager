import { DecoratieView } from "../View/DecoratieView.js";
import {KledingView} from "../View/KledingView.js";
import {TierelantijnView} from "../View/TierelantijnView.js";
import {MenuView} from "../View/MenuView.js";

export default class MagazijnController{
    viewContainer;

    constructor() {
        this.viewContainer = document.getElementById('container');

        this.decoratieView = new DecoratieView(this);
        this.kledingView = new KledingView(this);
        this.tierelantijnView = new TierelantijnView(this);
        this.menuView = new MenuView(this);

        this.menuView.createMenu();
        this.decoratieView.draw();
        this.kledingView.draw();
        this.tierelantijnView.draw();

        document.getElementById("kleding").style.display = "none";
        document.getElementById("tierelantijn").style.display = "none";
    }
}
