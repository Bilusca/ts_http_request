export class Http {
    const http: any;
    let API: string;

    constructor(API: string) {
        this.API = API;
        this.http = new XMLHttpRequest();
    }

    function get(server: string): object {
        
    }
}