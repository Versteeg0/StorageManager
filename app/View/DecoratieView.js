export class DecoratieView{

    constructor() {
        this.container = document.getElementById('container');
        this.decoratieContainer = document.createElement("container");
        this.decoratieContainer.id = "decoratie";
        this.decoratieRow = document.createElement("div");
        this.decoratieRow.classList.add("row");
        this.grid = document.createElement("div");
        this.grid.classList.add("dGrid", "col-4")
    }
    draw(data){

        let header = document.createElement("h2");
        header.innerText = "Decoratie";
        this.decoratieContainer.appendChild(header);
        this.container.appendChild(this.decoratieContainer);
        this.decoratieContainer.appendChild(this.decoratieRow);
        this.makeRow();
        this.makeColumns();
        this.makeDropDown(data)

    }
    makeRow(){
        this.decoratieRow.appendChild(this.grid);
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
           let oldItem = document.getElementById("selectedDItem");
            if(oldItem != null){
                this.dropdownCol.removeChild(oldItem);
            }
           let selectedItem = document.createElement("div");
           selectedItem.className = "cell";
           selectedItem.id = "selectedDItem";

           let dropValue = document.createLabel(dropdown.value.substr(0,4));
           dropValue.classList.add("dropValue");
           selectedItem.appendChild(dropValue);

           this.dropdownCol.appendChild(selectedItem);
        });

        this.dropdownCol.appendChild(dropdown);
        this.decoratieRow.appendChild(this.dropdownCol);
    }
}