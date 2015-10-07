$(document).ready(function(){
	
	$('.forremove').click(function(){
		var id=$(this).attr('id');
		
		$.ajax({
			url:"Removefromcart",
			type:"get",
			data:{"remove":id},
			success:function(){
				location.reload();
			}
		});
	});
	$('.forfocus').focusout(function(){
		
		var value=$(this).val();
		console.log(value);
		var id=$(this).attr('id');
		$.ajax({
			url:"ChangeQuantity",
			type:"get",
			data:{"value":value,
				"id":id},
				success:function(){
					location.reload();
				}
			 
		})
	})
})