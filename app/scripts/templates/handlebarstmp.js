this["JST"] = this["JST"] || {};

this["JST"]["app/scripts/templates/favourite.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.records : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-6 bookcontainer\">\r\n        <a href=\"\" class=\"listbook\">\r\n			<img onerror=\"this.src='http://narendr.in/error.jpg'\" src=\""
    + alias4(((helper = (helper = helpers.imagePath || (depth0 != null ? depth0.imagePath : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imagePath","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\" />\r\n			<span class=\"title headline\">"
    + ((stack1 = (helpers.stringshort || (depth0 && depth0.stringshort) || alias2).call(alias1,(depth0 != null ? depth0.title : depth0),{"name":"stringshort","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</span>\r\n\r\n		</a>\r\n	</div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return " ";
},"5":function(container,depth0,helpers,partials,data) {
    return "    <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 \" >\r\n   		<h4 class=\"noItems\">Sorry no products in your Favourite</h4>\r\n   </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"row\">\r\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.records : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});

this["JST"]["app/scripts/templates/header.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<nav class=\"navbar navbar-default\" role=\"navigation\">\r\n  <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\r\n          <span class=\"sr-only\">Toggle navigation</span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand logo\" href=\"#\">Sample App</a>\r\n  </div>\r\n  <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n     <ul class=\"nav navbar-nav\">\r\n          <li class=\"active\"><a href=\"/#favourite\">Favourites</a></li>\r\n      </ul>\r\n      <div class=\"col-sm-3 col-md-6 pull-right\">\r\n          <form class=\"navbar-form\" role=\"search\">\r\n              <div class=\"input-group\">\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Search\" id=\"searchBox\">\r\n                  <div class=\"input-group-btn\">\r\n                      <button class=\"btn btn-default\" type=\"submit\" id=\"searchBtn\"><i class=\"glyphicon glyphicon-search\"></i></button>\r\n                      <button class=\"btn btn-default\" type=\"reset\" id=\"resetBtn\">Reset</button>\r\n                  </div>\r\n              </div>\r\n          </form>\r\n      </div>        \r\n  </div>\r\n</nav>";
},"useData":true});

this["JST"]["app/scripts/templates/pager.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "	    <li class=\"active\"><a href=\""
    + ((stack1 = (helpers.linkPrams || (depth0 && depth0.linkPrams) || alias2).call(alias1,1,{"name":"linkPrams","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">1</a></li>\r\n	    <li><a href=\""
    + ((stack1 = (helpers.linkPrams || (depth0 && depth0.linkPrams) || alias2).call(alias1,2,{"name":"linkPrams","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">2</a></li>\r\n	    <li><a href=\""
    + ((stack1 = (helpers.linkPrams || (depth0 && depth0.linkPrams) || alias2).call(alias1,3,{"name":"linkPrams","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">3</a></li>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "<ul class=\"pagination\">\r\n";
  stack1 = ((helper = (helper = helpers.pager || (depth0 != null ? depth0.pager : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"pager","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},options) : helper));
  if (!helpers.pager) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</ul>";
},"useData":true});

this["JST"]["app/scripts/templates/search.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {}, alias4=helpers.helperMissing, alias5="function";

  return "	<div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-6  bookcontainer\"  data-title=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.volumeInfo : depth0)) != null ? stack1.title : stack1), depth0))
    + "\">\r\n        <a href=\"\" class=\"listbook\">\r\n			<img onerror=\"this.src='http://narendr.in/error.jpg'\" src=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.volumeInfo : depth0)) != null ? stack1.imageLinks : stack1)) != null ? stack1.thumbnail : stack1), depth0))
    + "\" alt=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.volumeInfo : depth0)) != null ? stack1.title : stack1), depth0))
    + "\" />\r\n			<span class=\"title headline\">"
    + ((stack1 = (helpers.stringshort || (depth0 && depth0.stringshort) || alias4).call(alias3,((stack1 = (depth0 != null ? depth0.volumeInfo : depth0)) != null ? stack1.title : stack1),{"name":"stringshort","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</span>\r\n\r\n		</a>\r\n\r\n		<span class=\"glyphicon glyphicon-heart pull-right addToFav\"  data-id=\""
    + alias2(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-img=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.volumeInfo : depth0)) != null ? stack1.imageLinks : stack1)) != null ? stack1.thumbnail : stack1), depth0))
    + "\" data-title=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.volumeInfo : depth0)) != null ? stack1.title : stack1), depth0))
    + "\"></span>\r\n\r\n		<span class=\"glyphicon glyphicon-heart pull-right hide favactive\"  data-id=\""
    + alias2(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-img=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.volumeInfo : depth0)) != null ? stack1.imageLinks : stack1)) != null ? stack1.thumbnail : stack1), depth0))
    + "\" data-title=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.volumeInfo : depth0)) != null ? stack1.title : stack1), depth0))
    + "\"></span>\r\n		\r\n"
    + ((stack1 = (helpers.favalid || (depth0 && depth0.favalid) || alias4).call(alias3,(depth0 != null ? depth0.id : depth0),(data && data.index),{"name":"favalid","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n	</div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return " ";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=container.lambda;

  return "			<span class=\"glyphicon glyphicon-heart pull-right \"  data-id=\""
    + alias1(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-img=\""
    + alias1(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.volumeInfo : depth0)) != null ? stack1.imageLinks : stack1)) != null ? stack1.thumbnail : stack1), depth0))
    + "\" data-title=\""
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.volumeInfo : depth0)) != null ? stack1.title : stack1), depth0))
    + "\"></span>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"row\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});