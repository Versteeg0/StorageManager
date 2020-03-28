export class FormView{

    constructor() {
        this.container = document.getElementById('container');
    }

    createForm() {
        this.formContainer = document.createElement("div");
        this.formContainer.id = "formContainer";
        this.form = document.createElement("form");
        this.phase1();

        this.formContainer.appendChild(this.form);
        this.container.appendChild(this.formContainer);

    }

    // Create first form phase
    phase1(){
        while (this.form.hasChildNodes()) {
            this.form.removeChild(this.form.lastChild);
        }
        this.phase1Form = document.createElement("form-group");
        this.phase1Form.id = "phase1";

        this.soort = document.createLabel("Kies je soort product")
        this.phase1Form.appendChild(this.soort);

        this.multiSelect = document.createSelect(["Decoratie", "Kleding", "Tierelantijn"]);

        this.phase1Form.appendChild(this.multiSelect);

        this.phase1Button = document.createButton('phase1Button', 'Volgende');
        this.phase1Form.appendChild(this.phase1Button);
        this.phase1Button.addEventListener('click', () => {
            this.processPhase1(this.multiSelect.value);
        });
        this.form.appendChild(this.phase1Form);
    }

    // Create second phase
    phase2(){
        while (this.form.hasChildNodes()) {
            this.form.removeChild(this.form.lastChild);
        }
        this.phase2Form = document.createElement("form-group");
        this.phase2Form.id = "phase2";

        this.naam = document.createLabel("Wat is de naam van het product?");
        this.phase2Form.appendChild(this.naam);
        this.naamInput = document.createInput("naamInput", "Naam");
        this.phase2Form.appendChild(this.naamInput);

        this.beschrijving = document.createLabel("Beschrijving van het product:");
        this.phase2Form.appendChild(this.beschrijving);
        this.beschrijvingInput = document.createElement("textarea");
        this.beschrijvingInput.classList.add("form-control");
        this.beschrijvingInput.id ="beschrijvingInput";
        this.beschrijvingInput.rows = 3;
        this.beschrijvingInput.placeholder = "beschrijving";
        this.phase2Form.appendChild(this.beschrijvingInput);

        this.minVoorraad = document.createLabel("Wat is de minimale voorraad van het product?");
        this.phase2Form.appendChild(this.minVoorraad);

        this.minVoorraadInput = document.createNumberInput("minVoorraadInput", "aantal");
        this.phase2Form.appendChild(this.minVoorraadInput);

        this.hVoorraad = document.createLabel("Wat is de huidige voorraad van het product?");
        this.phase2Form.appendChild(this.hVoorraad);

        this.hVoorraadInput = document.createNumberInput("hVoorraadInput", "aantal");
        this.phase2Form.appendChild(this.hVoorraadInput);

        this.salePriceEXCL = document.createLabel("Wat is de verkoopprijs EXCL BTW?");
        this.phase2Form.appendChild(this.salePriceEXCL);

        this.salePriceEXCLInput = document.createNumberInput("salePriceEXCLInput", "bedrag");
        this.phase2Form.appendChild(this.salePriceEXCLInput);

        this.phase2Button = document.createButton('phase2Button', 'Volgende');
        this.phase2Button.addEventListener('click', () => {
            this.inputs = [this.naamInput.value, this.beschrijvingInput.value, this.minVoorraadInput.value, this.hVoorraadInput.value, this.salePriceEXCLInput.value]
            this.processPhase2(this.inputs);
        });

        this.phase2Form.appendChild(this.phase2Button);
        this.form.appendChild(this.phase2Form);
    }

    // Create last phase
    phase3(data){
        while (this.form.hasChildNodes()) {
            this.form.removeChild(this.form.lastChild);
        }
        this.phase3Form = document.createElement("form-group");
        this.phase3Form.id = "phase3";
        this.phase3Button = document.createButton('phase3Button', 'Toevoegen');
        if(data === "Decoratie"){
            this.size = document.createLabel("Wat is de grootte in cm van de decoratie?");
            this.sizeInput = document.createNumberInput("sizeInput", "Grootte van product");
            this.phase3Form.appendChild(this.size);
            this.phase3Form.appendChild(this.sizeInput);

            this.color = document.createLabel("Wat is de kleur van de decoratie?");
            this.colorInput = document.createInput("colorInput", "Kleur van product");
            this.phase3Form.appendChild(this.color);
            this.phase3Form.appendChild(this.colorInput);

            this.amount = document.createLabel("Wat is de hoeveelheid per verpakking van  de decoratie");
            this.amountInput = document.createNumberInput("amountInput", "Hoeveelheid van product");
            this.phase3Form.appendChild(this.amount);
            this.phase3Form.appendChild(this.amountInput);
            
            this.phase3Button.addEventListener('click', (e) => {
                this.inputs = {
                    size: this.sizeInput.value,
                    color: this.colorInput.value,
                    amount:  this.amountInput.value
                };
                e.preventDefault();
                this.processPhase3(this.inputs);
            });

        }else if(data === "Kleding"){
            this.color = document.createLabel("Wat is de kleur van het kledingstuk?");
            this.colorInput = document.createInput("colorInput", "Kleur van product");
            this.phase3Form.appendChild(this.color);
            this.phase3Form.appendChild(this.colorInput);

            this.weight = document.createLabel("Wat is het gewicht van het kledingstuk?");
            this.weightInput = document.createNumberInput("weightInput", "Gewicht van product in kg");
            this.phase3Form.appendChild(this.weight);
            this.phase3Form.appendChild(this.weightInput);

            this.phase3Button.addEventListener('click', (e) => {
                this.inputs = {
                    color: this.colorInput.value,
                    weight: this.weightInput.value
                };
                e.preventDefault();
                this.processPhase3(this.inputs);
            });

        }else{
            this.weight = document.createLabel("Wat is het gewicht van de tierelantijn?");
            this.weightInput = document.createNumberInput("weightInput", "Gewicht van product in kg");
            this.phase3Form.appendChild(this.weight);
            this.phase3Form.appendChild(this.weightInput);

            this.phase3Button.addEventListener('click', (e) => {
                this.inputs = {
                    weight: this.weightInput.value
                };
                e.preventDefault();
                this.processPhase3(this.inputs);
            });
        }
        this.phase3Form.appendChild(this.phase3Button);
        this.form.appendChild(this.phase3Form);
    }

}