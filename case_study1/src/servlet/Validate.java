package servlet;
import java.sql.*;

public class Validate
 {
     public static boolean checkUser(String name,String pass) 
     {
      boolean result =true;
      try{
    	  
	 //loading drivers for mysql
         Class.forName("com.mysql.jdbc.Driver");
         
 	 //creating connection with the database 
         Connection conn = DriverManager.getConnection("jdbc:mysql://localhost/dataweb","root","beehyv123");
			String query = "select * from tableweb where username=?";
			PreparedStatement statement = conn.prepareStatement(query);
			statement.setString(1, name);
			statement.execute();
			ResultSet rs = statement.executeQuery();
			while(rs.next()){
				
			if(name.equalsIgnoreCase(rs.getString("username"))&& pass.equals(rs.getString("password"))){
				
				result  = true;
			break;
			}
			else
				result  = false;
		}
      }
        
      catch(ClassNotFoundException | SQLException e)
      {
          System.out.println(e);
          System.out.println("hello");
      }
         return result ;                 
  }   
}