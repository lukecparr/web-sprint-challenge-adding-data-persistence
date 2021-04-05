const db = require('../../data/dbConfig');

const getProjects = async () => {
	return db('projects')
		.orderBy('project_id')
		.select('*')
		.then(rows => {
			return rows.map((project) => {
				return {...project, project_completed: project.project_completed === 0 ? false : true}
			})
		});

  // return Promise.reject('Database failure')

};

const insertProject = async newProject => {
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
