$(document).ready(function(){
	$.ajax({
		url:"isSignedIn.do",
		success:function(isLogged){
			if(isLogged.trim() === "yes"){
				console.log("show");
				$('#username').show();
				$('#signin').hide();
			}
			else{
				$('#username').hide();
				$('#logout').hide();
			}
		}
	});
	$.ajax({
		url:"myCartquantity.do",
		success:function(totalquantity){			
			$("#mycartvalue").html("<span class='badge'>"+totalquantity+"</span>");
		}
	});
	append_head='\
				<span><p class="text-left shipping" style="font-size:40px;">Shopping Bee</p>';
	$('#header').append(append_head);	
	append_foot='\
		<table style="width:100%"><tr><td>HELP</td><td>SHIPPING</td><td>EBOOKS</td><td>MISC</td></tr>\
		<tr><td>payments</td><td>contacts</td><td>ebook quick start quide</td><td>online shoping</td></tr>\
		<tr><td>saved cards</td><td>About us</td><td>ebooks FAQ</td><td>Affilate</td></tr>\
		<tr><td>shipping</td><td>Carrers</td><td>ebook App</td><td>Gift card</td></tr>\
		<tr><td>Cancellation and returns</td><td>Slash n</td><td>ebook Learning FAQ</td><td>Press</td></tr></table>\
		<div class="lasfoot" style="display:inline"><div style="padding-top:15px"><span><span>Policies:</span> Terms of use | Security | Privacy |Infringement</span></div>\
		<div style="float:right"><strong>Keep In Toch</strong><a target="_blank" href="www.facebook.com" style="background-image: url()"></a></div></div>';
	$('#footer').append(append_foot);	
});