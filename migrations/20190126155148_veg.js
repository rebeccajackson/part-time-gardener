
exports.up = function(knex, Promise) {
  return knex.schema.createTable('veg', (table) => {
    table.increments('id')
    table.string('name')
    table.integer('plant_id').references('plant.id')
    table.string('type')
    table.string('harvest')
    table.string('condition')
    table.string('pest')
    table.string('tips')
    table.string('img_url').defaultTo('/veg.png')
 
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('veg')
};
