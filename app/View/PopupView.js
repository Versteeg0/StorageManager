export class PopupView{

    constructor() {
    }

    handleDetails(data, container) {

        //Popup group
        let popup = document.createElement("div");
        popup.id = "popup";
        popup.classList.add("popup");

        //Header group
        let popupHeader = document.createElement("div")
        popupHeader.id = "popup-header";

        let headerTitle = document.createElement("div");
        headerTitle.id = "title";
        headerTitle.classList.add("title");
        let name = document.createLabel("Naam: " + data.name, true);

        headerTitle.appendChild(name);

        let backbutton = document.createButton("Backbutton", "X");
        backbutton.classList.add("close-button");

        backbutton.addEventListener('click', () => {
           container.removeChild(popup);
           container.removeChild(overlay);
        });

        popupHeader.appendChild(headerTitle);
        popupHeader.appendChild(backbutton);

        //Body group
        let popupBody= document.createElement("div")
        popupBody.id = "popup-body";

        //Body children
        let description = document.createLabel("Beschrijving: " + data.description, true);
        let minimalSupply = document.createLabel("Minimale voorraad: " + data.mVoorraad, true);
        let currentSupply = document.createLabel("Huidige voorraad: " + data.hVoorraad, true);

        popupBody.appendChild(description);
        popupBody.appendChild(minimalSupply);
        popupBody.appendChild(currentSupply);

        switch(data.category) {
            case "Decoratie" :
                let sizeInCm = document.createLabel("Grootte van product: " + data.size, true);
                let dColor = document.createLabel("Kleur van de Decoratie: " + data.color, true);
                let amountInBox = document.createLabel("Hoeveelheid per verpakking: " + data.amountInBox, true);
                popupBody.appendChild(sizeInCm);
                popupBody.appendChild(dColor);
                popupBody.appendChild(amountInBox);
                break;

            case "Kleding" :
                let kColor = document.createLabel("Kleur van Kleding stuk" + data.color, true);
                let kWeight = document.createLabel("gewicht van Kleding stuk" + data.weight, true);
                popupBody.appendChild(kColor);
                popupBody.appendChild(kWeight);
                break;

            case "Tierelantijn" :
                let tWeight = document.createLabel("Gewicht van Tierlantijn stuk" + data.weight, true);
                popupBody.appendChild(tWeight);
                break;

            default:
                let Default = "default";
        }

        console.log(data.extra);
        if(data.extra != null) {
            let extra = document.createLabel("Extra: " + data.extra, true);
            popupBody.appendChild(extra);
        }
        //Footer buttons
        let popupFooter = document.createElement("div");
        popupFooter.id = 'popupFooter';

        let extraVeldButton = document.createButton("button", "Extra veld");
        let inputCounter = false;
        extraVeldButton.addEventListener('click', () =>{
            if (inputCounter === false) {
                this.extraFieldsButton();
                inputCounter = true;
            }
        });

        let opslaanButton = document.createButton("button", "Opslaan");
        opslaanButton.addEventListener('click', () => {
            this.addExtraItem(data.name, extra.value);
            let extraVeld = document.createLabel(this.extra.value, true);
            popupBody.appendChild(extraVeld);
        });

        popupFooter.appendChild(extraVeldButton);
        popupFooter.appendChild(opslaanButton);

        let overlay = document.createElement("div");
        overlay.id = "overlay";

        popup.appendChild(popupHeader);
        popup.appendChild(popupBody);
        popup.appendChild(popupFooter);

        container.appendChild(overlay);
        container.appendChild(popup);
    }

    extraFieldsButton() {
        let newFields = document.getElementById('popup');
        this.extra = document.createInput("extra", "Geef het een waarded");
        newFields.appendChild(this.extra);
    }
}