export class DecoratieView{

    constructor() {
        this.container = document.getElementById('container');
        this.decoratieContainer = document.createPageContainer("decoratie");
        this.container.appendChild(this.decoratieContainer);
    }

    draw(data, html){
        while (this.decoratieContainer.hasChildNodes()) {
            this.decoratieContainer.removeChild(this.decoratieContainer.lastChild);
        }
        let header = document.createElement("h2");
        header.innerText = "Decoratie";
        this.decoratieContainer.appendChild(header);

        this.decoratieRow = document.createElement("div");
        this.decoratieRow.classList.add("row");
        this.grid = document.createElement("div");
        this.grid.classList.add("dGrid", "col-5");
        this.decoratieContainer.appendChild(this.decoratieRow);

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
        this.decoratieRow.appendChild(this.grid);
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
           let oldItem = document.querySelector(".selectedDItem");
            if(oldItem != null){
                this.dropdownCol.removeChild(oldItem);
            }
           let selectedItem = document.createElement("div");
           selectedItem.classList.add("selectedDItem");
           selectedItem.id = this.dropdown.value;
           selectedItem.draggable = true;

           let dropValue = document.createLabel(this.dropdown.value.substr(0,4));
           dropValue.classList.add("dropValue");
           selectedItem.appendChild(dropValue);

           selectedItem.addEventListener('dragstart', (event) => {
              selectedItem.ondragstart = this.onDragStart(event);
           });

            selectedItem.addEventListener('click', () => {
                this.showDetails(selectedItem.id, this.decoratieContainer);
            });

           this.dropdownCol.appendChild(selectedItem);
        });

        this.dropdownCol.appendChild(this.dropdown);
        this.decoratieRow.appendChild(this.dropdownCol);
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
        if(draggableElement != null){
            if(event.target.classList.contains("holder")){
                    if(draggableElement.className == "selectedDItem"){
                        draggableElement.classList.remove("selectedDItem");
                    }
                    draggableElement.classList.add("dropped");
                    const dropzone = event.target;

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
                this.showDetails(dropped[i].id, this.decoratieContainer);
            });

            dropped[i].addEventListener('dragstart', (event) => {
                dropped[i].ondragstart = this.onDragStart(event);
            });
        }
    }
}