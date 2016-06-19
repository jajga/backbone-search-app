/*global Sampleapp, Backbone*/

Sampleapp.Models = Sampleapp.Models || {};

(function () {
  'use strict';

  Sampleapp.Models.Search = Backbone.Model.extend({
    sync: function(a, req, c) {
        var data = req.toJSON(),
            url = 'https://www.googleapis.com/books/v1/volumes?q='+data.querry+'&startIndex='+data.pageno+'&maxResults='+data.limit ,
            params = _.extend({
            type: "GET",
            beforeSend: function(a) {
                a.withCredentials = !0
            },
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            url: url,
            processData: !1,
            data: ''
        }, c);
        return $.ajax(params)
    }

    /*url: 'https://www.googleapis.com/books/v1/volumes?q=food+allergies&maxResults=36',

    initialize: function() {
    },

    defaults: {
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
      return response;
    }*/
  });

})();
