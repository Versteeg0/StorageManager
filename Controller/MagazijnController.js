class MagazijnController{
    viewContainer;



    constructor() {
        this.viewContainer = document.getElementById('app');
        start();
    }

     start(){
        fetch('decoratie.html')
            .then(function(){
                this.viewContainer.innerHTML(result);
            })
    }

}
