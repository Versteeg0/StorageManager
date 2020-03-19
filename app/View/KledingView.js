export class KledingView{


    constructor() {
        this.container = document.getElementById('container');
        this.kledingContainer = document.createElement("div");
        this.kledingContainer.id = "kleding";
        this.row = document.getElementsByClassName("kRow");
    }

    draw(){
        let header = document.createElement("h2");
        header.innerText = "Kleding";
        this.kledingContainer.appendChild(header);

        this.makeRow();
        this.makeColumns();
    }

    makeRow(){
        let row = document.createElement("div");
        this.kledingContainer.appendChild(row).className = "kRow";
        this.container.appendChild(this.kledingContainer);
    }

    makeColumns(){
        for (let i = 0; i < 225; i++) {
            let newCell = document.createElement("div");
            this.row[0].appendChild(newCell).className = "cell";
        }
    }
}