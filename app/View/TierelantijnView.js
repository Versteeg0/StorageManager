export class TierelantijnView{

    constructor() {
        this.container = document.getElementById('container');
        this.tierelantijnContainer = document.createPageContainer("tierelantijn");
        this.container.appendChild(this.tierelantijnContainer);
    }

    draw(data, html){
        while (this.tierelantijnContainer.hasChildNodes()) {
            this.tierelantijnContainer.removeChild(this.tierelantijnContainer.lastChild);
        }
        let header = document.createElement("h2");
        header.innerText = "Tierelantijn";
        this.tierelantijnContainer.appendChild(header);

        this.tierelantijnRow = document.createElement("div");
        this.tierelantijnRow.classList.add("row");
        this.grid = document.createElement("div");
        this.grid.classList.add("tGrid", "col-5");
        this.tierelantijnContainer.appendChild(this.tierelantijnRow);

        if(html != null){
            this.grid.innerHTML = html;

            this.decoratieRow.appendChild(this.grid);
        }else{
            this.makeRow();
        }
        this.makeDropDown(data);
        this.makeGarbageCan();
    }

    makeRow(){
        this.grid = document.createCells(this.grid);
        this.tierelantijnRow.appendChild(this.grid);
    }

    makeDropDown(data){
        let array = [];
        for(let i = 0; i < data.length; i++){
            array.push(data[i].name)
        }
        this.dropdownCol = document.createElement("div");
        this.dropdownCol.classList.add("col-4");

        this.dropdown = document.createSelect(array);
        this.dropdown.id = "itemDrop";

        this.dropdown.addEventListener('click', () => {
            let oldItem = document.querySelector(".selectedTItem");
            if(oldItem != null){
                this.dropdownCol.removeChild(oldItem);
            }
            let selectedItem = document.createElement("div");
            selectedItem.classList.add("selectedTItem");
            selectedItem.id = this.dropdown.value;
            selectedItem.draggable = true;

            let dropValue = document.createLabel(this.dropdown.value.substr(0,4));
            dropValue.classList.add("dropValue");
            selectedItem.appendChild(dropValue);

            selectedItem.addEventListener('dragstart', (event) => {
                selectedItem.ondragstart = this.onDragStart(event);
            });

            selectedItem.addEventListener('click', () => {
                this.showDetails(selectedItem.id, this.tierelantijnContainer);
            });

            this.dropdownCol.appendChild(selectedItem);
        });

        this.dropdownCol.appendChild(this.dropdown);
        this.tierelantijnRow.appendChild(this.dropdownCol);
    }

    makeGarbageCan(){
        this.garbageCan = document.createGarbage();
        this.garbageCan.addEventListener('dragover', (event) => {
            this.garbageCan.ondragover = this.onDragOver(event);
        });
        this.garbageCan.addEventListener('drop', (event) => {
            this.garbageCan.ondrop = this.onDrop(event);
            this.savePage(this.grid.innerHTML);
        });
        this.dropdownCol.appendChild(this.garbageCan);
    }

    onDragStart(event){
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
        if(draggableElement != null){
            if(event.target.classList.contains("holder")){
                if(draggableElement.className == "selectedTItem"){
                    draggableElement.classList.remove("selectedTItem");
                }
                draggableElement.classList.add("dropped");
                const dropzone = event.target;
                console.log(draggableElement);
                dropzone.appendChild(draggableElement);
                this.dropdown.removeAttribute(draggableElement.name);
                event
                    .dataTransfer
                    .clearData();
            }else if(event.target.classList.contains("garbage")){
                this.garbageCan.appendChild(draggableElement);
                this.garbageCan.removeChild(draggableElement);
            }
        }
    }

    eventListeners(){
        let cells = document.querySelectorAll('#cell');
        for (let i = 0; i < cells.length; i++) {
            cells[i].addEventListener('dragover', (event) => {
                cells[i].ondragover = this.onDragOver(event);
            });

            cells[i].addEventListener('drop', (event) => {
                cells[i].ondrop = this.onDrop(event);
                this.savePage(this.grid.innerHTML);
            });
        }

        let dropped = document.querySelectorAll('.dropped');
        for (let i = 0; i < dropped.length; i++) {
            dropped[i].addEventListener('click', () => {
                this.showDetails(dropped[i].id, this.tierelantijnContainer);
            });

            dropped[i].addEventListener('dragstart', (event) => {
                dropped[i].ondragstart = this.onDragStart(event);
            });
        }
    }
}