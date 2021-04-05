
exports.up = function(knex) {
  return knex.schema
		.createTable('projects', (tbl) => {
			tbl.increments('project_id');
			tbl.text('project_name')
				.notNullable();
			tbl.text('project_description');
			tbl.boolean('project_completed')
				.notNullable()
				.defaultTo(false);
	})
		.createTable('tasks', (tbl) => {
			tbl.increments('task_id');
			tbl.text('task_description')
				.notNullable();
			tbl.text('task_notes');
			tbl.boolean('task_completed')
				.notNullable()
				.defaultTo(false);
			tbl.integer('project_id')
				.unsigned()
				.references('projects.project_id')
				.notNullable();
		})
		.createTable('resources', (tbl) => {
			tbl.increments('resource_id');
			tbl.text('resource_name')
				.notNullable()
				.unique();
			tbl.text('resource_description');
		})
		.createTable('project_resources', (tbl) => {
			tbl.increments('project_resource_id');
			tbl.integer('project_id')
				.unsigned()
				.references('projects.project_id');
			tbl.integer('resources_id')
				.unsigned()
				.references('resources.resource_id');
		});
};

exports.down = function(knex) {
  return knex.schema
		.dropTableIfExists('project_resources')
		.dropTableIfExists('resources')
		.dropTableIfExists('tasks')
		.dropTableIfExists('projects')
};
