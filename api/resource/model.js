const db = require('../../data/dbConfig');

const getAll = () => {
	// Retrieves all resources

	return db('resources').orderBy('resource_id').select('*')
};

const insertNew = async (newResource) => {
	// Inserts a new resource and returns the newly created object

	const id = await db('resources').insert(newResource);
	return db('resources').where({'resource_id': id}).first();
};

module.exports = {
	getAll,
	insertNew
};