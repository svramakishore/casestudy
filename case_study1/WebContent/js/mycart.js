$(document).ready(function(){
	
	$.ajax({
		url:"myCartquantity.do",
		success:function(totalquantity){
			quantityfunction(totalquantity);
		}
	});
	
	function quantityfunction(totalquantity){
		$("#mycartvalue").html("<span class='badge'>"+totalquantity+"</span>");
		if(totalquantity==0){
			$(".carttable").html("<p style='font-size:35px;border:1px solid black' class='text-center'>No Products Available</p>");
		}
	}

	var total=0;
	$.ajax({
		url:"productprice.do",
		success:function(product){
			var toappend="";
			for(var i=0;i<product.length;i++){	
				total=total+product[i]['subtotal'];
			toappend +="<tr style='margin-bottom:10px' class='"+product[i]['productname']+"'>\
        			<td><img src='"+product[i]['productimage']+"' style='width:150px;height:150px'></td>\
        			<td>"+product[i]['productprice']+"</td>\
        			<td style='width:10%;'><input type='number' class='forfocus'  id='"+i+'_'+product[i]['productname']+"' style='width:50%;' name='quantity' value='"+product[i]['quantity']+"' min='1'></td>\
        			<td id='total_"+i+"'>"+product[i]['subtotal']+"</td>\
        					<td >\
          			<span class='glyphicon glyphicon-trash forremove' id='"+product[i]['id']+"' >\
        			</span></td>\
               		</tr>"
			}
			toappend+="<tr style='margin-bottom:10px' >\
					<td colspan='3' style='float:right;'>Total</td><td colspan='2' id='totalamount'>"+total+"</td></tr>"
			
			$('.mycarttable').append(toappend);
			
			$('.forfocus').change(function(){
				var value=$(this).val();
				var idnew=$(this).attr('id');
				var name=idnew.split('_')[1];
				var number=idnew.split('_')[0];
				$.ajax({
					url:"changeQuantity.do",
					type:"get",
					data:{"value":value,
						"id":name},
						success:function(cartproduct){							
							$('#total_'+number).html(cartproduct[number]['subtotal']);
						}
				});
				$.ajax({
					url:"myCartquantity.do",
					success:function(totalquantity){
						quantityfunction(totalquantity);
					}
				});
				$.ajax({
					url:"totalAmount.do",
					success:function(totalammount){
						$("#totalamount").text(totalammount);
					}
				});
			});			
			$('.forremove').click(function(){	
				var id=$(this).attr('id');
				
				$.ajax({
					url:"removefromcart.do",
					type:"get",
					data:{"remove":id},
					success:function(){
						$("#"+id).parent().parent().remove();
					}
				});
				$.ajax({
					url:"myCartquantity.do",
					success:function(totalquantity){
						quantityfunction(totalquantity);
					}
				});
				$.ajax({
					url:"totalAmount.do",
					success:function(totalammount){						
						$("#totalamount").html(" "+totalammount+" ");
					}
				});
				
				
				
			});			
		}
	});	
})