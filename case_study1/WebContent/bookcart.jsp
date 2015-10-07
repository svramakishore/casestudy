<%@ page import="java.sql.*"%>  
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Book Description</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
       
        
        <link rel="stylesheet" type="text/css" href="css/common.css">
</head>
<body>


<div class="container ">
	<div class="head">
        <div id="header" class=" text-primary ">
         <strong class="text-left shipping" style="font-size:40px;">Shopping Bee</strong>
        <div class="rightitems" >
          <span ><p style="color:rgb(28, 27, 59);padding:15px 0px 0px 0px"> Welcome <%= session.getAttribute("name")%></p></span>
          <span><a href='mycart.jsp' style="font-size:14px;color:#09353A"><span class="glyphicon glyphicon-shopping-cart" style="padding-top:15px">Mycart</span></a></span>
		<span><a href='LogoutServlet' style="padding-top:15px;font-size:14px;color:#E11F2A"><span class="glyphicon glyphicon-log-out">Logout</span></a></span>
       
       </div>
       </div>
       </div>
     </div>
     <div class="cart"></div>
         <nav class="navbar navbar-inverse">
         <div class="container">
            <div class="container-fluid ">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar" style="background-color:#337ab7"></span>
                        <span class="icon-bar" style="background-color:#337ab7"></span>
                        <span class="icon-bar" style="background-color:#337ab7"></span> 
                    </button>
                    <a class="navbar-brand active " href="home.jsp" style="padding-bottom:20px;color:white">Home</a>
                </div>
                <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav nav-pills nav-justified">
						 
						 <li><a href="electronics.jsp" style="padding-bottom:20px;" class="nav-li">Electronics</a></li>
						 <li class="active"><a href="books.jsp" style="padding-bottom:20px;" class="nav-li">Books</a></li>
						 <li ><a href="sports.jsp" style="padding-bottom:20px;" class="nav-li">Sports</a></li>
						 <li><a href="clothing.jsp" style="padding-bottom:20px;" class="nav-li">Clothing</a></li>
					</ul>
                   
                </div>
            </div>
            </div>
        </nav>

<div class="container button">
            <div class="text-danger text-center">
                <h2>More Description</h2>
            </div> 
            <div class="row">
                <div class="col-xs-12 col-sm-6  mybody-image">
                
                <img src="<%= session.getAttribute("image") %> " style="width: 350px; height: 420px;" class="img-thumbnail">
                </div>
                
                <div class="col-xs-12 col-md-6 mybody-matter" >
	                <h2><%=  session.getAttribute("bookname") %></h2>
	                <ul style="list-style-type:none"><li style="display:inline"><span class="glyphicon glyphicon-pencil">Write a review</span></li>
	                <li style="display:inline;padding-left:20px;"><span class="glyphicon glyphicon-heart">Add to WishList</span></li></ul>
	                <div class="for_availability" >
		                <div class="form-group" >
					      <label class=" col-xs-4" for="name" style="padding-left:10px;margin-top:5px;">
					      <span class="glyphicon glyphicon-map-marker"></span>Check Availability at</label>
					      <div class="col-xs-4">
					        <input type="text" maxlength="6" class="form-control" id="name" placeholder="Enter Pincode" name="pincode">
					      	</div>
					      	<button type="submit" class=" col-xs-2" style="background:#565656;color:white;border-color:#565656;margin-top:5px;">check</button>
					     
					    </div>
	                </div>
	                
	                <div class="row">
	                <div class="col-xs-6">
		                <h4>Rs:<%=  session.getAttribute("price")  %></h4>
		                <h4>Pages:<%= session.getAttribute("pages")  %></h4>
		               <form action="Addtocart" method="GET">
	               <input class="btn" type="submit" name="addtocart" style="margin-bottom:7px;background:#f78828;padding:6px 35px" value="ADD TO CART"><br />
	                <% 
	                session.setAttribute("id",session.getAttribute("key"));%>
	                <button class="btn" type="button" name="buy" style="background:#5b992b;padding:6px 50px"">BUY NOW</button>
            		</form>
	                </div>
	                <div class="col-xs-6">
	        		<b>Sold By:</b>
	        		<p ><a href="www.google.com">google</a><p>
	        		<div style="display:inline">
	        		<p>Estimated delivery date</p>
	        		<p>Delivered By</p>
	        		</div>
	        		
	        		</div>
	        		</div>
                
                </div>
               
            </div>
        <div class="review" style="margin-top:30px;">
	        <h2>Top Reviews</h2>
	        <div class="row">
		        <div class="col-xs-2">
			        <p>Kishore</p>
			        <p>Aug 27 2015</p>
		        
		        </div>
		        <div class="col-xs-10">
		        	<h4>Value for money</h4>
		        	<p>Its value for money product. product is satisfactory and its waterproof and odorless. Easy to clean .
		             It should be available in beige color</p>
		        </div>
	        </div>
        </div>
            
        </div>
        <div class="container">
	        <div id="footer2">
	        <table style="width:100%"><tr><td>HELP</td><td>SHIPPING</td><td>EBOOKS</td><td>MISC</td></tr>
		<tr><td>payments</td><td>contacts</td><td>ebook quick start quide</td><td>online shoping</td></tr>
		<tr><td>saved cards</td><td>About us</td><td>ebooks FAQ</td><td>Affilate</td></tr>
		<tr><td>shipping</td><td>Carrers</td><td>ebook App</td><td>Gift card</td></tr>
		<tr><td>Cancellation and returns</td><td>Slash n</td><td>ebook Learning FAQ</td><td>Press</td></tr></table>
		<div class="lasfoot" style="display:inline"><div style="padding-top:15px"><span><span>Policies:</span> Terms of use | Security | Privacy |Infringement</span></div>
		<div style="float:right"><strong>Keep In Toch</strong><a target="_blank" href="www.facebook.com" style="background-image: url()"></a></div></div>
	        </div>
        </div>
</body>
</html>