var XyResponse = /** @class */ (function () {
    function XyResponse(data, status) {
        this.data = data;
        this.status = status;
    }
    return XyResponse;
}());
var XyRequest = /** @class */ (function () {
    function XyRequest(data) {
        this.data = data;
    }
    return XyRequest;
}());
var XyAsyncSimulation = /** @class */ (function () {
    function XyAsyncSimulation() {
    }
    XyAsyncSimulation.prototype.sendAsyncResquest = function (request, callback) {
        var response = new XyResponse(request.data, true);
        //appel immediat ou apres traitement long (tp simple):
        callback(response);
    };
    return XyAsyncSimulation;
}());
//test:
var xyAsync = new XyAsyncSimulation();
var req = new XyRequest("abc");
xyAsync.sendAsyncResquest(req, function (resp) {
    console.log("data chaine= " + resp.data
        + " , status= " + resp.status);
});
var reqNumber = new XyRequest(150);
xyAsync.sendAsyncResquest(reqNumber, function (resp) {
    console.log("data numerique= " + resp.data
        + " , status= " + resp.status);
});
//# sourceMappingURL=functional-callback.js.map