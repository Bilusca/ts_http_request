export class Http {
    http: any;
    API: string;

    constructor(API: string) {
        this.API = API;
        this.http = new XMLHttpRequest();
    }

    get(pageRequest: string): any {
        this.http.open('GET', `${this.API}/${pageRequest}`, true);
        this.http.send();
        return this.response();
    }

    response(): any {
        this.http.onreadystatechange = function() {
            if(this.http.readyState === 4 && this.http.status === 200) {
                console.log(this.http.response);
            }
        }
    }
}