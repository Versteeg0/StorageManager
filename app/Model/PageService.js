export class PageService {
    saveDecoratiePage(data) {
        localStorage.setItem('Decoratie', JSON.stringify(data));
    }

    getDecoratiePage() {
      let html = JSON.parse(localStorage.getItem('Decoratie'));
      return html;
    }
}