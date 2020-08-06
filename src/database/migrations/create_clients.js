exports.up = function(knex) {
    return knex.schema.createTable('clients', table => {
        table.string('id').primary().notNullable();
        table.string('name').notNullable();
        table.string('cel');
        table.integer('stars');
        table.string('product');
        table.string('observation');
        table.decimal('longitude').notNullable();
        table.decimal('latitude').notNullable();
        table.string('city').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('clients');
};