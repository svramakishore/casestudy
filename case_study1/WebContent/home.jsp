<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Home</title>
  <meta charset="UTF-8">
        <title>Home</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">
        <link rel="stylesheet" type="text/css" href="css/home.css">
        <link rel="stylesheet" type="text/css" href="css/common.css">
</head>
<body>
<%System.out.println(session.getAttribute("islogged"));%>

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
        
        <div class="container ">
             <div id="myCarousel" class="carousel slide" data-ride="carousel">
		        <!-- Carousel indicators -->
		        <ol class="carousel-indicators">
		            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
		            <li data-target="#myCarousel" data-slide-to="1"></li>
		            <li data-target="#myCarousel" data-slide-to="2"></li>
		            <li data-target="#myCarousel" data-slide-to="3"></li>
		        </ol>   
		        <!-- Wrapper for carousel items -->
		        <div class="carousel-inner">
		            
		                    <div class="item active">
		                      <img src="images/carousel1.jpg" alt="Chania" >
		                    </div>
		                    <div class="item ">
		                      <img src="images/caraousel3.jpg" alt="Chania" >
		                    </div>
		                    <div class="item">
		                      <img src="images/carousel3.jpg" alt="Flower" >
		                    </div>
		                    <div class="item">
		                      <img src="images/carousel4.jpg" alt="Flower" >
		                    </div>
		                
		        </div>
		        <!-- Carousel controls -->
		        <a class="carousel-control left" href="#myCarousel" data-slide="prev">
		            <span class="glyphicon glyphicon-chevron-left"></span>
		        </a>
		        <a class="carousel-control right" href="#myCarousel" data-slide="next">
		            <span class="glyphicon glyphicon-chevron-right"></span>
		        </a>
	 	</div>
	 	
	   <div class=container" style="margin-top:20px;">
		   <div class="row">
		   <div class="col-offset-2 col-xs-10" >
		   <img src="images/homelap1.jpg" alt="laptops" style="width:80%; height:250px"> 
		   </div>
		   </div>
	   	
	   
		   <div class="row">
			   <div class="col-xs-5" >
			   <img src="images/homebook1.jpg" alt="laptops" style="width:90%"> 
			   </div>
			   <div class="col-xs-5" >
			   <img src="images/homeshirt1.jpg" alt="laptops" style="width:70%"> 
			   <img src="images/homebot1.jpg" alt="laptops" style="width:70%"> 
			   </div>
		   </div>
	   	
	   
		   <div class="row">
			   <div class="col-offset-2 col-xs-10" >
			   <img src="images/homesport1.jpg" alt="laptops" style="width:80%; height:250px"> 
			   </div>
		   </div>
	   </div>
        
<!--  -->


        <div id="footer" style="color:black"></div>
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
        
       <script type="text/javascript" src="js/common.js"></script>
        <script type="text/javascript" src="js/home.js"></script>

</body>
</html>