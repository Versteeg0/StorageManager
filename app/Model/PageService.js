export class PageService {
    saveDecoratiePage(data) {
        localStorage.setItem('Decoratie', JSON.stringify(data));
    }

    getDecoratiePage() {
      let html = JSON.parse(localStorage.getItem('Decoratie'));
      return html;
    }

    saveKledingPage(data) {
        localStorage.setItem('Kleding', JSON.stringify(data));
    }

    getKledingPage() {
        let html = JSON.parse(localStorage.getItem('Kleding'));
        return html;
    }

    saveTierelantijnPage(data) {
        localStorage.setItem('Tierelantijn', JSON.stringify(data));
    }

    getTierelantijnPage() {
        let html = JSON.parse(localStorage.getItem('Tierelantijn'));
        return html;
    }
}