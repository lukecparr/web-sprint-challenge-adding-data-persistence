const router = require('express').Router();
const Tasks = require('./model');

router.get('/', (req, res, next) => {

	Tasks.getAll()
		.then((tasks) => res.status(200).json(tasks))
		.catch(next);

});

router.post('/', (req, res, next) => {
	
	Tasks.insertNew(req.body)
		.then((createdTask) => res.status(201).json(createdTask))
		.catch(next);

});

module.exports = router;