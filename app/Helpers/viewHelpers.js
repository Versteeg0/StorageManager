document.createButton = function(name, text){
    let button = document.createElement("button");
    button.classList.add("btn", "btn-primary");
    button.id = name;
    button.innerText = text;
    return button;
};

document.createLabel = function(text, newLine) {
    let labelDiv = document.createElement("div");
    let label = document.createElement("label");
    label.innerText = text;
    if (newLine == true) {
        let br = document.createElement("br");
        labelDiv.appendChild(label);
        labelDiv.appendChild(br);
        return labelDiv
    } else {
        labelDiv.appendChild(label);
        return labelDiv;
    }
};


document.createSelect = function(array){
    let multi = document.createElement("select");
    multi.classList.add("form-control");

    for(let i = 0; i < array.length; i++){
        let option = document.createElement("option");
        option.innerText = array[i];
        multi.appendChild(option);
    }
    return multi;
};

document.createInput = function(id, placeholder){
    let input = document.createElement("input");
    input.classList.add("form-control");
    input.id = id;
    input.placeholder = placeholder;
    return input;
};

document.createNumberInput = function(id, placeholder){
    let input = document.createElement("input");
    input.classList.add("form-control");
    input.type = "number";
    input.id = id;
    input.placeholder = placeholder;
    return input;
};

document.createPopUpValue = function(labelvalue, inputID, value, isNumber){
    let div = document.createElement("div");
    div.classList.add("form-inline");
    let label = document.createElement("label");
    label.innerText = labelvalue;
    let br = document.createElement("br");
    div.appendChild(label);

    let input = document.createElement("input");
    if(isNumber){
        input.type = "number";
    }
    input.classList.add("form-control");
    input.classList.add("popupInput");
    input.id = inputID;
    input.value = value;
    div.appendChild(input);
    div.appendChild(br);
    return div;
};

document.createCells = function (grid, choice){
    for (let counter = 0; counter < 225; counter++) {
        let newCell = document.createElement("div");
        if(choice === 1) {
            if (counter > 14 && counter < 30 || counter > 84 && counter < 90 || counter === 200) {
                newCell.innerText = "X";
            } else {
                newCell.id = "cell";
                newCell.classList.add("holder");
            }
        }
        else if (choice === 2) {
            if (counter === 56 || counter === 112 || counter === 168 || counter === 205) {
                newCell.innerText = "X";
            } else {
                newCell.id = "cell";
                newCell.classList.add("holder");
            }
        }
        else {
            if (counter > 60 && counter < 100 || counter > 150 && counter < 200 || counter === 220) {
                newCell.innerText = "X";
            } else {
                newCell.id = "cell";
                newCell.classList.add("holder");
            }
        }
        newCell.classList.add("cell");
        grid.appendChild(newCell);
    }
    return grid;
};

document.createPageContainer = function(id){
    let container = document.createElement("div");
    container.id = id;
    container.classList.add("container-fluid");
    return container;
};

document.createGarbage = function(){
    let garbageCan = document.createElement("div");
    garbageCan.classList.add("garbage");
    let garbageImage = new Image(100,100);
    garbageImage.src = "app/images/559-01-512.png";
    garbageImage.classList.add("garbage");
    garbageCan.appendChild(garbageImage);

    return garbageCan;
};



