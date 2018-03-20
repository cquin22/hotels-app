/**
 * Cost.js
 *
 * @author: Cristian Quintero <cristianqr22@gmail.com>
 * @description :: This model represent the Cost
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
*/

module.exports = {

    attributes: {
      name: {
        type: 'string'
      },
      stars: {
        type: 'integer',
        defaultsTo: 0
      },
      price: {
        type: 'float',
        defaultsTo: 99.1
      },
      image: {
        type: 'string'
      },
      amenities: {
          type: 'array'
      }
    }
  };
  
  