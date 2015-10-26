//var book_list={
//    book1:{
//        "book_name":"Immortals of Meluha",
//        "pages":"245",
//        "price":"150",
//        "image":"images/book.jpg"
//    },
//    book2:{
//        "book_name":"Secret of Nagas",
//        "pages":"345",
//        "price":"190",
//        "image":"images/book2.jpg"
//    },
//    book3:{
//        "book_name":"Oath of Vayuputras",
//        "pages":"475",
//        "price":"250",
//        "image":"images/book3.jpeg"
//    },
//    book4:{
//        "book_name":"Scion of Ikshavaku",
//        "pages":"345",
//        "price":"230",
//        "image":"images/book6.jpg"
//    },
//    book5:{
//        "book_name":"Ramayanam",
//        "pages":"205",
//        "price":"350",
//        "image":"images/book5.jpg"
//    },
//    book6:{
//        "book_name":"Mahabarath",
//        "pages":"427",
//        "price":"390",
//        "image":"images/book4.jpeg"
//    }
//}
var book_filters={
    "price":["100-200","200-300","300-400"],
    "pages":["200-300","300-400","400-500"]
    }
    var book_obj={
        "clicked":[],
    }
$(document).ready(function() {
//	$.ajax({
//
//        url : "books",
//        dataType : 'json',
//        data:{"type":"books"},
//        error : function() {
//       
//            alert("Error Occured");
//        },
//        success : function(data) {
//            var receivedData = [];
//
//            $.each(data.jsonArray, function(index) {
//                $.each(data.jsonArray[index], function(key, value) {
//                    var point = [];
//
//                        point.push(key);
//                        point.push(value);
//                        receivedData.push(point);
//
//                    }); 
//            });
//
//        }
//    });
	$.ajax({
	url:"/case_study1/books.do",
	type:"get",
	 dataType: 'json',
	success:function(book_list){

//	$.getJSON("books.do",function(book_list){
		$("#filters-table-1").append('<tr id="filter-categories-1"></tr>'); // creating a row for table-1 to 4
        // creating a row for filter options
                                                                             // for table -1 to 4
		for(var key in book_filters){
			  book_filters_array=book_filters[key];
			   $("#filter-area").append('<table id="'+key+'" class="forfilter"><tr><th  ><span class="text-primary " style="margin-left:25%">'+key+'</span></th></tr>');
			   
			   for(var i=0;i<book_filters_array.length;i++){
			       $("#"+key).append('<tr><td><div class=" checkbox"><label id="label_'+key+"_"+book_filters_array[i]+'" style="margin-left:25%"><input \
			                   type="checkbox" id='+key+"_"+book_filters_array[i]+' value="">'+book_filters_array[i]+'</label></div></td></tr>');
			   }
			   $("#"+key).append("</table>");
			}

old_cat_title = [];
var ab=0;
$('.checkbox').change(function() {
   var checkedlen=$('.checkbox').find('input').is(":checked");
   if(ab < 6){
       for(var key in book_list){
           var book_list_array=book_list[key];
           $('.'+book_list_array["price"]+'_'+book_list_array["pages"]).hide();
           ab++;
       }

   }
   var newkey=$(this).find('input').attr('id').split('_')[0];
   var array_val=$(this).find('input').attr('id').split('_')[1];
   for(var key in book_filters){
       bookfilters_array=book_filters[key];
       for(var i=0;i<bookfilters_array.length;i++){
           if((newkey==key)&&(array_val==bookfilters_array[i]) ){
               var category=key;
               var filter_name=bookfilters_array[i];
           }
       }
   }
   if($(this).find('input').is(":checked")){
       var array_val1=$(this).find('input').attr('id').split('_')[1];
       var array_val0=array_val1.split('-')[0];
       var array_val1=array_val1.split('-')[1];
       for(var key in book_list){
           var book_list_array=book_list[key];
           var newbooklist_array=book_list[key][newkey];
           if((array_val0<newbooklist_array)&&(array_val1>newbooklist_array)){
               array_val3=newbooklist_array;
               if(newkey=="price"){for(var key in book_list){$('.'+array_val3+'_'+book_list_array["pages"]).show();}}
               if(newkey=="pages"){for(var key in book_list){$('.'+book_list_array["price"]+'_'+array_val3).show();}}
           }
       }
   }
   if(!($(this).find('input').is(":checked"))) {
       var newkey=$(this).find('input').attr('id').split('_')[0];
       var array_val1=$(this).find('input').attr('id').split('_')[1];
       var array_val0=array_val1.split('-')[0];
       var array_val1=array_val1.split('-')[1];
       for(var key in book_list){
           var book_list_array=book_list[key];
           var newbooklist_array=book_list[key][newkey];
           if((array_val0<newbooklist_array)&&(array_val1>newbooklist_array)){
               if(newkey=="price"){for(var key in book_list){$('.'+newbooklist_array+'_'+book_list_array["pages"]).hide();}}
               if(newkey=="pages"){for(var key in book_list){$('.'+book_list_array["price"]+'_'+newbooklist_array).hide();}}
           }
       }
       for(key in book_filters){
           var book_filters_array2=book_filters[key];
           for(var k=0;k<book_filters_array2.length;k++){
               var newid= "label_"+key+'_'+book_filters_array2[k];
               var newleng=$('#'+newid).find('input').is(":checked").length;
               if($('#'+newid).find('input').is(":checked")){
                   newid=newid.split("label_")[1];
                   var newkey1=newid.split('_')[0];
                   var array_val11=newid.split('_')[1];
                   var array_val01=array_val11.split('-')[0];
                   var array_val11=array_val11.split('-')[1];
                   for(var key in book_list){
                       var book_list_array=book_list[key];
                       var newbooklist_array=book_list[key][newkey1];
                       if((array_val01<newbooklist_array)&&(array_val11>newbooklist_array)){
                           if(newkey1=="price"){for(var key in book_list){$('.'+newbooklist_array+'_'+book_list_array["pages"]).show();}}
                           if(newkey1=="pages"){for(var key in book_list){$('.'+book_list_array["price"]+'_'+newbooklist_array).show();}}
                       }
                   }
               }
           }
       }
   }
   if($(this).find('input').is(":checked")){
       if(old_cat_title.length==0){
           $(".filter-span").append('<ul class="text-capitalize" style="list-style-type:none;padding-left:5px"><span id="span_'+category+'">'+ category + ' : </span></ul>');
           $(".filter-span #span_"+category).addClass("text-primary");
           old_cat_title.push(category);
       }
       else {
           for(var i=0;i<old_cat_title.length;i++) {
               if(old_cat_title[i] == category) break;
               else if(i == old_cat_title.length-1) {
                   $(".filter-span").append('<ul class="text-capitalize" style="list-style-type:none;padding-left:5px"><span id="span_'+category+'">' + category + ' : </span></ul>');
                   $(".filter-span #span_"+category).addClass("text-primary");
                   var temp = category;
               }
           }
           old_cat_title.push(temp);
       }
       $("#span_"+category).append('<li><span class="filter-tags" id="span_'+$(this).find('input').attr("id")+'" style="width: 75%;"><span>'+filter_name+'<span class="filter-close" style="padding-left: 60%;">x</span></span></span></li>');
   }
//   $('.filter-close').click(function () {
//       $(this).parent().parent().remove();
//       var close_id= $(this).parent().parent().attr('id').split("span_")[1];
//       $('#'+close_id).attr('checked', false);
//       if($('#span_'+category).text() ==category+' : '){
//           $('#span_'+category).remove();
//           var index = old_cat_title.indexOf(category);
//           old_cat_title.splice(index,1);
//       }
//       var array_val1=close_id.split('_')[1];
//       var array_val0=array_val1.split('-')[0];
//       var array_val4=array_val1.split('-')[1];
////       $.ajax({
////    	   url:"../cart.jsp",
////           data:key,
////       
////       });
//       for(var key in book_list){
//           var book_list_array=book_list[key];
//           var newbooklist_array=book_list[key][newkey];
//           if((array_val0<newbooklist_array)&&(array_val4>newbooklist_array)){
//               array_val3=newbooklist_array;
//               if(newkey=="price"){$('.'+array_val3+'_'+book_list_array["pages"]).hide();}
//               if(newkey=="pages"){$('.'+book_list_array["price"]+'_'+array_val3).hide();}
//           }
//       }
//       if($('.filter-span').text() == ""){
//           for(var key in book_list){
//               var book_list_array=book_list[key];
//               $('.'+book_list_array["price"]+'_'+book_list_array["pages"]).show();
//               ab=0;
//           }
//       }
//
//   });
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
       for(var key in book_list){
           var book_list_array=book_list[key];
           $('.'+book_list_array["price"]+'_'+book_list_array["pages"]).show();
           ab=0;
       }
   }
});

$('body').click(function(evt){    
  if((evt.target.class == "shopByBar")||(evt.target.id== 'more-filters-container')||(evt.target.class == "filter-close"))
     return;
  if(($(evt.target).closest('.shopByBar').length)||($(evt.target).closest('#more-filters-container').length)||($(evt.target).closest('.filter-close').length))
     return;  
     $("#more-filters-list2").slideUp("fast");           
});
var to_append=" ";
for(var key in book_list){
   var book_list_array=book_list[key];
 to_append +='\
 <div class="'+book_list_array["price"]+'_'+book_list_array["pages"]+'">\
 <div class="'+book_list_array["book_name"]+'">\
           <div class="col-xs-12 col-sm-6 col-md-4 bookimage" style="padding:0px;">\
           <div class="text-center" ><a href="bookDesc.do?id='+key+'"><img src="'+book_list_array["image"]+'" class="'+book_list_array["image"]+' img-thumbnail" style="width: 160px; height: 245px;"></a></div>\
           <div class="text-center" ><p><strong>'+book_list_array["bookname"]+'</strong></p></div>\
           <div class="text-primary"><p><span class="text-left" style="padding-left:25%;">Price :'+book_list_array["price"]+'</span><span class="text-right" style="padding-left:8%">Pages :'+book_list_array["pages"]+'</span></div>\
           </div>\
           </div>\
           </div>';
}
$(".catlogitems").append(to_append);
	}
	} );
    
});