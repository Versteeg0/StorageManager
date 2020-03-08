import { DecoratieView } from "../View/DecoratieView.js";
import {KledingView} from "../View/KledingView.js";
import {TierelantijnView} from "../View/TierelantijnView.js";

export default class MagazijnController{
    viewContainer;

    constructor() {
        this.viewContainer = document.getElementById('container');

        this.decoratieView = new DecoratieView(this);
        this.kledingView = new KledingView(this);
        this.tierelantijnView = new TierelantijnView(this);

        this.createMenu();
        this.decoratieView.draw();
        this.kledingView.draw();
        this.tierelantijnView.draw();

        document.getElementById("kleding").style.display = "none";
        document.getElementById("tierelantijn").style.display = "none";
    }

    createMenu() {
        //Create menu div
        let menu = document.createElement("nav");
        menu.classList.add("navbar", "navbar-expand-sm", "bg-dark", "navbar-dark")

        let ul = document.createElement("ul");
        ul.classList.add("navbar-nav");

        //Create deco link
        let decoLi = document.createElement("li");
        decoLi.classList.add("nav-item");
        let decoA = document.createElement("a");
        decoA.classList.add("nav-item", "nav-link");
        decoA.innerText = "Decoratie";

        decoLi.appendChild(decoA);
        ul.appendChild(decoLi);

        //Create clothing link
        let kledingLi = document.createElement("li");
        kledingLi.classList.add("nav-item");
        let kledingA = document.createElement("a");
        kledingA.classList.add("nav-item", "nav-link");
        kledingA.innerText = "Kleding";

        kledingLi.appendChild(kledingA);
        ul.appendChild(kledingLi);

        //Create tierelantijn link
        let tierLI = document.createElement("li");
        tierLI.classList.add("nav-item");
        let tierA = document.createElement("a");
        tierA.classList.add("nav-item", "nav-link");
        tierA.innerText = "Tierelantijn";

        tierLI.appendChild(tierA);
        ul.appendChild(tierLI);

        menu.appendChild(ul);
        this.viewContainer.append(menu)

        //Create eventlisteners
        decoA.addEventListener('click', function(){
            document.getElementById("decoratie").style.display = "block";
            document.getElementById("kleding").style.display = "none";
            document.getElementById("tierelantijn").style.display = "none";
        });

        kledingA.addEventListener('click', function(){
            document.getElementById("decoratie").style.display = "none";
            document.getElementById("kleding").style.display = "block";
            document.getElementById("tierelantijn").style.display = "none";
        });


        tierA.addEventListener('click', function(){
            document.getElementById("decoratie").style.display = "none";
            document.getElementById("kleding").style.display = "none";
            document.getElementById("tierelantijn").style.display = "block";
        })
    }
}
