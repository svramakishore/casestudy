<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
 
        <title>Electronics</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="css/filter.css">
        <link rel="stylesheet" type="text/css" href="css/common.css">
       
</head>
<body>
	 <div class="container ">
	<div class="head">
        <div id="header" class=" text-primary ">
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
						 
						 <li class="active"><a href="electronics.jsp" style="padding-bottom:20px;" class="nav-li">Electronics</a></li>
						 <li ><a href="books.jsp" style="padding-bottom:20px;" class="nav-li">Books</a></li>
						 <li ><a href="sports.jsp" style="padding-bottom:20px;" class="nav-li">Sports</a></li>
						 <li><a href="clothing.jsp" style="padding-bottom:20px;" class="nav-li">Clothing</a></li>
					</ul>
                   
                </div>
            </div>
            </div>
        </nav>
        <nav class="navbar">
            <div class="shopByBar">
                <div class="container">       
                    <div class="navbar-header">
                            <div class="navbar-brand">
                                <span class="shopBy">Electronics</span>
                            </div>
                    </div>
                </div> 
            </div>
       </nav>
       <div class="pos-absolute container-fluid filter-style" id="more-filters-list2" >
            <div  id="more-filters-container">  
                <div class="row basic-filters">
                    <div class="col-sm-12" style="padding:5px;">
                        <table id = "filters-table-1" style="width:100%; table-layout:fixed;">
                        </table>
                    </div>
                    
                </div>
            </div>
        </div>

       <div class="row" style="margin:0px">
            <div class="col-xs-2 " >
                 <div id="filter-area">
                    
                </div>
            </div>
            <div class="col-xs-10 ">
                <div class="catlogitems ">
                </div>
            </div>
        </div>
        <hr>
        <div class="container">
        <div id="footer" ></div></div>

        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="js/common.js"></script>
        <script type="text/javascript" src="js/electronics.js"></script>
        
        
</body>
</html>