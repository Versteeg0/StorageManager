export class TierelantijnView{
    row;

    constructor(controller) {
        this.container = document.getElementById('container')
        this.tierelantijnContainer = document.createElement("div");
        this.tierelantijnContainer.id = "tierelantijn";
        this.row = document.getElementsByClassName("tRow");
    }

    draw(){
        let header = document.createElement("h2");
        header.innerText = "Tierelantijn";
        this.tierelantijnContainer.appendChild(header);

        this.makeRow();
        this.makeColumns();
    }

    makeRow(){
        let row = document.createElement("div");
        this.tierelantijnContainer.appendChild(row).className = "tRow";
        this.container.appendChild(this.tierelantijnContainer);
    }

    makeColumns(){
        for (let i = 0; i < 225; i++) {
            let newCell = document.createElement("div");
            this.row[0].appendChild(newCell).className = "cell";
        };
    }
}