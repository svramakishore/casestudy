//var sport_list={
//    sport1:{
//        "sportname":"cricket",
//        
//        "price":"3050",
//        "image":"images/sport1.jpg"
//    },
//    sport2:{
//        "sportname":"football",
//        
//        "price":"2500",
//        "image":"images/sport2.jpg"
//    },
//    sport3:{
//        "sportname":"volleyball",
//        
//        "price":"1500",
//        "image":"images/sport3.jpg"
//    },
//    sport4:{
//        "sportname":"batminton",
//        
//        "price":"3500",
//        "image":"images/sport4.jpg"
//    },
//    sport5:{
//        "sportname":"tennis",
//        
//        "price":"2700",
//        "image":"images/sport5.jpg"
//    },
//    sport6:{
//        "sportname":"tabletenis",
//        
//        "price":"1900",
//        "image":"images/sport6.jpg"
//    }
//}
var sport_filters={
    "price":["1000-2000","2000-3000","3000-4000"],
    "sportname":["cricket","football","volleyball","batminton","tennis","tabletenis"]
    }
    var sport_obj={
        "clicked":[],
    }
$(document).ready(function() {
	$.getJSON("Sports",function(sport_list){
		$("#filters-table-1").append('<tr id="filter-categories-1"></tr>'); // creating a row for table-1 to 4
        // creating a row for filter options
                                                                             // for table -1 to 4
		for(var key in sport_filters){
			  sport_filters_array=sport_filters[key];
			   $("#filter-area").append('<table id="'+key+'" class="forfilter"><tr><th  ><span class="text-primary " style="margin-left:25%">'+key+'</span></th></tr>');
			   
			   for(var i=0;i<sport_filters_array.length;i++){
			       $("#"+key).append('<tr><td><div class=" checkbox"><label id="label_'+key+"_"+sport_filters_array[i]+'" style="margin-left:25%"><input \
			                   type="checkbox" id='+key+"_"+sport_filters_array[i]+' value="">'+sport_filters_array[i]+'</label></div></td></tr>');
			   }
			   $("#"+key).append("</table>");
			}

   

    var ab=0;
    old_cat_title = [];
    $('.checkbox').change(function(){
        var checkedlen=$('.checkbox').find('input').is(":checked");
        //only for first check the objects will be hidden
        if(ab < 6){
            for(var key in sport_list){
                var sport_list_array=sport_list[key];
                $('.'+sport_list_array["price"]+'_'+sport_list_array["sportname"]).hide();
              ab++;
            }
        }
        var newkey=$(this).find('input').attr('id').split('_')[0];
        var array_val=$(this).find('input').attr('id').split('_')[1];
        for(var key in sport_filters){
            sportfilters_array=sport_filters[key];
            for(var i=0;i<sportfilters_array.length;i++){
                if((newkey==key)&&(array_val==sportfilters_array[i]) ){
                    var category=key;
                    var filter_name=sportfilters_array[i];
                }
            }
        }
    //for showing the checked objects
        if($(this).find('input').is(":checked")){
            var newkey=$(this).find('input').attr('id').split('_')[0];
            var array_val1=$(this).find('input').attr('id').split('_')[1];
            if(newkey=="price"){
                for(var key in sport_list){
                var sport_list_array=sport_list[key];
                var array_val0=array_val1.split('-')[0];
                var array_val4=array_val1.split('-')[1];
                var newsportlist_array=sport_list[key][newkey];
                    if((array_val0<newsportlist_array)&&(array_val4>newsportlist_array)){
                        array_val3=newsportlist_array;
                        for(var key in sport_list){$('.'+array_val3+'_'+sport_list_array["sportname"]).show();}
                        
                    }
                }   
            }
            if(newkey=="sportname"){
                for(var key in sport_list){
                var sport_list_array=sport_list[key];
                var newsportlist_array=sport_list[key][newkey];
                    if(array_val1==newsportlist_array){
                        for(var key in sport_list){$('.'+sport_list_array["price"]+'_'+newsportlist_array).show();}
                    }

                }
            }
        }
    //for removing the objects uncheked
        if(!($(this).find('input').is(":checked"))){
            var array_val1=$(this).find('input').attr('id').split('_')[1];
            if(newkey=="price"){
                for(var key in sport_list){
                    var sport_list_array=sport_list[key];
                    var array_val0=array_val1.split('-')[0];
                    var array_val4=array_val1.split('-')[1];
                    var newsportlist_array=sport_list[key][newkey];
                    if((array_val0<newsportlist_array)&&(array_val4>newsportlist_array)){
                        for(var key in sport_list){$('.'+newsportlist_array+'_'+sport_list_array["sportname"]).hide();}
                    }
                }
            }
            if(newkey=="sportname"){
                for(var key in sport_list){
                var sport_list_array=sport_list[key];
                var newsportlist_array=sport_list[key][newkey];
                    if(array_val1==newsportlist_array){
                        for(var key in sport_list){$('.'+sport_list_array["price"]+'_'+newsportlist_array).hide();}
                    }
                }
            }
    //for keeping the objects which are in range in other filters
            for(key in sport_filters){
                var sport_filters_array2=sport_filters[key];
                for(var k=0;k<sport_filters_array2.length;k++){
                    var newid= "label_"+key+'_'+sport_filters_array2[k];
                    var newleng=$('#'+newid).find('input').is(":checked").length;
                    if($('#'+newid).find('input').is(":checked")){
                        newid=newid.split("label_")[1];
                        var newkey1=newid.split('_')[0];
                        console.log(newkey1);
                        var array_val11=newid.split('_')[1];
                        var array_val01=array_val11.split('-')[0];
                        var array_val12=array_val11.split('-')[1];
                        if(newkey1=="price"){
                            for(var key in sport_list){
                                var sport_list_array=sport_list[key];
                                var array_val0=array_val1.split('-')[0];
                                var array_val4=array_val1.split('-')[1];
                                var newsportlist_array=sport_list[key][newkey1];
                                if((array_val01<newsportlist_array)&&(array_val12>newsportlist_array)){
                                    for(var key in sport_list){$('.'+newsportlist_array+'_'+sport_list_array["sportname"]).show();}
                                }
                            }
                        }
                        if(newkey1=="sportname"){
                            for(var key in sport_list){
                            var sport_list_array=sport_list[key];
                            var newsportlist_array=sport_list[key][newkey1];
                                if(array_val11==newsportlist_array){
                                    for(var key in sport_list){$('.'+sport_list_array["price"]+'_'+newsportlist_array).show();}
                                }
                            }
                        }
                    }
                }
            }
        }
    //for appending the checked values into span
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
            
            $("#span_"+category).append('<li><span class="filter-tags" id="span_'+$(this).find('input').attr("id")+'" style="width: 150%;"><span>'+filter_name+'<span class="filter-close" style="padding-left: 50%;">x</span></span></span></li>');
        }
    //hiding objects when the span is closed
        $('.filter-close').click(function () {
            $(this).parent().parent().remove();
            var close_id= $(this).parent().parent().attr('id').split("span_")[1];
            $('#'+close_id).attr('checked', false);
            if($('#span_'+category).text() ==category+' : '){
                $('#span_'+category).remove();
                var index = old_cat_title.indexOf(category);
                old_cat_title.splice(index,1);
            }
            var array_val1=close_id.split('_')[0];
            var array_val2=close_id.split('_')[1];
            if(array_val1=="price"){
                var array_val0=array_val2.split('-')[0];
                var array_val4=array_val2.split('-')[1];
                for(var key in sport_list){
                    var sport_list_array=sport_list[key];
                   var newsportlist_array=sport_list[key][array_val1];
                  console.log(array_val0);
                  console.log(array_val4);
                    if((array_val0<newsportlist_array)&&(array_val4>newsportlist_array)){
                        for(var key in sport_list){$('.'+newsportlist_array+'_'+sport_list_array["sportname"]).hide();}                                    
                    }
                }
            }
            if(array_val1=="sportname"){
                for(var key in sport_list){
                var sport_list_array=sport_list[key];
                var newsportlist_array=sport_list[key][array_val1];
                    if(array_val2 ==newsportlist_array){
                        for(var key in sport_list){$('.'+sport_list_array["price"]+'_'+newsportlist_array).hide();}
                    }
                }
            }
        //making ab=0 when all the spans are removed
            if($('.filter-span').text() == ""){
                for(var key in sport_list){
                    var sport_list_array=sport_list[key];
                    $('.'+sport_list_array["price"]+'_'+sport_list_array["sportname"]).show();
                }
                ab=0;
            }

        });
    //removing span when input is unchecked
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
    //making ab=0 when all the inputs are unchecked
        if(checkedlen == 0){
            for(var key in sport_list){
                var sport_list_array=sport_list[key];
                $('.'+sport_list_array["price"]+'_'+sport_list_array["sportname"]).show();
            }
            ab=0;
        }

    });
//removing all spans and unchecking all inputs and making ab=0 when reset is pressed
    $('#reset-btn').click(function(){
        $('.filter-span').empty();
        $('#more-filters-container').find('input').attr('checked', false);
        old_cat_title=[];
        for(var key in sport_list){
            var sport_list_array=sport_list[key];
         $('.'+sport_list_array["price"]+'_'+sport_list_array["sportname"]).show();}
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
    for(var key in sport_list){
        var sport_list_array=sport_list[key];
        to_append +='\
        <div class="'+sport_list_array["price"]+'_'+sport_list_array["sportname"]+'">\
        <div class="'+sport_list_array["sportname"]+'">\
            <div class="col-xs-12 col-sm-6 col-md-4  bookimage">\
            <div class="text-center"><a href="SportDesc?id='+key+'"><img src="'+sport_list_array["image"]+'" class="'+sport_list_array["image"]+' img-thumbnail" style="width: 215px; height: 215px;"></a></div>\
            <div class="text-center"><p><strong>'+sport_list_array["sportname"]+'</strong></p></div>\
            <div class="text-primary text-center"><p>Price :'+sport_list_array["price"]+'</p></div>\
            </div>\
            </div>\
            </div>';
    }
    $(".catlogitems").append(to_append);
	});
});