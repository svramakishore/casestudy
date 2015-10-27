<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html >
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Sign Up</title>

<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="css/signup.css">
</head>
<body>
<div class="container" style="padding-top:50px;">
	<div class="login">
  <p>Please enter your details here </p> 
	  <form:form class="form-horizontal" role="form" method="post" action="signupadduser.do" style="width: 120%;">
	  <div class="form-group">
	      <form:label class="control-label col-sm-2" path="name" for="name">Name:</form:label>
	      <div class="col-sm-10">
	        <form:input type="text" class="form-control" id="name" path="name" placeholder="Enter name" name="name" required="required"/>
	      	<p id="username">User Name already exist</p>
	      </div>
	    </div>
	    <div class="form-group">
	      <form:label class="control-label col-sm-2" path="password" for="pwd">Password:</form:label>
	      <div class="col-sm-10">          
	        <form:input type="password" class="form-control" id="pwd" path="password" name="password" placeholder="Enter password" required="required" />
	      </div>
	    </div>
	    <div class="form-group">
	      <label class="control-label col-sm-2"  for="pwd">Confirm Password:</label>
	      <div class="col-sm-10">          
	        <input type="password" class="form-control" id="cnfpwd"  name="password" placeholder="Confirm password" required >
	        <p id="cnfpass">Password Doesn't Match</p>
	      </div>
	    </div>
	    <div class="form-group">
	      <form:label class="control-label col-sm-2" path="mailId" for="email">Email:</form:label>
	      <div class="col-sm-10">
	        <form:input type="email" class="form-control" path="mailId" id="email" placeholder="Enter email" name="email" required="required" />
	      </div>
	    </div>
	    <div class="form-group">
	      <form:label class="control-label col-sm-2" path="mobileNo" for="email">Mobile:</form:label>
	      <div class="col-sm-10">
	        <form:input type="number" class="form-control" id="phone" path="mobileNo"  placeholder="Enter Mobile No:" name="mobile" required="required"/>
	     	<p id="mobileno1">Mobile number sholud be 10 digits</p>
	     	<p id="mobileno2">Change First Digit</p>
	      </div>
	    </div>	    
	     <div class="form-group">
	     	<form:label class="control-label col-sm-2" path="gender" for="gender">Gender:</form:label>
	     	<div class="col-sm-10">
	    		<label class="radio-inline">
      				<form:radiobutton name="optradio" path="gender"   value="male"/>Male
    			</label>
   				 <label class="radio-inline">
      				<form:radiobutton name="optradio" path="gender"   value="female"/>Female
    			 </label>			    
    		</div>
    	</div>
	    <div class="form-group">
	      <form:label class="control-label col-sm-2" path="date" for="date">DOB:</form:label>
	      <div class="col-sm-10">
	       <form:input type="date" name="bday" path="date"/>
	      </div>
	    </div>
	    <div class="form-group">        
	      <div class="col-sm-offset-2 col-sm-10">
	        <button type="submit" class="btn btn-primary">Submit</button>
	        <div  class="btn btn-primary" id="login">Login</div>
	      </div>
	    </div>
	</form:form>
	</div>
</div>

</form>
 <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        <script src="js/signup.js"></script>
</body>
</html>