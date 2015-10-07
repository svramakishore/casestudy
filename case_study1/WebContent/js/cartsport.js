var sport_list={
    sport1:{
        "sportname":"cricket",
        
        "price":"3050",
        "image":"../images/sport1.jpg"
    },
    sport2:{
        "sportname":"football",
        
        "price":"2500",
        "image":"../images/sport2.jpg"
    },
    sport3:{
        "sportname":"volleyball",
        
        "price":"1500",
        "image":"../images/sport3.jpg"
    },
    sport4:{
        "sportname":"batminton",
        
        "price":"3500",
        "image":"../images/sport4.jpg"
    },
    sport5:{
        "sportname":"tennis",
        
        "price":"2700",
        "image":"../images/sport5.jpg"
    },
    sport6:{
        "sportname":"tabletenis",
        
        "price":"1900",
        "image":"../images/sport6.jpg"
    }
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

         $('.mybody-image').append('<img src="'+sport_list[idnew]["image"]+'" style="width: 205px; height: 275px;">');
        var append_matter='\
        <p>Name of the sport='+sport_list[idnew]["sportname"]+'</p>\
        \
        <p>Price ='+sport_list[idnew]["price"]+'</p>\
        ';
        $('.mybody-matter').append(append_matter);
        append_btn ='\
     <div class="text-center addto" ><a href="addtocartsports.html?id='+idnew+'" class="btn btn-primary" style="margin-bottom: 45px; margin-top: 60px;">Add to Cart</a></div>\
        ';
        $('.button').append(append_btn);
});