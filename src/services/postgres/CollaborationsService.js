const { Pool } = require('pg');
const { nanoid } = require('nanoid');
const InvariantError = require('../../exceptions/InvariantError')

class CollaborationsService {
	constructor() {
		this._pool = new Pool();
	}

	async addCollaboration(nid, uid) {
		const id = `collab-${nanoid(16)}`;
		const query = {
			text: 'INSERT INTO collaborations VALUES($1, $2, $3) RETURNING id',
			values: [id, nid, uid],
		};
		const result = await this._pool.query(query);
		if (!result.rows.length) throw new InvariantError('Kolaborasi gagal ditambahkan');

		return result.rows[0].id;
	}

	async verifyCollaborator(nid, uid) {
		const query = {
			text: 'SELECT * FROM collaborations WHERE note_id=$1 AND user_id=$2',
			values: [nid, uid]
		};
		const result = await this._pool.query(query);
		if (!result.rows.length) throw new InvariantError('Kolaborasi gagal diverifikasi');
	}

	async deleteCollaboration(nid, uid) {
		const query = {
			text: 'DELETE FROM collaborations WHERE note_id=$1 AND user_id=$2 RETURNING id',
			values: [nid, uid],
		}

		const result = await this._pool.query(query);
		if (!result.rows.length) throw new InvariantError('Kolaborasi gagal dihapus');
	}
}

module.exports = CollaborationsService
