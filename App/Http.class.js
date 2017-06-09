"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Http = (function () {
    function Http(API) {
        this.API = API;
        this.http = new XMLHttpRequest();
    }
    Http.prototype.get = function (pageRequest) {
        this.http.open('GET', this.API + "/" + pageRequest, true);
        this.http.send();
        return this.response();
    };
    Http.prototype.response = function () {
        this.http.onreadystatechange = function () {
            if (this.http.readyState === 4 && this.http.status === 200) {
                console.log(this.http.response);
            }
        };
    };
    return Http;
}());
exports.Http = Http;
//# sourceMappingURL=Http.class.js.map