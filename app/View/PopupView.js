export class PopupView {

    handleDetails(data, container) {

        //Popup group
        let popup = document.createElement("div");
        popup.id = "popup";
        popup.classList.add("popup");

        //Header group
        let popupHeader = document.createElement("div");
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
        let popupBody = document.createElement("div");
        popupBody.id = "popup-body";

        //Body children
        let description = document.createPopUpValue("Beschrijving: ", "description", data.description, false);
        let minimalSupply = document.createPopUpValue("Minimale voorraad: ", "mVoorraad", data.mVoorraad, true);
        let currentSupply = document.createPopUpValue("Huidige voorraad: ", "hVoorraad", data.hVoorraad, true);
        let salePriceEXCL = document.createPopUpValue("Verkoopprijs excl BTW: ", "salePriceEXCL", data.salePriceEXCL, true);

        popupBody.appendChild(description);
        popupBody.appendChild(minimalSupply);
        popupBody.appendChild(currentSupply);
        popupBody.appendChild(salePriceEXCL);

        switch (data.category) {
            case "Decoratie" :
                let sizeInCm = document.createPopUpValue("Grootte van decoratie: ", "sizeInCm", data.size, true);
                let dColor = document.createPopUpValue("Kleur van de decoratie: ", "dColor", data.color, false);
                let amountInBox = document.createPopUpValue("Hoeveelheid per verpakking: ", "amountInBox", data.amountInBox, true);
                popupBody.appendChild(sizeInCm);
                popupBody.appendChild(dColor);
                popupBody.appendChild(amountInBox);
                break;

            case "Kleding" :
                let kColor = document.createPopUpValue("Kleur van kledingstuk:", "kColor", data.color, false);
                let kWeight = document.createPopUpValue("Gewicht van kledingstuk:", "kWeight", data.weight, true);
                popupBody.appendChild(kColor);
                popupBody.appendChild(kWeight);
                break;

            case "Tierelantijn" :
                let tWeight = document.createPopUpValue("Gewicht van Tierlantijn:", "tWeight", data.weight, true);
                popupBody.appendChild(tWeight);
                break;
        }

        if (data.extra != null) {
            let extra = document.createLabel("Extra: " + data.extra, true);
            popupBody.appendChild(extra);
        }

        //Footer buttons
        let popupFooter = document.createElement("div");
        popupFooter.id = 'popupFooter';

        let extraVeldButton = document.createButton("button", "Extra veld");
        let inputCounter = false;
        extraVeldButton.addEventListener('click', () => {
            if (inputCounter === false) {
                this.extraFieldsButton();
                inputCounter = true;
            }
        });

        let opslaanButton = document.createButton("button", "Opslaan");
        opslaanButton.addEventListener('click', () => {
            this.saveItem(data);
            if(this.extra != null){
                let extraVeld = document.createLabel(this.extra.value, true);
                popupBody.appendChild(extraVeld);
            }
        });

        let br1 = document.createElement("br");
        popupBody.appendChild(extraVeldButton);
        popupBody.appendChild(opslaanButton);

        //Image upload / canvas
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.id = 'canvas';
        canvas.width = 400;
        canvas.height = 400;

        context.lineJoin = 'round';
        context.lineCap = 'round';
        context.lineWidth = 8;
        context.strokeStyle = "#000000";

        let image = new Image();
        image.id = "empty";
        if (data.photo != undefined) {
            image.src = data.photo
        }

        image.onload = function () {
            image.width = canvas.width;
            image.height = canvas.height;
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(image, 0, 0, image.width, image.height);
            image.id = "filled";
        };

        let br = document.createElement("br");
        let br2 = document.createElement("br");

        let uploadButton = document.createElement("input");
        uploadButton.type = "file";
        uploadButton.accept = "image/*";
        uploadButton.id = "file";

        let reader = new FileReader();

        reader.onload = e => {
            image.src = e.target.result;
        };

        uploadButton.addEventListener('change', e => {
            const f = e.target.files[0];
            if (f instanceof Blob) {
                reader.readAsDataURL(f);
            }
        });

        let saveImage = document.createButton("saveImage", "Foto opslaan");
        saveImage.addEventListener('click', () => {
            if (image.id == "filled") {
                this.saveImage(data.name, canvas.toDataURL());
            }
        });

        //DRAW ON CANVAS
        let mousePressed = false;
        let lastX = null;
        let lastY = null;

        canvas.addEventListener("mousedown", e =>{
            mousePressed = true;
            let target = event.target;
            let rect = target.getBoundingClientRect();
            let x = e.clientX - rect.left;
            let y = e.clientY -  rect.top;
            lastX = x; lastY = y;
        });

        canvas.addEventListener('mouseup', e =>{
            mousePressed = false;
        });

        canvas.addEventListener('mousemove', e =>{
            let target = e.target;
            let rect = target.getBoundingClientRect();
            let x = e.clientX - rect.left;
            let y = e.clientY -  rect.top;
            if (mousePressed){
                context.moveTo(lastX, lastY);
                context.closePath();
                context.stroke();
            }
            lastX = x; lastY = y;
        });

        popupFooter.appendChild(uploadButton);
        popupFooter.appendChild(br);
        popupFooter.appendChild(canvas);
        popupFooter.appendChild(br2);
        popupFooter.appendChild(saveImage);

        let overlay = document.createElement("div");
        overlay.id = "overlay";

        popup.appendChild(popupHeader);
        popup.appendChild(popupBody);
        popup.appendChild(popupFooter);
        container.appendChild(overlay);
        container.appendChild(popup);
    }

    extraFieldsButton() {
        let newField = document.getElementById('popup-body');
        this.extra = document.createInput("extra", "Geef het een waarded");
        newField.appendChild(this.extra);
    }

    saveItem(data){
        data.description = document.getElementById("description").value;
        data.mVoorraad = document.getElementById("mVoorraad").value;
        data.hVoorraad = document.getElementById("hVoorraad").value;
        data.salePriceEXCL = document.getElementById("salePriceEXCL").value;

        switch (data.category) {
            case "Decoratie" :
                data.size = document.getElementById("sizeInCm").value;
                data.color = document.getElementById("dColor").value;
                data.amountInBox = document.getElementById("amountInBox").value;
                break;

            case "Kleding" :
                data.color = document.getElementById("kColor").value;
                data.weight = document.getElementById("kWeight").value;
                break;

            case "Tierelantijn" :
                data.weight = document.getElementById("tWeight").value;
                break;
        }

        if(this.extra != null){
            data.extra = this.extra.value;
            this.extra = null;
        }
        this.editItem(data);
    }

}
