/*global Sampleapp, Backbone, JST*/

Sampleapp.Views = Sampleapp.Views || {};

(function () {
  'use strict';

  Sampleapp.Views.Favourite = Backbone.View.extend({

    template: JST['app/scripts/templates/favourite.hbs'],

    tagName: 'div',

    id: '',
    el:'.container',
    className: '',

    events: {},

    initialize: function () {
     // this.listenTo(this.model, 'change', this.render);
    },

    render: function () {
      this.$el.find('.row #showmore').addClass('hide');
      this.$el.find('.loader').addClass('hide');
      var data = JSON.parse(localStorage.getItem("FavObject"));
      this.$el.find('.row #querrycontainer').html(this.template(data));
    }

  });

})();
