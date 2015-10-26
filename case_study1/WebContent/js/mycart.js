$(document).ready(function(){	
	$.ajax({
		url:"productprice.do",
		success:function(product){
			var toappend="";
			for(var i=0;i<product.length;i++){	
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
						$("#mycartvalue").html("<span class='badge'>"+totalquantity+"</span>");
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
						$("#mycartvalue").html("<span class='badge'>"+totalquantity+"</span>");
					}
				});
			});			
		}
	});	
})