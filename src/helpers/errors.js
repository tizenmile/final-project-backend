class ApiFindPetError extends Error {
    constructor(message) {
        super(message),
        this.status = 400
    }
}

class NotFoundError extends ApiFindPetError {
    constructor(message) {
        super(message),
        this.status = 400
    }
}

class UpdatedFavoriteStatusError extends ApiFindPetError {
    constructor(message) {
        super(message),
        this.status = 404
    }
}

//class ValidationError extends ApiFindPetError {
//  }

class Conflict extends ApiFindPetError {
  constructor(message) {
    super(message);
    this.status = 409;
  }
}
  
class NotFoundError extends ApiFindPetError {
    constructor(message) {
        super(message),
        this.status = 400
    }
}

class HttpError extends ApiFindPetError {
    constructor(status, message) {
        super(message),
        this.status = status
    }
}

module.exports = {
    ApiFindPetError,
    NotFoundError,
//    ValidationError,
    UpdatedFavoriteStatusError,
    HttpError,
    Conflict,
    NotFoundError
}
