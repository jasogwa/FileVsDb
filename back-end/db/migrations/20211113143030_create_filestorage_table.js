exports.up = function(knex, Promise) {
    return knex.schema.createTable('filestorage', function(table) {
        table.increments();
        table.string('object_url');
        table.string('originalname');
        table.string('size');
        table.timestamp('created_at').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('filestorage');
};