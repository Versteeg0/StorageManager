import { MagazijnItem} from "./MagazijnItem";

export class MagazijnItemService{

    saveItem(item){
        var itemArray = JSON.parse(localStorage.getItem("items") || "[]");
        itemArray.push(item);
        localStorage.setItem('items', JSON.stringify(itemArray));
    }

    getItems(){
       return localStorage.getItem('items');
    }
}