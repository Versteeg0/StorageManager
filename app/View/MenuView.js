export class MenuView{
    row;

    constructor(controller) {
        this.container = document.getElementById('container');
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
        this.container.append(menu)

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


