(function(){
	//console.log('hhhhh');
	var itemsArry = [];
	function refershItems(){
		var items = JSON.parse(localStorage.getItem("FavObject"));
		for(var i=0;i<items.records.length;i++){
			itemsArry.push(items.records[i].id);
		};
	}	
	//console.log(itemsArry);
	Handlebars.registerHelper('favalid', function(id,index,options) {
	  if(index == 1){
	  	refershItems();
	  }	
	  if(itemsArry.indexOf(id)>-1) {
	    return options.fn(this);
	  } else {
	    return options.inverse(this);
	  }
	});

	Handlebars.registerHelper("showHr", function(index_count,block) {

	  if(parseInt(index_count)%4=== 0){
	    return block.fn(this);}

	});

	Handlebars.registerHelper("pager", function(options) {
		var pageCount = getParameterByName('page'),
		querrParams = getParameterByName('querry');
		if(!(pageCount == 1) && !(pageCount == null)){
			if(!(pageCount == 0) && !(pageCount == null)){
				//console.log(options.pagerObj);
				var pagerHtml = '<li><a href="/?querry='+querrParams+'&page='+parseInt(pageCount-1)+'" data-value="'+parseInt(pageCount-1)+'">'+parseInt(pageCount-1)+'</a></li>'
								+'<li class="active"><a href="/?querry='+querrParams+'&page='+parseInt(pageCount)+'" data-value="'+parseInt(pageCount)+'" >'+parseInt(pageCount)+'</a></li>'	
								+'<li><a href="/?querry='+querrParams+'&page='+parseInt(parseInt(pageCount)+1)+'" data-value="'+parseInt(parseInt(pageCount)+1)+'">'+parseInt(parseInt(pageCount)+1)+'</a></li>';
				return	pagerHtml;				

			}
			else{
				return options.fn(this);
			}	

		}
		else if((pageCount == null)){

			return options.inverse(this);
		}
		else{
			return options.fn(this);
		}

	});
		

	Handlebars.registerHelper('linkPrams', function(str ,options) {
	  var querrParams = getParameterByName('querry');
	  return '/?querry='+querrParams+'&page='+str;

	});
	

	Handlebars.registerHelper('stringshort', function(str) {
	  if (str.length > 20)
	    return str.substring(0,10) + '...';
	  return str;
	});

})()