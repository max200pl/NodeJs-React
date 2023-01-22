class ApiError extends Error {
    constructor(status, message) {
        super();

        this.status = status
        this.message = message
    }

    //* статичные методы дают возможность к ним обращаться без создания класса 
    static brandRequest(message) {
        return new ApiError(404, message)
    }
    static internal(message) {
        return new ApiError(500, message)
    }
    static forbidden(message) { // доступа нет 
        return new ApiError(403, message)
    }
}

module.exports = ApiError