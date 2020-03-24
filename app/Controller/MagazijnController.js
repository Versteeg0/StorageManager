import {DecoratieView} from "../View/DecoratieView";
import {KledingView} from "../View/KledingView";
import {TierelantijnView} from "../View/TierelantijnView";
import {MenuView} from "../View/MenuView";
import {FormView} from "../View/FormView";
import {WeerView} from "../View/WeerView";
import {Weer} from "../Model/Weer.js"
import {MagazijnItem} from "../Model/MagazijnItem";
import {MagazijnItemService} from "../Model/MagazijnItemService";
import {PopupView} from "../View/PopupView";
import {PageService} from "../Model/PageService";

export default class MagazijnController{

    constructor() {
        this.menuView = new MenuView();
        this.menuView.createMenu();

        this.weerView = new WeerView();
        this.Weer = new Weer();
        this.item = new MagazijnItem();
        this.itemService = new MagazijnItemService();
        this.pageService = new PageService();

        this.popupView = new PopupView();

        this.decoratieView = new DecoratieView();


        this.kledingView = new KledingView();
        this.kledingItems = this.itemService.getItems("Kleding");

        this.tierelantijnView = new TierelantijnView();
        this.tierelantijnItems = this.itemService.getItems("Tierelantijn");

        this.formView = new FormView();

        this.drawPages();

        this.kledingView.draw(this.kledingItems);
        this.tierelantijnView.draw(this.tierelantijnItems);
        this.formView.createForm();

        this.weerView.generateTable();

        //Weerview methods
        this.weerView.getTemp = (city) =>{
            this.getTemp(city);
        };

        this.weerView.getTemp("Amsterdam");

        this.formView.processPhase1 = (category) => {
            this.item.category = category;
            this.formView.phase2()
        };


        //Form methods
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

            this.drawPages();

            this.formView.phase1();
            this.item = new MagazijnItem();
        };

        //Save Pages
        this.decoratieView.savePage = (data) => {
          this.pageService.saveDecoratiePage(data);
        };

        //Details methods
        this.decoratieView.showDetails = (data, container) => {
            let item = this.itemService.getItem(data);
            this.popupView.handleDetails(item, container);
        };

        this.popupView.deleteItem = (data) => {
            this.itemService.deleteItem(data);
            this.drawPages();
        };

        document.getElementById("kleding").style.display = "none";
        document.getElementById("tierelantijn").style.display = "none";
    }

    async getTemp(city){
        let x = await this.Weer.generateJsonFromAPI(city);
        this.weerView.setTemp(x);
    }

    drawPages(){
        this.decoratieView.draw(this.itemService.getItems("Decoratie"), this.pageService.getDecoratiePage());
        this.decoratieView.eventListeners();
    }

}
