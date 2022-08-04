exports.up = function(knex, Promise) {
    return knex.schema.createTable('history', function(table) {
        table.increments();
        table.enum('method',['File System Storage','Database Storage']);
        table.enum('query_mode',['upload','download']);
        table.integer('file_size');
        table.decimal('duration');
        table.timestamp('created_at').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('history');
};