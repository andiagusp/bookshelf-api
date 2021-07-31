/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
	// membuat user baru
	pgm.sql("INSERT INTO users(id, username, password, fullname) VALUES ('old_notes', 'old_notes', 'old_notes', 'old_notes')");
	// mengubah nilai owner pada note yang ownernya null
	pgm.sql("UPDATE notes SET owner='old_notes' WHERE owner=NULL ");
	// memberikan constraint foreign key pada owner
	pgm.addConstraint('notes', 'fk_notes.owner_users.id', 'FOREIGN KEY(owner) REFERENCES users(id) ON DELETE CASCADE');
};

exports.down = (pgm) => {
	pgm.dropConstraint('notes', 'fk_notes.owner_users.id');
	pgm.sql("UPDATE notes SET owner=NULL WHERE owner='old_notes'");
	pgm.sql("DELETE FROM users WHERE id='old_notes'");
};
