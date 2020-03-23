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
        headerTitle.innerText = "Title";

        let backbutton = document.createElement("button");
        backbutton.id = "backbutton";
        backbutton.classList.add("close-button");
        backbutton.innerText = 'X';

        backbutton.addEventListener('click', () => {
           container.removeChild(popup);
           container.removeChild(overlay);
        });

        popupHeader.appendChild(headerTitle);
        popupHeader.appendChild(backbutton);

        //Body group
        let popupBody= document.createElement("div")
        popupBody.id = "popup-body";
        popupBody.innerText = data.name;

        let overlay = document.createElement("div");
        overlay.id = "overlay";

        let deletebutton = document.createElement("button");
        deletebutton.id = "deletebutton";
        deletebutton.innerText = "Delete";
        deletebutton.addEventListener('click', () =>{
            container.removeChild(popup);
            container.removeChild(overlay);
            this.deleteItem(data);
        });
        popupBody.appendChild(deletebutton);

        popup.appendChild(popupHeader);
        popup.appendChild(popupBody);

        container.appendChild(overlay);
        container.appendChild(popup);
    }
}