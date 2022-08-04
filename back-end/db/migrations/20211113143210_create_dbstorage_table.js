exports.up = function(knex, Promise) {
    return knex.schema.createTable('dbstorage', function(table) {
        table.increments();
        table.binary('blob_data');
        table.string('originalname');
        table.string('size');
        table.timestamp('created_at').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('dbstorage');
};