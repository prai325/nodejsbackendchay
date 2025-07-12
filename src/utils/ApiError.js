class ApiError extends Error {
    constructor(statusCode, message = "Something went wrong", errors = [], stack = "") {
        super(message);
        this.statusCode = statusCode;
        this.success = false;
        this.message = message;
        this.errors = errors;
        this.stack = stack || new Error().stack;
    }
}
export default ApiError;