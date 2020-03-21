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
                newCell.classList.add("holder", "cell");
                newCell.addEventListener('dragover', (event) => {
                    newCell.ondragover = this.onDragOver(event);
                });
                newCell.addEventListener('drop', (event) => {
                    newCell.ondrop = this.onDrop(event);
                });
                this.grid.appendChild(newCell);
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
           selectedItem.draggable = true;
            selectedItem.addEventListener('dragstart', (event) => {
                selectedItem.ondragstart = this.onDragStart(event);
            });
           let dropValue = document.createLabel(dropdown.value.substr(0,4));
           dropValue.classList.add("dropValue");
           selectedItem.appendChild(dropValue);

           this.dropdownCol.appendChild(selectedItem);
        });

        this.dropdownCol.appendChild(dropdown);
        this.decoratieRow.appendChild(this.dropdownCol);
    }

    onDragStart(event) {
        if(event.dataTransfer) {
            event
                .dataTransfer
                .setData('text/plain', event.target.id);
        }
        else if(event.originalEvent.dataTransfer) {
            event
                .originalEvent
                .dataTransfer
                .setData('text/plain', event.target.id);
        }
    }

    onDragOver(event) {
        event.preventDefault();
    }

    onDrop(event) {
        const id = event
            .dataTransfer
            .getData('text');

        const draggableElement = document.getElementById(id);
        const dropzone = event.target;

        dropzone.appendChild(draggableElement);

        event
            .dataTransfer
            .clearData();
    }
}