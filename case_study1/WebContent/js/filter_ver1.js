var productFeatureInfo = {
      "PRICE": {
            
            "4000-7000":{},
            "7000-10000":{},
            "10000-12000":{}
        },
        "weight":{
            "1kg":{},
            "2kg":{},
            "3kg":{}
        },
        "hard_disc":{
            "250GB":{},
            "500GB":{},
            "750GB":{},
            "1TB":{}
        },
    
        "ram":{
            
            "2_GB":{},
            "4_GB":{},
            "8_GB":{}

        },
        "brand": {
            
            "toshiba": {},
            "lenovo":{},
            "dell":{},
            "hp":{}
        },
        
        
        
        "grapic_card":{
            "1GB":{},
            "3GB":{},
            "5GB":{}

        },
        
}
var catalog_list = {
    
    
            "toshiba1":
            
                {
                    "weight": "1kg",
                    "hard_disc":"500GB",
                    "ram":"2_GB",
                    "brand": "toshiba",
                    "grapic_card":"1GB",
                    "displaybleName": "Toshiba 500",
                    "price": 4000.0,
                    "Color": 
                        "orange",
                    "image":"images/tosiba11.jpg"
                },
                
        
             "toshiba2":
               
                    {
                    "weight": "2kg",
                    "hard_disc":"750GB",
                    "ram":"4_GB","brand": "toshiba",
                    "grapic_card":"3GB",
                    "displaybleName": "Toshiba 750",
                    "price": 7000.0,
                    "Color": 
                        "#0000EE"
                    ,
                    "image":"images/toshiba21.jpg"
                
                },
                
            "toshiba3": 
                {
                    
                    "weight": "3kg",
                    "hard_disc":"1TB",
                    "ram":"8_GB","brand": "toshiba",
                    "grapic_card":"3GB",
                    "displaybleName": "Toshiba 1000",
                    "price": 10000.0,
                    "Color": 
                        "#CD5555" ,
                    "image":"images/toshiba31.jpg"
                },
                
         "Lenovo1": 
                {
                    "weight": "1kg",
                    "hard_disc":"500GB",
                    "ram":"2_GB","brand": "lenovo",
                    "grapic_card":"1GB",
                    "displaybleName": "Lenovo 500",
                    "price": 4000.0,
                    "Color": 
                        "orange"
                    ,
                    "image":"images/lenovo11.jpg"
                },
                
"Lenovo2":

                {
                    
                    "weight": "2kg",
                    "hard_disc":"750GB",
                    "ram":"4_GB","brand": "lenovo",
                    "grapic_card":"3GB",
                    "displaybleName": "Lenovo 750",
                    "price": 7000.0,
                    "Color": 
                        "#0000FF"
                    ,
                    "image":"images/lenovo21.jpg"
                
                },
               
 "Dell1":
                {
                    
                                      "weight": "2kg",
                    "hard_disc":"750GB",
                    "ram":"4_GB","brand": "dell",
                    "grapic_card":"3GB",
                    "displaybleName": "Dell 750",
                    "price": 7000.0,
                    "Color": 
                        "#FF6A6A"
                    ,
                    "image":"images/dell11.jpg"
                
                },
              
            "Dell2": 
                {
                    "weight": "3kg",
                    "hard_disc":"1TB",
                    "ram":"8_GB","brand": "dell",
                    "grapic_card":"3GB",
                    "displaybleName": "Dell 1000",
                    "price": 10000.0,
                    "Color": 
                        "orange"
                    ,
                    "image":"images/dell21.jpg"
                },
               
            "HP1": 
                {
                                    "weight": "1kg",
                    "hard_disc":"500GB",
                    "ram":"2_GB","brand": "hp",
                    "grapic_card":"1GB",
                    "displaybleName": "HP 500",
                    "price": 4000.0,
                    "Color": 
                        "orange"
                    ,
                    "image":"images/hp11.jpg",
    
                },
               
           "HP2": 
                {
                                      "weight": "3kg",
                    "hard_disc":"1TB",
                    "ram":"8_GB","brand": "hp",
                    "grapic_card":"5GB",

                "displaybleName": "HP 1000",
                    "price": 10000.0,
                    "Color": 
                        "#00F5FF"
                    ,
                    "image":"images/hp21.jpg",
                },
                
}

var inner_image= {
    "1kg500GB2_GBtoshiba1GB":{
        "image1":"images/smallimage1.jpg",
        "image2":"",
        "image3":"",
        "image4":"",
        "weight": "1kg",
        "hard_disc":"500GB",
        "ram":"2_GB",
        "brand": "toshiba",
        "grapic_card":"1GB",
        "displaybleName": "Toshiba 500",
        "price":"4000-7000"
    },
    "2kg750GB4_GBtoshiba2GB":{
        "image1":"images/smallimage1.jpg",
        "image2":"",
        "image3":"",
        "image4":"",
        "weight": "2kg",
        "hard_disc":"750GB",
        "ram":"4_GB","brand": "toshiba",
        "grapic_card":"3GB",
        "displaybleName": "Toshiba 750",
        "price":"7000-10000"

        
    },
    "3kg1TB8_GBtoshiba2GB":{
        "image1":"images/smallimage1.jpg",
        "image2":"",
        "image3":"",
        "image4":"",
        "weight": "3kg",
        "hard_disc":"1TB",
        "ram":"8_GB","brand": "toshiba",
        "grapic_card":"3GB",
        "displaybleName": "Toshiba 1000",
        "price":"10000-12000",

        
    },
    "1kg500GB2_GBlenovo1GB":{
        "image1":"images/smallimage1.jpg",
        "image2":"",
        "image3":"",
        "image4":"",
        "weight": "1kg",
        "hard_disc":"500GB",
        "ram":"2_GB","brand": "lenovo",
        "grapic_card":"1GB",
        "displaybleName": "Lenovo 500",
        "price": "4000-7000",
    },
    "2kg750GB4_GBlenovo2GB":{
        "image1":"images/smallimage1.jpg",
        "image2":"",
        "image3":"",
        "image4":"",
        "weight": "2kg",
        "hard_disc":"750GB",
        "ram":"4_GB","brand": "lenovo",
        "grapic_card":"3GB",
        "displaybleName": "Lenovo 750",
        "price": "7000-10000",

        
    },
    "2kg750GB4_GBdell2GB":{
        "image1":"images/smallimage1.jpg",
        "image2":"",
        "image3":"",
        "image4":"",
        "weight": "2kg",
        "hard_disc":"750GB",
        "ram":"4_GB","brand": "dell",
        "grapic_card":"3GB",
        "displaybleName": "LDell750",
        "price": "7000-10000",
        
    },
    "3kg1TB8_GBdell2GB":{
        "image1":"images/smallimage1.jpg",
        "image2":"",
        "image3":"",
        "image4":"",
        "weight": "3kg",
        "hard_disc":"1TB",
        "ram":"8_GB","brand": "dell",
        "grapic_card":"3GB",
        "displaybleName": "Dell 1000",
        "price":"10000-12000",
        
    },
    "1kg500GB2_GBhp1GB":{
        "image1":"images/smallimage1.jpg",
        "image2":"",
        "image3":"",
        "image4":"",
        "weight": "1kg",
        "hard_disc":"500GB",
        "ram":"2_GB","brand": "hp",
        "grapic_card":"1GB",
        "displaybleName": "HP 500",
        "price": "4000-7000",
        
    },
    "3kg1TB8_GBhp5GB":{
        "image1":"images/smallimage1.jpg",
        "image2":"",
        "image3":"",
        "image4":"",
        "weight": "3kg",
        "hard_disc":"1TB",
        "ram":"8_GB","brand": "hp",
        "grapic_card":"5GB",
        "displaybleName": "HP 1000",
        "price":"10000-12000",
        
    }
}
$(document).ready(function() {
/*complete Code related to filter*/
    //for appending objects keys and values into filters    
    var i = 0;
    for(var k=1;k<5;k++) {
        $("#filters-table-"+k).append('<tr id="filter-categories-'+k+'"></tr>'); // creating a row for table-1 to 4
        $("#filters-table-"+k).append('<tr id="filter-options-'+k+'"></tr>'); // creating a row for filter options
                                                                              // for table -1 to 4
    }
    for(var key in productFeatureInfo){
        var p=key.replace(/\_/g,' ');
        if(key=="PRICE"){
             $('.filter-span-price').append('<ul class="text-capitalize" style="list-style-type:none;padding-left:5px" id="span_price"><span class="text-primary">price : </span></ul>');
            var price_array =productFeatureInfo["PRICE"]; 
            for(var key in price_array){

                $('#span_price').append('<li id="span_'+key+'" style="color:black !important;border:1px solid #bababa;margin-bottom:10px;"><input type="checkbox" name="'+key+'" value="'+key+'">'+key+'</li>');
            }
        }// for price range filter
        else{
            if(i<4){
                $('#filter-categories-1').append('<th class="text-primary text-capitalize filters_'+key+'">'+p+'</th>');
                $('#filter-options-1').append('<td><div id="'+key+'" class="scrollit"></div></td>');
                for(var anotherkey in productFeatureInfo[key]){
                    var q=anotherkey.replace(/\_/g,' ');
                    var s= anotherkey.replace(/\./g,'idfordot');
                    $('#'+key).append('<div class="checkbox" data-filter-type='+anotherkey+'><label><input \
                        type="checkbox" id='+key+"-"+s+' value="">'+q+'</label></div>');
                }
            }
            else if(i<6){
                $("#filter-categories-2").append('<th class="text-primary text-capitalize filters_'+key+'">'+p+'</th>');
                $('#filter-options-2').append('<td><div id="'+key+'" class="scrollit"></div></td>');
                for(var anotherkey in productFeatureInfo[key]){
                    var q=anotherkey.replace(/\_/g,' ');
                    var s= anotherkey.replace(/\./g,'idfordot');
                    $('#'+key).append('<div  class="checkbox" data-filter-type='+anotherkey+'><label><input \
                        type="checkbox" id='+key+"-"+s+' value="">'+q+'</label></div>');
                }
            }
           
        }// for other ckeck box filters
        i++;

    }
    var ab=0;
    old_cat_title = [];
    // for checking and unchecking in chekbox    
    $('.checkbox').change(function(){
        var array_items = catalog_list["productList"];
        var checkedlen=$('.checkbox').find('input').is(":checked");
        if(ab < 9){
        	for(var key in catalog_list){
                var catalog_list_array=catalog_list[key];
                $('.'+catalog_list_array["price"]+'_'+catalog_list_array["pages"]).hide();
                ab++;
            }

        }

        for(var key in productFeatureInfo){
            for(var anotherkey in productFeatureInfo[key]){
                var s= anotherkey.replace(/\./g,'idfordot');
                if(($(this).find('input').attr('id').split('-')[0]==key)&&($(this).find('input').attr('id').split('-')[1]==s)){
                var category=key;
                var filter_name=anotherkey;
                }
            }
        }

    //declaring variables for changing '_' into ' 'for class='filter-span' 
        var a=$(this).find('input').attr('id').split('-')[0];
        x = a.replace(/\_/g,' ');
        var b=$(this).find('input').attr('id').split('-')[1];
        y=b.replace(/\_/g,' ');
        y=b.replace('idfordot','.')
        
    //for appending checked input values into Nav bar 
        if($(this).find('input').is(":checked")){

            for(var p=0;p<catalog_list["productList"].length;p++){
                var variant_products_array = array_items[p]["variantProducts"];
                var catalog_list_array=variant_products_array[0];
                if((a=="brand")&&(b==catalog_list_array["brand"])){ 
                    $('.'+catalog_list_array["weight"]+'-'+catalog_list_array["hard_disc"]+'-'+catalog_list_array["ram"]+'-'+b+'-'+catalog_list_array["grapic_card"]).show();
                }
                else if((a=="weight")&&(b==catalog_list_array["weight"])){ 
                    $('.'+b+'-'+catalog_list_array["hard_disc"]+'-'+catalog_list_array["ram"]+'-'+catalog_list_array["brand"]+'-'+catalog_list_array["grapic_card"]).show();
                }
                else if((a=="ram")&&(b==catalog_list_array["ram"])){ 
                    $('.'+catalog_list_array["weight"]+'-'+catalog_list_array["hard_disc"]+'-'+b+'-'+catalog_list_array["brand"]+'-'+catalog_list_array["grapic_card"]).show();
                }
                else if((a=="hard_disc")&&(b==catalog_list_array["hard_disc"])){ 
                    $('.'+catalog_list_array["weight"]+'-'+b+'-'+catalog_list_array["ram"]+'-'+catalog_list_array["brand"]+'-'+catalog_list_array["grapic_card"]).show();
                }
                else if((a=="grapic_card")&&(b==catalog_list_array["grapic_card"])){ 
                    $('.'+catalog_list_array["weight"]+'-'+catalog_list_array["hard_disc"]+'-'+catalog_list_array["ram"]+'-'+catalog_list_array["brand"]+'-'+b).show();
                }
                
            }
            if(old_cat_title.length==0){
                $(".filter-span").append('<ul class="text-capitalize" style="list-style-type:none;padding-left:5px"><span id="span_'+category+'">'+ x + ' : </span></ul>');
                $(".filter-span #span_"+category).addClass("text-primary");
                old_cat_title.push(x);
            }

            else {
                for(var i=0;i<old_cat_title.length;i++) {
                    if(old_cat_title[i] == x) break;
                    else if(i == old_cat_title.length-1) {
                        $(".filter-span").append('<ul class="text-capitalize" style="list-style-type:none;padding-left:5px"><span id="span_'+category+'">' + x + ' : </span></ul>');
                        $(".filter-span #span_"+category).addClass("text-primary");
                        var temp = x;
                    }

                }
                old_cat_title.push(temp);
            }
                
            $("#span_"+category).append('<li><span class="filter-tags" id="span_'+$(this).find('input').attr("id")+'" style="width: 150%;"><span>'+y+'<span class="filter-close" style="padding-left: 65%;">x</span></span></span></li>');
        }
        //when uncheked an input and also when clicked on 'x' then for removing coresponding span in filter-span
        $('.filter-close').click(function () {
            $(this).parent().parent().remove();
            var close_id= $(this).parent().parent().attr('id').split("span_")[1];
            $('#'+close_id).attr('checked', false);
            var close_id= $(this).parent().parent().attr('id').split("-")[1];
            if($('#span_'+category).text() == x+' : '){
                $('#span_'+category).remove();
                var index = old_cat_title.indexOf(x);
                old_cat_title.splice(index,1);
                
            }
            var close_id2= $(this).parent().parent().attr('id').split("span_")[1];
            var a=close_id2.split('-')[0];
            var b=close_id2.split('-')[1];
            for(var p=0;p<catalog_list["productList"].length;p++){
                var variant_products_array = array_items[p]["variantProducts"];
                var catalog_list_array=variant_products_array[0];
                if((a=="brand")&&(b==catalog_list_array["brand"])){ 
                    $('.'+catalog_list_array["weight"]+'-'+catalog_list_array["hard_disc"]+'-'+catalog_list_array["ram"]+'-'+b+'-'+catalog_list_array["grapic_card"]).hide();
                }
                else if((a=="weight")&&(b==catalog_list_array["weight"])){ 
                    $('.'+b+'-'+catalog_list_array["hard_disc"]+'-'+catalog_list_array["ram"]+'-'+catalog_list_array["brand"]+'-'+catalog_list_array["grapic_card"]).hide();
                }
                else if((a=="ram")&&(b==catalog_list_array["ram"])){ 
                    $('.'+catalog_list_array["weight"]+'-'+catalog_list_array["hard_disc"]+'-'+b+'-'+catalog_list_array["brand"]+'-'+catalog_list_array["grapic_card"]).hide();
                }
                else if((a=="hard_disc")&&(b==catalog_list_array["hard_disc"])){ 
                    $('.'+catalog_list_array["weight"]+'-'+b+'-'+catalog_list_array["ram"]+'-'+catalog_list_array["brand"]+'-'+catalog_list_array["grapic_card"]).hide();
                }
                else if((a=="grapic_card")&&(b==catalog_list_array["grapic_card"])){ 
                    $('.'+catalog_list_array["weight"]+'-'+catalog_list_array["hard_disc"]+'-'+catalog_list_array["ram"]+'-'+catalog_list_array["brand"]+'-'+b).hide();
                }
                
            }
            if($('.filter-span').text() == ""){
                for(var a=0;a<catalog_list["productList"].length;a++){
                    var variant_products_array = array_items[a]["variantProducts"];
                    for(var j=0;j<variant_products_array.length;j++){
                        var array_inner=variant_products_array[j];
                        $('.'+array_inner["weight"]+'-'+array_inner["hard_disc"]+'-'+array_inner["ram"]+'-'+array_inner["brand"]+'-'+array_inner["grapic_card"]).show();
                    }
                }
            ab=0;
            }
        });
            //if not checked,then for removing filter tags
        if(!($(this).find('input').is(":checked"))){
            for(var p=0;p<catalog_list["productList"].length;p++){
                var variant_products_array = array_items[p]["variantProducts"];
                var catalog_list_array=variant_products_array[0];
                if((a=="brand")&&(b==catalog_list_array["brand"])){ 
                    $('.'+catalog_list_array["weight"]+'-'+catalog_list_array["hard_disc"]+'-'+catalog_list_array["ram"]+'-'+b+'-'+catalog_list_array["grapic_card"]).hide();
                }
                else if((a=="weight")&&(b==catalog_list_array["weight"])){ 
                    $('.'+b+'-'+catalog_list_array["hard_disc"]+'-'+catalog_list_array["ram"]+'-'+catalog_list_array["brand"]+'-'+catalog_list_array["grapic_card"]).hide();
                }
                else if((a=="ram")&&(b==catalog_list_array["ram"])){ 
                    $('.'+catalog_list_array["weight"]+'-'+catalog_list_array["hard_disc"]+'-'+b+'-'+catalog_list_array["brand"]+'-'+catalog_list_array["grapic_card"]).hide();
                }
                else if((a=="hard_disc")&&(b==catalog_list_array["hard_disc"])){ 
                    $('.'+catalog_list_array["weight"]+'-'+b+'-'+catalog_list_array["ram"]+'-'+catalog_list_array["brand"]+'-'+catalog_list_array["grapic_card"]).hide();
                }
                else if((a=="grapic_card")&&(b==catalog_list_array["grapic_card"])){ 
                    $('.'+catalog_list_array["weight"]+'-'+catalog_list_array["hard_disc"]+'-'+catalog_list_array["ram"]+'-'+catalog_list_array["brand"]+'-'+b).hide();
                }
                
            }
            var id=$(this).find('input').attr('id');
            id='span_'+id;
            $('#'+id).parent().remove();
        }
    //creating function for removing category from the span and also from old_cat_title array 
        var removeCategory = function(){ 
            if($('#span_'+category).text() == x+' : '){
               $('#span_'+category).remove();
              var index = old_cat_title.indexOf(x);
              old_cat_title.splice(index,1); 

            }
        }
        removeCategory();
        if(checkedlen == 0){
           for(var a=0;a<catalog_list["productList"].length;a++){
                var variant_products_array = array_items[a]["variantProducts"];
                for(var j=0;j<variant_products_array.length;j++){
                    var array_inner=variant_products_array[j];
                    $('.'+array_inner["weight"]+'-'+array_inner["hard_disc"]+'-'+array_inner["ram"]+'-'+array_inner["brand"]+'-'+array_inner["grapic_card"]).show();
                }
            }
            ab=0;
        }
            /*if($(this).find('input').is(":checked")){
                    for(var p=0;p<catalog_list["productList"].length;p++){
                    var variant_products_array = array_items[p]["variantProducts"];
                    var catalog_list_array=variant_products_array[0];
                    if(a=="brand"){
                        if(b==catalog_list_array[a]){ 
                            $('.'+catalog_list_array["weight"]+'-'+catalog_list_array["hard_disc"]+'-'+catalog_list_array["ram"]+'-'+b+'-'+catalog_list_array["grapic_card"]).show();
                        }
                        else{
                            $('.'+catalog_list_array["weight"]+'-'+catalog_list_array["hard_disc"]+'-'+catalog_list_array["ram"]+'-'+b+'-'+catalog_list_array["grapic_card"]).hide();


                        }
                    }
                }
            }*/
    });

    //for reset button in filters  
    $('#reset-btn').click(function(){
        $('.filter-span').empty();
        $('#more-filters-container').find('input').attr('checked', false);
        old_cat_title=[];
        for(var a=0;a<catalog_list["productList"].length;a++){
            var variant_products_array = array_items[a]["variantProducts"];
            for(var j=0;j<variant_products_array.length;j++){
                var array_inner=variant_products_array[j];
                $('.'+array_inner["weight"]+'-'+array_inner["hard_disc"]+'-'+array_inner["ram"]+'-'+array_inner["brand"]+'-'+array_inner["grapic_card"]).show();
            }
        }
        ab=0;
    });

    //toggling more filters
    $("#more-filter-btn").click(function(){
        $("#more-filters-list2").slideToggle("fast");
     
    });
    // for hiding the filter menu when outside the menu is clicked
    $('body').click(function(evt){    
       if((evt.target.class == "shopByBar")||(evt.target.id== 'more-filters-container')||(evt.target.class == "filter-close"))
          return;
       if(($(evt.target).closest('.shopByBar').length)||($(evt.target).closest('#more-filters-container').length)||($(evt.target).closest('.filter-close').length))
          return;  
          $("#more-filters-list2").slideUp("fast");           
    });

    
   
/* Code for catalog start */
    var array_items = catalog_list["productList"];
    var c=0;
   
    for(var key in catalog_list){
    	var catalog_list_array=catalog_list[key];
           
            var to_append = '<div id="'+i+'" class="'+catalog_list_array["weight"]+'-'+catalog_list_array["hard_disc"]+'-'+catalog_list_array["ram"]+'-'+catalog_list_array["brand"]+'-'+catalog_list_array["grapic_card"]+'">\
            <div class="col-xs-12 col-sm-6 col-md-4 catalogimage" style="padding:0px;">\
            <div class="text-center" ><a href="BookDesc?id='+key+'"><img src="'+catalog_list_array["image"]+'" class="'+catalog_list_array["image"]+' img-thumbnail" style="width: 160px; height: 245px;"></a></div>\
            <div class="text-center" ><p><strong>'+catalog_list_array["displaybleName"]+'</strong></p></div>\
            <div class="text-primary"><p><span class="text-left" style="padding-left:25%;">Price :'+catalog_list_array["price"]+'</span><span class="text-right" style="padding-left:8%"> :'+catalog_list_array["pages"]+'</span></div>\
            </div>\
            </div>\
             '
            
    		}  

            $(".catlogitems").append(to_append);c++;
        
    

   
    $('.carousel').carousel({
    
    });

    
     
});


