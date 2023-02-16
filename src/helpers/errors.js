class ApiPhonebookError extends Error {
    constructor(message) {
        super(message),
        this.status = 400
    }
}

class ValidationError extends ApiPhonebookError {
    constructor(message) {
      super(message);
      this.status = 400;
    }
  }

  module.exports = {
    ApiPhonebookError,
    ValidationError,
    
  };