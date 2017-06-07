export class Http {
    let http = new XMLHttpRequest();
    let API: string;

    constructor(API: string) {
        this.API = API;
    }

    function get(pageRequest: string): object {
        this.http.open('GET', `${this.API}/${server}`, true)
    }
}