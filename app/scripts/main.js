/*global sampleapp, $*/

window.FavObject = {};
FavObject.records = [];
if(!localStorage.getItem("FavObject")){
  localStorage.setItem("FavObject",JSON.stringify(FavObject));
}
window.Sampleapp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function () {
    'use strict';
    var header = new Sampleapp.Views.Header()
    header.render();
    
    var route = new Sampleapp.Routers.Home();
    Backbone.history.start(); 
  }
};

$(document).ready(function () {
  'use strict';
  Sampleapp.init();
});
