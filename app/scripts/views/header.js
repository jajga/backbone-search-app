/*global Sampleapp, Backbone, JST*/

Sampleapp.Views = Sampleapp.Views || {};

(function () {
  'use strict';

  Sampleapp.Views.Header = Backbone.View.extend({

    headerTmpl: JST['app/scripts/templates/header.hbs'],

    tagName: 'div',

    id: '',

    className: '',
    el: ".container",
    events: {
      "click #searchBtn": "searchQuery",
      "click #resetBtn": "resetResults",
    },

    initialize: function () {
      
    },

    render: function () {
      this.$el.find('.header').html(this.headerTmpl());
    },

    searchQuery: function(e){
      e.preventDefault();
      var self = this;
      var querry = this.$el.find('#searchBox').val().split(' ').join('+');
      window.location.href = '/?querry='+querry+'&page=1';

    },
    resetResults: function(){
      var self =this;
      window.location.href = '/';
    },

  });

})();
