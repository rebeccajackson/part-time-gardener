
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('veg').del()
    .then(function () {
      // Inserts seed entries
      return knex('veg').insert([
        {id: 1, name: 'Tomato', plant_id: '0203', type: 'veg', harvest: '20-30 days', condition: 'Full-sun', pest:'Birds', tips:'Water often, multiple harvests', img_url: '/veg.png'},
        {id: 2, name: 'Snow Pea', plant_id: '0203', type: 'veg', harvest: '20-30 days', condition: 'Full-sun', pest:'Birds', tips:'Water often, multiple harvests', img_url: '/veg.png'},
        {id: 3, name: 'Cucumber', plant_id: '0203', type: 'veg', harvest: '20-30 days', condition: 'Full-sun', pest:'Birds', tips:'Water often, multiple harvests', img_url: '/veg.png'},
        {id: 4, name: 'Brocolli', plant_id: '0203', type: 'veg', harvest: '20-30 days', condition: 'Full-sun', pest:'Birds', tips:'Water often, multiple harvests', img_url: '/veg.png'},
        {id: 5, name: 'Courgette', plant_id: '0203', type: 'veg', harvest: '20-30 days', condition: 'Full-sun', pest:'Birds', tips:'Water often, multiple harvests', img_url: '/veg.png'},
        {id: 6, name: 'Spinach', plant_id: '0203', type: 'veg', harvest: '20-30 days', condition: 'Full-sun', pest:'Birds', tips:'Water often, multiple harvests', img_url: '/veg.png'},
        {id: 7, name: 'Mesclun', plant_id: '0203', type: 'veg', harvest: '20-30 days', condition: 'Full-sun', pest:'Birds', tips:'Water often, multiple harvests', img_url: '/veg.png'},
        {id: 8, name: 'Sweetcorn', plant_id: '0203', type: 'veg', harvest: '20-30 days', condition: 'Full-sun', pest:'Birds', tips:'Water often, multiple harvests', img_url: '/veg.png'},
        {id: 9, name: 'Spring Onion', plant_id: '0203', type: 'veg', harvest: '20-30 days', condition: 'Full-sun', pest:'Birds', tips:'Water often, multiple harvests', img_url: '/veg.png'},
        {id: 10, name: 'Capsicum', plant_id: '0203', type: 'veg', harvest: '20-30 days', condition: 'Full-sun', pest:'Birds', tips:'Water often, multiple harvests', img_url: '/veg.png'},
        {id: 11, name: 'Bok Choy', plant_id: '0203', type: 'veg', harvest: '20-30 days', condition: 'Full-sun', pest:'Birds', tips:'Water often, multiple harvests', img_url: '/veg.png'},
        {id: 12, name: 'Eggplant', plant_id: '0203', type: 'veg', harvest: '20-30 days', condition: 'Full-sun', pest:'Birds', tips:'Water often, multiple harvests', img_url: '/veg.png'},
        {id: 13, name: 'Celery', plant_id: '0203', type: 'veg', harvest: '20-30 days', condition: 'Full-sun', pest:'Birds', tips:'Water often, multiple harvests', img_url: '/veg.png'}  
      ]);
    });
};
