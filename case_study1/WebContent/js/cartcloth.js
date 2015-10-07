var cloth_list={
	"cloth1":{
		"type":"male", 
		"price":"1575",
		"image":"images/maleshirt.jpg",
		"brand":"peter england",
		"cloth":"shirt",

	},
	"cloth2":{
		"type":"male", 
		"price":"1325",
		"image":"images/malepant.jpg",
		"brand":"peter england",
		"cloth":"pant",

	},
	"cloth3":{
		"type":"female", 
		"price":"1423",
		"image":"images/femaletop.jpg",
		"brand":"peter england",
		"cloth":"top",

	},
	"cloth4":{
		"type":"female", 
		"price":"1875",
		"image":"images/leggings.jpg",
		"brand":"peter england",
		"cloth":"leggings",

	},
	"cloth5":{
		"type":"kids", 
		"price":"1186",
		"image":"images/kidsshirt.jpg",
		"brand":"peter england",
		"cloth":"shirt",

	},
	"cloth6":{
		"type":"kids", 
		"price":"1200",
		"image":"images/kidspant.jpg",
		"brand":"peter england",
		"cloth":"pant",

	},

}
$(document).ready(function(){
	function getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
        });
        return vars;
        }
        var idnew = getUrlVars()["id"];

         $('.mybody-image').append('<img src="'+cloth_list[idnew]["image"]+'" style="width: 180px; height: 320px;">');
        var append_matter='\
        <p>Type ='+cloth_list[idnew]["type"]+'</p>\
        <p>Brand = '+cloth_list[idnew]["brand"]+'</p>\
        <p>Price ='+cloth_list[idnew]["price"]+'</p>\
        ';
        $('.mybody-matter').append(append_matter);
        append_btn ='\
     <div class="text-center addto" ><a href="addtocartcloth.html?id='+idnew+'" class="btn btn-primary" style="margin-bottom: 45px; margin-top: 60px;">Add to Cart</a></div>\
        ';
        $('.button').append(append_btn);
});