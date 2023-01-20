class ApiError extends Error {
    constructor(status, message) {
        super();

        this.status = status
        this.message = message
    }

    static brandRequest(message) { //* статичные методы дают возможность к ним обращаться без создания класса 
        return new ApiError(404, message)
    }
    static internal(message) {
        return new ApiError(500, message)
    }
    static forbidden(message) {
        return new ApiError(403, message)
    }
}

module.exports = ApiError