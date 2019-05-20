class RequestStrategy {
    constructor() {
        this._request = null;
    }
    set request(request) {
        this._request = request;
    }
    get request() {
        return this._request;
    }
    doRequest(id) {
        return this._request.doRequest(id);
    }
}

module.exports = RequestStrategy;