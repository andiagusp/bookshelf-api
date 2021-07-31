const { ExportNotesPayloadSchema } = require('./schema');
const InvariantError = require('../../exceptions/InvariantError');

const ExportsValidator = {
  validateExportNotesPayload: (payload) => {
    const { error } = ExportNotesPayloadSchema.validate(payload);
    if (error) throw new InvariantError(error.details[0].message);
  }
};

module.exports = ExportsValidator;
