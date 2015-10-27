<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC >
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Sport Description</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
       
        
        <link rel="stylesheet" type="text/css" href="css/common.css">
</head>
<body>
<div class="container ">
	<div class="head">
        <div id="header" class=" text-primary ">
         
        <div class="rightitems" >
          <span ><p style="color:rgb(28, 27, 59);padding:15px 0px 0px 0px"> Welcome <span id="username"><%= session.getAttribute("name")%></p></span>
          <span><a href='mycart.jsp' id="mycart" ><span class="glyphicon glyphicon-shopping-cart" >Mycart</span><span id="mycartvalue"></span></a></span>		<span><a href='logout.do' id="logout"><span class="glyphicon glyphicon-log-out">Logout</span></a></span>
       <span><a href='signup.do'  id="signin"><span class="glyphicon glyphicon-user">SignUp/Login</span></a></span>
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
						 <li ><a href="books.jsp" style="padding-bottom:20px;" class="nav-li">Books</a></li>
						 <li ><a href="sports.jsp" style="padding-bottom:20px;" class="nav-li">Sports</a></li>
						 <li class="active"><a href="clothing.jsp" style="padding-bottom:20px;" class="nav-li">Clothing</a></li>
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
	                <h2><%=  session.getAttribute("sportname") %></h2>
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
		                
		               <form action="addtocart.do" method="GET">
	               <input class="btn" type="submit" name="addtocart" style="margin-bottom:7px;background:#f78828;padding:6px 35px" value="ADD TO CART"><br />
	                
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
        <hr>
         <div class="container">
        <div id="footer" ></div></div>
	 <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        
      
      <script type="text/javascript" src="js/common.js"></script>
</body>
</html>