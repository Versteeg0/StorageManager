class App {

    static init() {

        App.image = document.getElementsByClassName('image')[0]

        App.image.addEventListener("dragstart", App.dragstart)
        App.image.addEventListener("dragend", App.dragend)

        document.addEventListener("dragstart", function(e){
            App.image = e.target
        }, false)

        const containers = document.getElementsByClassName('holder')

        for(const container of containers) {
            container.addEventListener("dragover", App.dragover)
            container.addEventListener("dragenter", App.dragenter)
            container.addEventListener("dragleave", App.dragleave)
            container.addEventListener("drop", App.drop)
        }
    }

    static dragstart() {
        setTimeout(()=>this.className="invisible", 0)
    }


    static dragover(e) {
        e.preventDefault()
    }

    static dragenter(e) {
        e.preventDefault()
    }

    static dragleave() {
    }

    static drop() {
        this.append(App.image)
    }

}

document.addEventListener("DOMContentLoaded", App.init)

function miauw(){
    alert('Miauw');
}