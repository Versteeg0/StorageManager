export class WeerView {

    constructor() {
        this.container = document.getElementById('container');
    }

    generateTable() {
        let weerDiv = document.createElement("div");
        weerDiv.id='weerDiv';

        this.chooseCity = document.createSelect(["Amsterdam", "Rotterdam", "Middelburg", "Utrecht", "Arnhem", "Den Bosch", "Zwolle",
                                                "Leeuwarden", "Groningen", "Assen", "Lelystad", "Maastricht"]);
        this.chooseCity.addEventListener("click", () => {
            tableName.innerText =  this.chooseCity.value;
            this.getTemp(this.chooseCity.value);
        });


        let table = document.createElement("table");
        table.classList.add("table");

        let tableBody = document.createElement("tbody");
        let tableR = document.createElement("tr");

        let tableName = document.createElement("td");
        tableName.id = 'tableName';
        tableName.innerText = this.chooseCity.value;

        this.tableTemp = document.createElement("td");
        this.tableTemp.id = 'tableTemp';

        tableR.appendChild(tableName);
        tableR.appendChild(this.tableTemp);
        tableBody.appendChild(tableR);
        table.appendChild(tableBody);

        weerDiv.appendChild(this.chooseCity);

        weerDiv.appendChild(table);

        this.container.appendChild(weerDiv);


    }

    setTemp(temp){
        this.tableTemp.innerText = temp;
    }
}