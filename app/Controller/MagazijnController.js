import { DecoratieView } from "../View/DecoratieView.js";
import {KledingView} from "../View/KledingView.js";

export default class MagazijnController{
    viewContainer;

    constructor() {
        this.viewContainer = document.getElementById('container');

        this.decoratieView = new DecoratieView(this);
        this.kledingView = new KledingView(this);

        this.createMenu();
        this.decoratieView.draw();

    }

    createMenu() {
        //Create menu div
        let menu = document.createElement("div");
        menu.className="menu";

        //Create deco link
        let decoA = document.createElement("button");
        let deco = document.createTextNode("Decoratie");

        decoA.appendChild(deco);
        menu.appendChild(decoA);

        //Create clothing link
        let kledingA = document.createElement("button");
        let kleding = document.createTextNode("Kleding");

        kledingA.appendChild(kleding);
        menu.appendChild(kledingA)

        //Create tierelantijn link
        let tierA = document.createElement("button");
        let tier = document.createTextNode("Tierelantijn");

        tierA.appendChild(tier);
        menu.appendChild(tierA);

        this.viewContainer.append(menu)


        //Create eventlisteners
        decoA.addEventListener('click', function(){
            this.decoratieView.draw();
        });

        kledingA.addEventListener('click', function(){
            this.kledingView.draw();
        });

        tierA.addEventListener('click', function(){
            alert("tierA");
        })
    }
}
