const NotesHandler = require('./handler');
const routes = require('./routes');

module.exports = {
	name: 'notes',
	version: '1.0.0',
	register: async (server, options) => {
		const notesHandler = new NotesHandler(options.service);
		server.route(routes(notesHandler));
	},
};
