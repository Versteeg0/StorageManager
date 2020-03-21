export class WeerView {

    constructor() {
        this.container = document.getElementById('container');
    }

    generateTable() {
        let weerDiv = document.createElement("div");
        weerDiv.id='weerDiv';

        this.chooseCity = document.createElement("select");
        this.chooseCity.classList.add("form-control");
        this.chooseCity.id = 'chooseCity';

        let option1 = document.createElement("option");
        option1.innerText = "Amsterdam";

        let option2 = document.createElement("option");
        option2.innerText = "Rotterdam";

        let option3 = document.createElement("option");
        option3.innerText = "Middelburg";

        let option4 = document.createElement("option");
        option4.innerText = "Utrecht";

        let option5 = document.createElement("option");
        option5.innerText = "Arnhem";

        let option6 = document.createElement("option");
        option6.innerText = "Den Bosch";

        let option7 = document.createElement("option");
        option7.innerText = "Zwolle";

        let option8 = document.createElement("option");
        option8.innerText = "Leeuwarden";

        let option9 = document.createElement("option");
        option9.innerText = "Groningen";

        let option10 = document.createElement("option");
        option10.innerText = "Assen";

        let option11 = document.createElement("option");
        option11.innerText = "Lelystad";

        let option12 = document.createElement("option");
        option12.innerText = "Maastricht";

        this.chooseCity.appendChild(option1);
        this.chooseCity.appendChild(option2);
        this.chooseCity.appendChild(option3);
        this.chooseCity.appendChild(option4);
        this.chooseCity.appendChild(option5);
        this.chooseCity.appendChild(option6);
        this.chooseCity.appendChild(option7);
        this.chooseCity.appendChild(option8);
        this.chooseCity.appendChild(option9);
        this.chooseCity.appendChild(option10);
        this.chooseCity.appendChild(option11);
        this.chooseCity.appendChild(option12);

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

        table.appendChild(tableR);

        weerDiv.appendChild(this.chooseCity);

        weerDiv.appendChild(table);

        this.container.appendChild(weerDiv);

        this.chooseCity.addEventListener("click", () => {
            tableName.innerText =  this.chooseCity.value;
            this.getTemp(this.chooseCity.value);
        });
    }

    setTemp(temp){
        this.tableTemp.innerText = temp;
    }
}