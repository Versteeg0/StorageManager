import {DecoratieView} from "../View/DecoratieView";
import {KledingView} from "../View/KledingView";
import {TierelantijnView} from "../View/TierelantijnView";
import {MenuView} from "../View/MenuView";
import {FormView} from "../View/FormView";
import {MagazijnItem} from "../Model/MagazijnItem";
import {MagazijnItemService} from "../Model/MagazijnItemService";

export default class MagazijnController{

    constructor() {
        this.item = new MagazijnItem();
        this.itemService = new MagazijnItemService();
        this.decoratieView = new DecoratieView();
        this.kledingView = new KledingView();
        this.tierelantijnView = new TierelantijnView();
        this.menuView = new MenuView();
        this.formView = new FormView();

        this.menuView.createMenu();
        this.decoratieView.draw();
        this.kledingView.draw();
        this.tierelantijnView.draw();
        this.formView.createForm();

        this.formView.processPhase1 = (category) => {
            this.item.category = category;
            this.formView.phase2()
        };

        this.formView.processPhase2 = (data) => {
            this.item.name = data[0];
            this.item.description = data[1];
            this.item.mVoorraad = data[2];
            this.item.hVoorraad = data[3];
            this.formView.phase3(this.item.category);
        };

        this.formView.processPhase3 = (data) => {
            if(this.item.category == "Decoratie"){
                this.item.size = data.size;
                this.item.color = data.color;
                this.item.amountInBox = data.amount;
            }else if(this.item.category == "Kleding"){
                this.item.color = data.color;
                this.item.weight = data.weight;
            }else{
                this.item.weight = data.weight;
            }

            this.itemService.saveItem(this.item);
            this.formView.phase1();
            this.item = new MagazijnItem();
        };

        document.getElementById("kleding").style.display = "none";
        document.getElementById("tierelantijn").style.display = "none";
    }


}
