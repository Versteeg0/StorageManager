export class KledingView{
    row;

    constructor(controller) {
        this.container = document.getElementById('container')
        this.row = document.getElementsByClassName("gridRow");
    }

    draw(){
        this.makeRow();
        this.makeColumns();
    }

    makeRow(){
        let row = document.createElement("div");
        this.container.appendChild(row).className = "gridRow";
    }

    makeColumns(){
        for (let i = 0; i < 225; i++) {
            let newCell = document.createElement("div");
            this.row[0].appendChild(newCell).className = "cell";
        };
    }
}