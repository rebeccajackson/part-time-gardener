
exports.up = function(knex, Promise) {
  return knex.schema.createTable('plant', (table) => {
    table.increments('id')
    table.boolean('jan')
    table.boolean('feb')
    table.boolean('mar')
    table.boolean('apr')
    table.boolean('may')
    table.boolean('jun')
    table.boolean('jul')
    table.boolean('aug')
    table.boolean('sep')
    table.boolean('oct')
    table.boolean('nov')
    table.boolean('dec')
 
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('plant')

};