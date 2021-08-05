const InvariantError = require('../../exceptions/InvariantError');
const { ImageHeaderSchema } = require('./schema');

const UploadsValidator = {
  validateImageHeaders: (headers) => {
    const { error } = ImageHeaderSchema.validate(headers);
    if (error) throw new InvariantError(error.details[0].message);
  }
}

module.exports = UploadsValidator;
