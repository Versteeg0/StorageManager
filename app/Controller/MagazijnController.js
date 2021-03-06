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
        this.tierelantijnView = new TierelantijnView();
        this.formView = new FormView();

        this.drawPages();

        this.formView.createForm();

        this.weerView.generateTable();

        //Weerview methods
        this.weerView.getTemp = (city) =>{
            this.getTemp(city);
        };

        this.weerView.getTemp("Amsterdam");

        //Form methods
        this.formView.processPhase1 = (category) => {
            this.item.category = category;
            this.formView.phase2()
        };

        this.formView.processPhase2 = (data) => {
            this.item.name = data[0];
            this.item.description = data[1];
            this.item.mVoorraad = data[2];
            this.item.hVoorraad = data[3];
            this.item.salePriceEXCL = data[4];
            this.item.salePriceBTW = parseInt(this.item.salePriceEXCL) + this.calculateBTW(this.item.salePriceEXCL);
            this.formView.phase3(this.item.category);
        };

        this.formView.processPhase3 = (data) => {
            if(this.item.category === "Decoratie"){
                this.item.size = data.size;
                this.item.color = data.color;
                this.item.amountInBox = data.amount;
            }else if(this.item.category === "Kleding"){
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

        this.kledingView.savePage = (data) => {
            this.pageService.saveKledingPage(data);
        };

        this.tierelantijnView.savePage = (data) => {
            this.pageService.saveTierelantijnPage(data);
        };

        //Details methods
        this.decoratieView.showDetails = (data, container) => {
            let item = this.itemService.getItem(data);
            this.popupView.handleDetails(item, container);
        };

        this.kledingView.showDetails = (data, container) => {
            let item = this.itemService.getItem(data);
            this.popupView.handleDetails(item, container);
        };

        this.tierelantijnView.showDetails = (data, container) => {
            let item = this.itemService.getItem(data);
            this.popupView.handleDetails(item, container);
        };

        this.popupView.editItem = (data) => {
            data.salePriceBTW = parseInt(data.salePriceEXCL) + this.calculateBTW(data.salePriceEXCL);
            this.itemService.saveItem(data);
            this.drawPages();
        };

        this.popupView.saveImage = (id, image) => {
            let item = this.itemService.getItem(id);
            item.photo = image;
            this.itemService.saveItem(item);
            this.drawPages();
        };

        document.getElementById("kleding").style.display = "none";
        document.getElementById("tierelantijn").style.display = "none";
    }

    // get the temperature from the webAPI
    async getTemp(city){
        let x = await this.Weer.generateJsonFromAPI(city);
        this.weerView.setTemp(x);
    }

    // Refreshes all the pages
    drawPages(){
        this.decoratieView.draw(this.itemService.getItems("Decoratie"), this.pageService.getDecoratiePage());
        this.decoratieView.eventListeners();

        this.kledingView.draw(this.itemService.getItems("Kleding"), this.pageService.getKledingPage());
        this.kledingView.eventListeners();

        this.tierelantijnView.draw(this.itemService.getItems("Tierelantijn"), this.pageService.getTierelantijnPage());
        this.tierelantijnView.eventListeners();
    }

    // Calculates the price including the BTW
    calculateBTW(price){
        return (price / 100) * 21;
    }
}
