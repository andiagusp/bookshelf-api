const { CollaborationsPayloadSchema } = require('./schema');
const InvariantError = require('../../exceptions/InvariantError');

const CollaborationsValidator = {
	validateCollaborationPayload: (payload) => {
		const { error } = CollaborationsPayloadSchema.validate(payload);
		if (error) throw new InvariantError(error.details[0].message);
	}
}

module.exports = CollaborationsValidator;
