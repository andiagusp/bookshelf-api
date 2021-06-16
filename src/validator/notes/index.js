const InvariantError = require('../../exceptions/InvariantError');
const { NotePayloadSchema } = require('./schema');

const NotesValidator = {
  validateNotePayload: (payload) => {
    const { error } = NotePayloadSchema.validate(payload);    
    if (error) {
      throw new InvariantError(error.details[0].message);
    }
  },
};

module.exports = NotesValidator;
