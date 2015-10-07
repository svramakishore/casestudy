package servlet;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class VerifyName {
public static boolean check(String name){
	boolean result=true;
	try{
		 Class.forName("com.mysql.jdbc.Driver");
		 Connection conn = DriverManager.getConnection("jdbc:mysql://localhost/dataweb","root","beehyv123");
			String query = "select * from tableweb where userid=?";
			PreparedStatement statement = conn.prepareStatement(query);
			statement.setString(1, name);
			ResultSet rs = statement.executeQuery();
			while(rs.next()){
				
			if(name.equalsIgnoreCase(rs.getString("username"))){
				result  = true;
			break;
			}
			else
				result  = false;
		}
	}
	catch(SQLException|ClassNotFoundException e){
		System.out.println(e);
	}
	return result;
	}
}
