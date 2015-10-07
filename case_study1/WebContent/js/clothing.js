//var cloth_list={
//	"cloth1":{
//		"type":"male", 
//		"price":"1575",
//		"image":"images/maleshirt.jpg",
//		"brand":"peter england",
//		"cloth":"shirt",
//
//	},
//	"cloth3":{
//		"type":"female", 
//		"price":"1423",
//		"image":"images/femaletop.jpg",
//		"brand":"peter england",
//		"cloth":"top",
//	},
//    "cloth5":{
//        "type":"kids", 
//        "price":"1186",
//        "image":"images/kidsshirt.jpg",
//        "brand":"peter england",
//        "cloth":"shirt",
//    },
//    "cloth4":{
//        "type":"female", 
//        "price":"1875",
//        "image":"images/leggings.jpg",
//        "brand":"peter england",
//        "cloth":"leggings",
//    },
//	"cloth6":{
//		"type":"kids", 
//		"price":"1200",
//		"image":"images/kidspant.jpg",
//		"brand":"peter england",
//		"cloth":"pant",
//	},
//    "cloth2":{
//        "type":"male", 
//        "price":"1325",
//        "image":"images/malepant.jpg",
//        "brand":"peter england",
//        "cloth":"pant",
//    },
//
//}
var cloth_filters={
	"price":["1000-1200","1200-1500","1500-2000"],
    "type":["male","female","kids"]
}

$(document).ready(function() {
	$.getJSON("cloth",function(cloth_list){
		$("#filters-table-1").append('<tr id="filter-categories-1"></tr>');
		for(var key in cloth_filters){
	       clothfilters_array=cloth_filters[key];
	        $("#filter-categories-1").append('<th  id="'+key+'"><span class="text-primary " style="margin-left:25%">'+key+'</span><td></th>');
	        for(var i=0;i<clothfilters_array.length;i++){
	            $("#"+key).append('<div class="checkbox" style="left:25%"><label id="label_'+key+'_'+clothfilters_array[i]+'" style="margin-left: 0px;"><input \
	                type="checkbox" id='+key+"_"+clothfilters_array[i]+' value="">'+clothfilters_array[i]+'</label></div>');
	        }
	        $("#"+key).append("</td>");
	    }
	    $("#more-filter-btn").click(function(){
	        $("#more-filters-list2").slideToggle("fast");
	    });
	    var ab=0;
	    old_cat_title = [];
	    $('.checkbox').change(function(){
	        var checkedlen=$('.checkbox').find('input').is(":checked");
	        if(ab < 6){
	            for(var key in cloth_list){
	                var cloth_list_array=cloth_list[key];
	                $('.'+cloth_list_array["price"]+'_'+cloth_list_array["type"]).hide();
	              ab++;
	            }
	        }
	        var newkey=$(this).find('input').attr('id').split('_')[0];
	        var array_val=$(this).find('input').attr('id').split('_')[1];
	        for(var key in cloth_filters){
	            clothfilters_array=cloth_filters[key];
	            for(var i=0;i<clothfilters_array.length;i++){
	                if((newkey==key)&&(array_val==clothfilters_array[i]) ){
	                    var category=key;
	                    var filter_name=clothfilters_array[i];
	                }
	            }
	        }
	        if($(this).find('input').is(":checked")){
	           var newkey=$(this).find('input').attr('id').split('_')[0];
	           var array_val1=$(this).find('input').attr('id').split('_')[1];
	           if(newkey=="price"){
			        for(var key in cloth_list){
			            var cloth_list_array=cloth_list[key];
			            var array_val0=array_val1.split('-')[0];
			            var array_val4=array_val1.split('-')[1];
	 		            var newclothlist_array=cloth_list[key][newkey];
			            if((array_val0<newclothlist_array)&&(array_val4>newclothlist_array)){
			                for(var key in cloth_list){$('.'+newclothlist_array+'_'+cloth_list_array["type"]).show();}
			            }
			        }
			    }
			    if(newkey=="type"){
		            for(var key in cloth_list){
			            var cloth_list_array=cloth_list[key];
			            var newclothlist_array=cloth_list[key][newkey];
			            if(array_val1==newclothlist_array){
			                for(var key in cloth_list){$('.'+cloth_list_array["price"]+'_'+newclothlist_array).show();}
			            }
			        }
			    }
			}
	        if(!($(this).find('input').is(":checked"))){
	            var array_val1=$(this).find('input').attr('id').split('_')[1];
	            if(newkey=="price"){
	                for(var key in cloth_list){
	                    var cloth_list_array=cloth_list[key];
	                    var array_val0=array_val1.split('-')[0];
	                    var array_val4=array_val1.split('-')[1];
	                    var newclothlist_array=cloth_list[key][newkey];
	                    if((array_val0<newclothlist_array)&&(array_val4>newclothlist_array)){                        
	                        array_val3=newclothlist_array;
	                        for(var key in cloth_list){$('.'+newclothlist_array+'_'+cloth_list_array["type"]).hide();}
	                    }
	                }
	            }
	            if(newkey=="type"){
	                for(var key in cloth_list){
	                var cloth_list_array=cloth_list[key];
	                var newclothlist_array=cloth_list[key][newkey];
	                    if(array_val1==newclothlist_array){
	                        for(var key in cloth_list){$('.'+cloth_list_array["price"]+'_'+newclothlist_array).hide();}
	                    }

	                }
	            }
	        }
	        if($(this).find('input').is(":checked")){
	            if(old_cat_title.length==0){
	                $(".filter-span").append('<ul  style="list-style-type:none;padding-left:5px"><span id="span_'+category+'">'+ category + ' : </span></ul>');
	                $(".filter-span #span_"+category).addClass("text-primary");
	                old_cat_title.push(category);
	            }
	            else {
	                for(var i=0;i<old_cat_title.length;i++) {
	                    if(old_cat_title[i] == category) break;
	                    else if(i == old_cat_title.length-1) {
	                        $(".filter-span").append('<ul  style="list-style-type:none;padding-left:5px"><span id="span_'+category+'">' + category + ' : </span></ul>');
	                        $(".filter-span #span_"+category).addClass("text-primary");
	                        var temp = category;
	                    }

	                }
	                old_cat_title.push(temp);
	            }
	            
	            $("#span_"+category).append('<li><span class="filter-tags" id="span_'+$(this).find('input').attr("id")+'" style="width: 90%;"><span>'+filter_name+'<span class="filter-close" style="padding-left: 60%;">x</span></span></span></li>');
	        }
	        $('.filter-close').click(function () {
	            $(this).parent().parent().remove();
	            var close_id= $(this).parent().parent().attr('id').split("span_")[1];
	            console.log(close_id);
	            $('#'+close_id).attr('checked', false);
	            if($('#span_'+category).text() ==category+' : '){
	                $('#span_'+category).remove();
	                var index = old_cat_title.indexOf(category);
	                old_cat_title.splice(index,1);
	            }
	            var array_val1=close_id.split('_')[0];
	            console.log(array_val1);
	            var array_val2=close_id.split('_')[1];
	            if(array_val1=="price"){
	                var array_val0=array_val2.split('-')[0];
	                var array_val4=array_val2.split('-')[1];
	                for(var key in cloth_list){
	                    var cloth_list_array=cloth_list[key];
	                    var newclothlist_array=cloth_list[key][array_val1];
	                    console.log(array_val0);
	                    console.log(array_val4);
	                    if((array_val0<newclothlist_array)&&(array_val4>newclothlist_array)){
	                        for(var key in cloth_list){$('.'+newclothlist_array+'_'+cloth_list_array["type"]).hide();}
	                    }
	                }
	            }
	            if(array_val1=="type"){
	                for(var key in cloth_list){
		                var cloth_list_array=cloth_list[key];
		                var newclothlist_array=cloth_list[key][array_val1];
		                if(array_val2 ==newclothlist_array){
		                    for(var key in cloth_list){$('.'+cloth_list_array["price"]+'_'+newclothlist_array).hide();}
	                	}
	            	}
	        	}
		        if($('.filter-span').text() == ""){
		            for(var key in cloth_list){
		                var cloth_list_array=cloth_list[key];
		                $('.'+cloth_list_array["price"]+'_'+cloth_list_array["type"]).show();
		            }
		            ab=0;
		        }
	    	});
			if(!($(this).find('input').is(":checked"))){
	            var id=$(this).find('input').attr('id');
	            id='span_'+id;
	            $('#'+id).parent().remove();
	        }
	        var removeCategory = function(){ 
	            if($('#span_'+category).text() == category+' : '){
	               $('#span_'+category).remove();
	              var index = old_cat_title.indexOf(category);
	              old_cat_title.splice(index,1); 
	            }
	        }
	        removeCategory();
	        if(checkedlen == 0){
	            for(var key in cloth_list){
	                var cloth_list_array=cloth_list[key];
	                $('.'+cloth_list_array["price"]+'_'+cloth_list_array["type"]).show();
	            }
	            ab=0;
	        }
	    });
		$('#reset-btn').click(function(){
		    $('.filter-span').empty();
		    $('#more-filters-container').find('input').attr('checked', false);
		    old_cat_title=[];
		    for(var key in cloth_list){
		        var cloth_list_array=cloth_list[key];
		     $('.'+cloth_list_array["price"]+'_'+cloth_list_array["type"]).show();}
		    ab=0;
		});
		$('body').click(function(evt){    
		   if((evt.target.class == "shopByBar")||(evt.target.id== 'more-filters-container')||(evt.target.class == "filter-close"))
		    return;
		   if(($(evt.target).closest('.shopByBar').length)||($(evt.target).closest('#more-filters-container').length)||($(evt.target).closest('.filter-close').length))
		    return;  
		    $("#more-filters-list2").slideUp("fast");           
		});
	    var to_append=" ";
	    for(var key in cloth_list){
	        var cloth_list_array=cloth_list[key];
	        to_append +='\
	        <div class="'+cloth_list_array["price"]+'_'+cloth_list_array["type"]+'">\
	        <div class="'+cloth_list_array["type"]+'">\
	            <div class="col-xs-12 col-sm-6 col-md-4  bookimage">\
	            <div class="text-center"><a href="clothcart.jsp?id='+key+'"><img src="'+cloth_list_array["image"]+'" class="'+cloth_list_array["image"]+' img-thumbnail" style="width: 180px; height: 320px;"></a></div>\
	            <div class="text-center"><p><strong>'+cloth_list_array["brand"]+'</strong></p></div>\
	            <div class="text-primary text-center"><p>Price :'+cloth_list_array["price"]+'</p></div>\
	            </div>\
	            </div>\
	            </div>';
	    }
	    $(".catlogitems").append(to_append);
	});
	
});

