const db = require('../../data/dbConfig');

const getAll = () => {
	// return Promise.reject('Database failure')
	return db('resources').orderBy('resource_id').select('*')
};

const insertNew = async (newResource) => {
	const id = await db('resources').insert(newResource);
	return db('resources').where({'resource_id': id}).first();
};

module.exports = {
	getAll,
	insertNew
};