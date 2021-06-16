const notesPlugin = {
  register: async (server, options) => {
    const name = 'notes';
    const version = '1.0.0';
    const { notes } = options;
    server.route([
      {
        method: 'GET',
        path: '/notes',
        handler: () => notes,
      },
    ]);
  },
};

exports.module = notesPlugin;
