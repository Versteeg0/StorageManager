export class FormView{

    constructor(controller) {
        this.container = document.getElementById('container');
        this.formContainer = document.createElement("div");
        this.formContainer.id = "formContainer";
        this.form = document.createElement("form");
    }

    createForm() {
        this.phase1();
        this.phase2();
        this.formContainer.appendChild(this.form);
        this.container.appendChild(this.formContainer);

        this.phase1Form.style.display = "none";


    }

    phase1(){
        this.phase1Form = document.createElement("form-group");
        this.phase1Form.id = "phase1";

        this.soort = document.createElement("label");
        this.soort.innerText = "Kies je soort product";

        this.phase1Form.appendChild(this.soort);

        this.multiSelect = document.createElement("select");
        this.multiSelect.classList.add("form-control");


        this.option1 = document.createElement("option");
        this.option1.innerText = "Decoratie";

        this.option2 = document.createElement("option");
        this.option2.innerText = "Kleding";

        this.option3 = document.createElement("option");
        this.option3.innerText = "Tierelantijn";

        this.phase1Form.appendChild(this.multiSelect);

        this.multiSelect.appendChild(this.option1);
        this.multiSelect.appendChild(this.option2);
        this.multiSelect.appendChild(this.option3);

        this.phase1Button = document.createElement("button");
        this.phase1Button.classList.add("btn", "btn-primary");
        this.phase1Button.innerText = "Volgende";

        this.phase1Form.appendChild(this.phase1Button);
        this.form.appendChild(this.phase1Form);
    }

    phase2(){
        this.phase2Form = document.createElement("form-group");
        this.phase2Form.id = "phase2";

        this.naam = document.createElement("label");
        this.naam.innerText = "Wat is de naam van het product?";
        this.phase2Form.appendChild(this.naam);

        this.naamInput = document.createElement("input");
        this.naamInput.classList.add("form-control");
        this.naamInput.id ="naamInput";
        this.naamInput.placeholder = "Naam";
        this.phase2Form.appendChild(this.naamInput);

        this.beschrijving = document.createElement("label");
        this.beschrijving.innerText = "Beschrijving van het product:";
        this.phase2Form.appendChild(this.beschrijving);

        this.beschrijvingInput = document.createElement("textarea");
        this.beschrijvingInput.classList.add("form-control");
        this.beschrijvingInput.id ="beschrijvingInput";
        this.beschrijvingInput.rows = 3;
        this.beschrijvingInput.placeholder = "beschrijving";
        this.phase2Form.appendChild(this.beschrijvingInput);

        this.minVoorraad = document.createElement("label");
        this.minVoorraad.innerText = "Wat is de minimale voorraad van het product?";
        this.phase2Form.appendChild(this.minVoorraad);

        this.minVoorraadInput = document.createElement("input");
        this.minVoorraadInput.classList.add("form-control");
        this.minVoorraadInput.id = "minVoorraadInput";
        this.minVoorraadInput.placeholder = "aantal";
        this.phase2Form.appendChild(this.minVoorraadInput);

        this.hVoorraad = document.createElement("label");
        this.hVoorraad.innerText = "Wat is de huidige voorraad van het product?";
        this.phase2Form.appendChild(this.hVoorraad);

        this.hVoorraadInput = document.createElement("input");
        this.hVoorraadInput.classList.add("form-control");
        this.hVoorraadInput.id = "hVoorraadInput";
        this.hVoorraadInput.placeholder = "aantal";
        this.phase2Form.appendChild(this.hVoorraadInput);

        this.phase2Button = document.createElement("button");
        this.phase2Button.classList.add("btn", "btn-primary");
        this.phase2Button.innerText = "Volgende";

        this.phase2Form.appendChild(this.phase2Button);
        this.form.appendChild(this.phase2Form);
    }

    phase3(){
        this.phase3Form = document.createElement("form-group");
        this.phase3Form.id = "phase3";
    }
}