/*global Sampleapp, Backbone, JST*/

Sampleapp.Views = Sampleapp.Views || {};

(function () {
  'use strict';
  var index = 0,
    totalCount = 0,
    limit = 36,
    queryData ,
    pageno ;

  Sampleapp.Views.Home = Backbone.View.extend({

    searchTmpl: JST['app/scripts/templates/search.hbs'],
    pagerTmpl: JST['app/scripts/templates/pager.hbs'],

    tagName: 'div',

    id: '',

    className: '',
    el: ".container",
    events: {
       "click #showmore": "pagination",
       "click .addToFav": "addToFav",
       "click .logo": "homepage",
    },

    initialize: function () {
      //this.listenTo(this.model, 'change', this.render);
       _.bindAll(this, "render"),
      this.search = new Sampleapp.Models.Search
    },

    render: function () {
      var self = this;
      queryData = getParameterByName('querry');
      pageno = getParameterByName('page');
      var queryObj = {};
      if(queryData != null){
        queryObj.query = queryData;
        queryObj.pageno = pageno; 
      }
      else{
        queryObj.query = 'backbone';
        queryObj.pageno = 1;
      }
      self.getBooksData(queryObj);
    },
    getBooksData: function(data ,from){
      var self = this;
      if(!(data.pageno == 1)){
        if(!(data.pageno == 0)){
          data.pageno = parseInt(data.pageno*limit);
        }
        else{
          data.pageno = 0;
        }  
      }
      else{
        data.pageno = 0;  
      }
      var req = {
        querry: data.query,
        pageno: data.pageno,
        limit:limit
      }
      this.search.clear().set(req);
      this.search.fetch({
          success: function (bookResponse) {
              self.renderProducts(bookResponse , from);
              self.renderPagination();

          }
      });
    },
    renderProducts: function(bookResponse , from){
      var self = this;
      if(from === 'pagination'){
        this.$el.find('.row #querrycontainer').append(this.searchTmpl(bookResponse.toJSON()));
        this.$el.find('.row #showmore').removeClass('hide');
        this.$el.find('.loader').addClass('hide');
      }
      else{
        this.$el.find('.row #querrycontainer').html(this.searchTmpl(bookResponse.toJSON()));
        this.$el.find('.row #showmore').removeClass('hide');
        this.$el.find('.loader').addClass('hide');
      } 

      self.aplhaSort(); 

    },
    addToFav: function(e){
      var FavObj = {
        id: $(e.currentTarget).data('id'),
        imagePath : $(e.currentTarget).data('img'),
        title: $(e.currentTarget).data('title')
      };

      if(localStorage.getItem("FavObject")){
        FavObject = JSON.parse(localStorage.getItem("FavObject"));
        FavObject.records.push(FavObj);
        localStorage.setItem("FavObject" , JSON.stringify(FavObject))
      }
      $('#MessageModal').modal('show')
      setTimeout(function(){
        $('#MessageModal').modal('hide');
        $(e.currentTarget).addClass('hide');
        $(e.currentTarget).parent().find('.favactive').removeClass('hide');
     
      },2000);
    },
    homepage: function(){
      window.location.href="/";
    },
    pagination: function(){
      this.$el.find('.loader').removeClass('hide');
      var self = this;
      index = limit+index;
      self.getBooksData(queryData ,'pagination');

    },
    aplhaSort: function(){
      var self = this;
      var alphabeticallyOrderedDivs = $('.bookcontainer').sort(function(a, b) {
        return String.prototype.localeCompare.call($(a).data('title').toLowerCase(), $(b).data('title').toLowerCase());
      });
        
      var container = $("#querrycontainer");
      container.detach().empty().append(alphabeticallyOrderedDivs);
      $('#sortappend').append(container);
    },
    renderPagination: function(){
      var self = this;
      this.$el.find('#pagination').append(this.pagerTmpl());
    }

  });

})();
