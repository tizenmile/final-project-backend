class ApiFindPetError extends Error {
    constructor(message) {
        super(message),
        this.status = 400
    }
}

class ValidationError extends ApiFindPetError {
    constructor(message) {
      super(message);
      this.status = 400;
    }
  }
  
class NotFoundError extends ApiFindPetError {
    constructor(message) {
        super(message),
        this.status = 400
    }
}

module.exports = {
    ApiFindPetError,
    ValidationError,
    NotFoundError
}
