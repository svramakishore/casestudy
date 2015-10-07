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
<div class="containers">
	<div class="login">
		  <h2 >Login</h2>
		  <form role="form" action="Login" method="post">
		    <div class="form-group">
		      <label >User Name:</label>
		      <input type="text" class="form-control" name="name" placeholder="Enter Name" style="width:80% !important;">
		    </div>
		    <div class="form-group">
		      <label for="pwd" >Password:</label>
		      <input type="password" class="form-control" name="pass" placeholder="Enter password" style="width:80% !important;">
		    </div>
		    
		    <div class="checkbox" >
		      <label><input type="checkbox"> Remember me</label>
		    </div>
		    <div><p style="color:red">${errormessage}</p></div>
		    <button type="submit" class="btn btn-primary">Submit</button>
		     
		<button class="btn btn-primary" style="margin-left:50%;" > <a href="signup.jsp" style="color:white;"> New User</a></button>
		  
		  </form>
		 
	  </div>
</div>

</body>
</html>