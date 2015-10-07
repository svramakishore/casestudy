var book_list={
        book1:{
            "book_name":"Immortals of Meluha",
            "pages":"245",
            "price":"150",
            "image":"../images/book.jpg"
        },
        book2:{
            "book_name":"Secret of Nagas",
            "pages":"345",
            "price":"190",
            "image":"../images/book2.jpg"
        },
        book3:{
            "book_name":"Oath of Vayuputras",
            "pages":"475",
            "price":"250",
            "image":"../images/book3.jpeg"
        },
        book4:{
            "book_name":"Scion of Ikshavaku",
            "pages":"345",
            "price":"230",
            "image":"../images/book6.jpg"
        },
        book5:{
            "book_name":"Ramayanam",
            "pages":"205",
            "price":"350",
            "image":"../images/book5.jpg"
        },
        book6:{
            "book_name":"Mahabarath",
            "pages":"427",
            "price":"390",
            "image":"../images/book4.jpeg"
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
        $('.mybody-image').append('<img src="'+book_list[idnew]["image"]+'" style="width: 205px; height: 275px;">');
        var append_matter='\
        <p>Name of the book='+book_list[idnew]["book_name"]+'</p>\
        <p>Number of Pages='+book_list[idnew]["pages"]+'</p>\
        <p>Price of Book='+book_list[idnew]["price"]+'</p>\
        ';
        $('.mybody-matter').append(append_matter);
        append_btn ='\
     <div class="text-center addto" ><a href="addtocartbook.html?id='+idnew+'" class="btn btn-primary" style="margin-bottom: 45px; margin-top: 60px;">Add to Cart</a></div>\
        ';
        $('.button').append(append_btn);
        $('.continue').click(function(){
            window.location.href="../html/books.html";
        });
});
