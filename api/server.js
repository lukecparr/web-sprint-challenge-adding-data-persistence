const express = require('express');
const ProjectsRouter = require('./project/router');
const ResourcesRouter = require('./resource/router');
const TasksRouter = require('./task/router');

const server = express();

server.use(express.json());
server.use('/api/projects', ProjectsRouter);
server.use('/api/resources', ResourcesRouter);
server.use('/api/tasks', TasksRouter);

server.use((err, req, res, next) => { //eslint-disable-line
	res.status(500).json({error: err})
});

module.exports = server;