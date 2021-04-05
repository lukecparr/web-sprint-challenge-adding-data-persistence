const router = require('express').Router();
const Tasks = require('./model');

router.get('/', (req, res, next) => {
	Tasks.getAll()
		.then((tasks) => res.status(200).json(tasks))
		.catch(next);
	// Even though task_completed is stored as an integer, the API uses booleans when interacting with the client
	// Each task must include project_name and project_description
	// Example of response body: [{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_name:"bar","project_description":null}]

});

router.post('/', (req, res, next) => {
	Tasks.insertNew(req.body)
		.then((createdTask) => res.status(201).json(createdTask))
		.catch(next);
	// Even though task_completed is stored as an integer, the API uses booleans when interacting with the client
	// Example of response body: {"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_id:1}

});

module.exports = router;