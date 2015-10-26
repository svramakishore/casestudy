<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>

<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html >
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Login </title>
<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">

<link rel="stylesheet" type="text/css" href="css/login.css">
</head>
<body>
<%System.out.println(session.getAttribute("islogged"));if(session.getAttribute("islogged") != null) response.sendRedirect("home.jsp"); %>
<div class="containers">
	<div class="login">
		  <h2 >Login</h2>
		  <form:form method="POST" action="/case_study1/checkuser.do">
		    <div class="form-group">
		      <form:label path="name">Name</form:label>
		      <form:input path="name" placeholder="Enter Name" name="name" class="form-control" required="required" style="width:80% !important;"/>
		      
		    </div>
		    <div class="form-group">
		     <form:label path="password" >Password</form:label>
		     <form:input path="password" type="password" class="form-control" placeholder="Enter password" style="width:80% !important;"/>
		      
		    </div>
		    
		  
		    <div><p style="color:red">${errormessage}</p></div>
		    <button type="submit" class="btn btn-primary">Submit</button>
		     
		<div class="btn btn-primary" style="margin-left:50%;" id="newuser" >  New User</div>
		  
		  </form:form>
		 
	  </div>
</div>
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        <script src="js/login.js"></script>
</body>
</html>