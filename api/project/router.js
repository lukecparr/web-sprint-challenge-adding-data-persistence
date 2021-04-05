const router = require('express').Router();
const Projects = require('./model');

router.get('/', (req, res, next) => {

	Projects.getProjects()
		.then((projects) => res.status(200).json(projects))
		.catch(next);
});

router.post('/', (req, res, next) => {

	Projects.insertProject(req.body)
		.then((createdProject) => res.status(201).json(createdProject))
		.catch(next);
});

module.exports = router;