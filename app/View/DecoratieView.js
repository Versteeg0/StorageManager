export class DecoratieView{

    constructor() {
        this.container = document.getElementById('container');
        this.decoratieContainer = document.createElement("div");
        this.decoratieContainer.id = "decoratie";
        this.row = document.getElementsByClassName("dRow");
    }
    draw(){
        let header = document.createElement("h2");
        header.innerText = "Decoratie";
        this.decoratieContainer.appendChild(header);

        this.makeRow();
        this.makeColumns();
    }

    makeRow(){
        let row = document.createElement("div");
        this.decoratieContainer.appendChild(row).className = "dRow";
        this.container.appendChild(this.decoratieContainer);
    }

    makeColumns(){
        for (let i = 0; i < 225; i++) {
                let newCell = document.createElement("div");
                this.row[0].appendChild(newCell).className = "cell";
        }
    }
}