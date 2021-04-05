const db = require('../../data/dbConfig');

const getAll = () => {
	// Retrieves all tasks from and converts the boolean field from 1/0 to true/false

	return db('tasks as t')
		.join('projects as p', 'p.project_id', 't.project_id')
		.orderBy('task_id')
		.select(
			'task_id',
			'task_notes',
			'task_description',
			'task_completed',
			'project_name',
			'project_description'
		)
		.then(rows => {
			return rows.map(task => {
				return {...task, task_completed: task.task_completed === 0 ? false : true,};
			});
		});
};

const insertNew = async newTask => {
	// Inserts a new task into the database and returns the new object with converted boolean field

	const id = await db('tasks').insert(newTask);
	return db('tasks')
		.where({ task_id: id })
		.first()
		.then(task => {
			return {...task, task_completed: task.task_completed === 0 ? false : true};
		});
};



module.exports = {
	getAll,
	insertNew
};