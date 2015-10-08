<%@ page import="java.sql.*" %>
<% Class.forName("com.mysql.jdbc.Driver"); %>
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

<% Connection conn =  DriverManager.getConnection("jdbc:mysql://localhost/dataweb","root","beehyv123"); %>

<%String isLogged = (String) session.getAttribute("islogged");
String username;
if(isLogged=="yes"){
	username=(String) session.getAttribute("name");
}
else
	username="nouser";

String query = "select * from addtocart where username='"+username+"'"; 
 Statement statement = (Statement) conn.createStatement();
 
 
 ResultSet rs = statement.executeQuery(query);
 
 %>
 <div class="container ">
<div class="head">
        <div id="header" class=" text-primary ">
        
         <div class="rightitems" >
          <span ><p style="color:rgb(28, 27, 59);padding:15px 0px 0px 0px"> Welcome <span id="username"><%= session.getAttribute("name")%></p></span>
          <span><a href='mycart.jsp' id="mycart"><span class="glyphicon glyphicon-shopping-cart">Mycart</span></a></span>
		<span><a href='LogoutServlet' id="logout"><span class="glyphicon glyphicon-log-out">Logout</span></a></span>
       <span><a href='signup.jsp'  id="signin"><span class="glyphicon glyphicon-user">SignUp/Login</span></a></span>
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
        <div class="container">
        	<table style="width:100%">
        		<tr >
        			<th>Image</th>
        			<th>Product name</th>
        			<th>Price</th>
        			<th>Quantity</th>
        			<th>Remove</th>
        			
        		</tr>
        		<% while(rs.next()){%>
        		<tr style="margin-bottom:10px">
        			<td><img src="<%= rs.getString("productimage")%>" style="width:150px;height:150px"></td>
        			<td><%= rs.getString("productname") %></td>
        			<td><%= rs.getString("productprice") %> </td>
        			<td style="width:10%;"><input type="number" class="forfocus" id="<%= rs.getString("productname") %>" style="width:50%;" name="quantity" value="<%= rs.getInt("quantity") %>"></td>
        			<td >
        			
        			<span class="glyphicon glyphicon-trash forremove"  id="<%= rs.getString("productname") %>">
        			</span></td>
        			
        		</tr>
        		<% } %>
        		
        	</table>
        
        </div>
         <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        <script src="js/mycart.js"></script>
        <script type="text/javascript" src="js/common.js"></script>
</body>
</html>