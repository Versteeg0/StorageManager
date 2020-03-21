export class TierelantijnView{

    constructor() {
        this.container = document.getElementById('container');
        this.tierelantijnContainer = document.createElement("container");
        this.tierelantijnContainer.id = "tierelantijn";
        this.tierelantijnRow = document.createElement("div");
        this.tierelantijnRow.classList.add("row");
        this.grid = document.createElement("div");
        this.grid.classList.add("tGrid", "col-4");
    }

    draw(data){
        let header = document.createElement("h2");
        header.innerText = "Tierelantijn";
        this.tierelantijnContainer.appendChild(header);
        this.container.appendChild(this.tierelantijnContainer);
        this.tierelantijnContainer.appendChild(this.tierelantijnRow);
        this.makeRow();
        this.makeColumns();
        this.makeDropDown(data)
    }

    makeRow(){
        this.tierelantijnRow.appendChild(this.grid);
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

        dropdown.addEventListener('click', () => {
            let oldItem = document.getElementById("selectedTItem");
            if(oldItem != null){
                this.dropdownCol.removeChild(oldItem);
            }
            let selectedItem = document.createElement("div");
            selectedItem.className = "cell";
            selectedItem.id = "selectedTItem";

            let dropValue = document.createLabel(dropdown.value.substr(0,4));
            dropValue.classList.add("dropValue");
            selectedItem.appendChild(dropValue);

            this.dropdownCol.appendChild(selectedItem);
        });


        this.dropdownCol.appendChild(dropdown);
        this.tierelantijnRow.appendChild(this.dropdownCol);
    }
}