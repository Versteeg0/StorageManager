export class KledingView{


    constructor() {
        this.container = document.getElementById('container');
        this.kledingContainer = document.createElement("container");
        this.kledingContainer.id = "kleding";
        this.kledingRow = document.createElement("div");
        this.kledingRow.classList.add("row");
        this.grid = document.createElement("div");
        this.grid.classList.add("kGrid", "col-4");
    }

    draw(data){
        let header = document.createElement("h2");
        header.innerText = "Kleding";
        this.kledingContainer.appendChild(header);
        this.container.appendChild(this.kledingContainer);
        this.kledingContainer.appendChild(this.kledingRow);
        this.makeRow();
        this.makeColumns();
        this.makeDropDown(data)
    }

    makeRow(){
        this.kledingRow.appendChild(this.grid);
    }

    makeColumns(){
        for (let i = 0; i < 225; i++) {
            let newCell = document.createElement("div");
            this.grid.appendChild(newCell).className = "cell";
        }
    }

    makeDropDown(data){
        let array = [];
        for(let i = 0; i < data.length; i++){
            array.push(data[i].name)
        }
        this.dropdownCol = document.createElement("div");
        this.dropdownCol.classList.add("col-4")

        let dropdown = document.createSelect(array);
        dropdown.id = "itemDrop";

        this.dropdownCol.appendChild(dropdown);
        this.kledingRow.appendChild(this.dropdownCol);
    }
}