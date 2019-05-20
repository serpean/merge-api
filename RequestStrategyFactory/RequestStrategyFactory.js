const RequestStrategy = require("../RequestStrategy/RequestStrategy");
const BookRequest = require("../RequestStrategy/impl/BookRequest")
const OMDBRequest = require("../RequestStrategy/impl/OMDBRequest")

class RequestStrategyFactory {
    createRequestStrategy(type) {
        const requestStrategy = new RequestStrategy();
        switch (type) {
            case "book":
                requestStrategy.request = new BookRequest();
            break;
            case "movie":
            case "game":
                requestStrategy.request = new OMDBRequest();
            break;
            default:
                const error = new Error("Not supported strategy");
                error.statusCode = 422;
                throw error;
        }
        return requestStrategy;
    }
}

module.exports = RequestStrategyFactory;