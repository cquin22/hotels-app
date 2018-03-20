/**
 * ClientController
 *
 * @description :: Server-side logic end points of the CRUD client
 * @author:: Cristian Quintero <cristianqr22@gmail.com>
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var buildQuery = function(search, stars){
    var query = {};
    if(search != "undefined" && search != ''){
      query.name = {
        'contains' : search
      };
    }
    if(stars && stars.length > 0){
      query.stars = stars;
    }

    return query;
}



var HotelController = {

    /**
     * @sailsdoc
     *
     * @description Get hotels
     * @returns {Object} AppResponse.
    */
    "getHotels": function(req, res){
        Hotel.find(function(err, hotels){
            if(err){
                return res.appResponse(400, sails.config.constants.response.UNEXPECTED_ERROR, err);
              }else{
                return res.appResponse(200, sails.config.constants.response.COST_CREATE_SUCCESS, hotels);
              }
        })
    },

  /**
   * @sailsdoc
   *
   * @description Create Hotel
   * @returns {Object} AppResponse.
   */
    "createHotel": function(req, res){
        console.log("init");
        Hotel.create(req.body , function(err, hotel){
            if(err){
              return res.appResponse(400, sails.config.constants.response.UNEXPECTED_ERROR, err);
            }else{
              return res.appResponse(200, sails.config.constants.response.COST_CREATE_SUCCESS, hotel);
            }
          });
    },

  /**
   * @sailsdoc
   *
   * @description Search Hotel
   * @returns {Object} AppResponse.
   */
    "search": function(req, res){
      var search = req.param('search');
      var stars = req.body;
      Hotel.find(buildQuery(search, stars)).exec(function (err, data){
          if(err){
            return res.appResponse(400, sails.config.constants.response.UNEXPECTED_ERROR, err);
          }else{
            return res.appResponse(200, sails.config.constants.response.COST_CREATE_SUCCESS, data);
          }
      });

    }


  };


  module.exports = HotelController;

