/*global Sampleapp, Backbone*/
Sampleapp.Routers = Sampleapp.Routers || {};

(function () {
  'use strict';

  Sampleapp.Routers.Home = Backbone.Router.extend({
  		routes: { 
  			'' : function () { 
  				
	  				var home = new  Sampleapp.Views.Home();
	  				home.render();	
  			},
  			 'favourite': function () {
  			  var favourite = new Sampleapp.Views.Favourite();
			  favourite.render();
  			} 
  		}

  });

})();
