const db = require('../../data/dbConfig');

const getProjects = async () => {
	// Retrieves all projects from the database and convert the boolean field from 1/0 to true/false

	return db('projects')
		.orderBy('project_id')
		.select('*')
		.then(rows => {
			return rows.map((project) => {
				return {...project, project_completed: project.project_completed === 0 ? false : true}
			})
		});

	// Use to simulate a database error.
  // return Promise.reject('Database failure')

};

const insertProject = async newProject => {
	// Inserts a new project into the database and returns the new object with converted boolean field

	const id = await db('projects').insert(newProject);
	return db('projects')
		.where({ project_id: id })
		.first()
		.then(project => {
			return {...project, project_completed: project.project_completed === 0 ? false : true};
		});
};

module.exports = {
	getProjects,
	insertProject,
};
