const router = require('express').Router();
const Resources = require('./model');

router.get('/', (req, res, next) => {
	Resources.getAll()
		.then((resources) => res.status(200).json(resources))
		.catch(next);
});

router.post('/', (req, res, next) => {
	Resources.insertNew(req.body)
		.then((newResource) => res.status(201).json(newResource))
		.catch(next);
});


module.exports = router;