
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html >
<html>
<head>
 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
 <link rel="stylesheet" type="text/css" href="css/common.css">
 <link rel="stylesheet" type="text/css" href="css/mycart.css">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Mycart</title>
</head>
<body>


 <div class="container ">
<div class="head">
        <div id="header" class=" text-primary ">
        
         <div class="rightitems" >
          <span ><p style="color:rgb(28, 27, 59);padding:15px 0px 0px 0px"> Welcome <span id="username"><%= session.getAttribute("name")%></p></span>
          <span><a href='mycart.jsp' id="mycart" ><span class="glyphicon glyphicon-shopping-cart" >Mycart</span><span id="mycartvalue"></span></a></span>
		<span><a href='logout.do' id="logout"><span class="glyphicon glyphicon-log-out">Logout</span></a></span>
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
							 <li><a href="clothing.jsp" style="padding-bottom:20px;" class="nav-li">Clothing</a></li>
						</ul>                   
	                </div>
	            </div>
	          </div>
        </nav>
        <div class="container carttable">
        	<table style="width:100%" class="mycarttable">
        		<tr >
        			<th>Image</th>
        			<th>Price</th>
        			<th>Quantity</th>
        			<th>Sub Total</th>
        			<th>Remove</th>
          		</tr>        		
        	</table>       
        </div>
         <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        <script src="js/mycart.js"></script>
        <script type="text/javascript" src="js/common.js"></script>
</body>
</html>