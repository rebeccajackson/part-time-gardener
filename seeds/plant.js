
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('plant').del()
    .then(function () {
      // Inserts seed entries
      return knex('plant').insert([
        {id: 203, jan: false, feb: true, mar: true, apr: true, may: false, jun: false, jul: false, aug: false, sep: false, oct: false, nov: false, dec: false}
      ]);
    });
};
