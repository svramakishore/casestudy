package servlet;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.http.HttpSession;

import com.mysql.jdbc.PreparedStatement;
import com.mysql.jdbc.Statement;

public class CartTable {
 public static void addtocarttable(String key,String username){
	 try{
		 
	 
	 String key2 = key.substring(0,key.length()-1);
	 System.out.println(key2);
	 Class.forName("com.mysql.jdbc.Driver");
	 Connection conn = DriverManager.getConnection("jdbc:mysql://localhost/dataweb","root","beehyv123");
		String query = ("select * from "+key2+" where productkey='"+key+"'");
		
		Statement statement =  (Statement) conn.createStatement();
		
		ResultSet rs= statement.executeQuery(query);
		String image = null;
		String price = null;
		String brand=null;
		while(rs.next()){
			image=rs.getString("image");			
			price=rs.getString("price");
		}
		
		
		String query2 ="insert into addtocart(productname,productimage,productprice,quantity,username,category_id) values(?,?,?,?,?,?)" ;
		PreparedStatement statement2 = (PreparedStatement) conn.prepareStatement(query2);
//		ResultSet rs2 =  statement2.executeQuery();		 
		 statement2.setString(1, key);
		 statement2.setString(2, image);		 
		 statement2.setString(3, price);		 
		 statement2.setInt(4, 1);
		 statement2.setString(5, username);
		 statement2.setInt(6, 2);		 
		 statement2.execute();	
	 }
	 catch(ClassNotFoundException | SQLException e){
		 System.out.println(e);
	 }
 }
//	 public static void addtocartelectronics(String key){
//		 try{
//			 String key2 = key.substring(0,key.length()-1);
//			 System.out.println(key2);
//			 Class.forName("com.mysql.jdbc.Driver");
//			 Connection conn = DriverManager.getConnection("jdbc:mysql://localhost/dataweb","root","beehyv123");
//				String query = ("select * from "+key2+" where productkey='"+key+"'");
//				Statement statement =  (Statement) conn.createStatement();
//				ResultSet rs= statement.executeQuery(query);
//				String image = null;
//				String price = null;
//				String brand=null;
//				while(rs.next()){
//					image=rs.getString("image");
//					
//					
//					
//						brand=rs.getString("brand");
//				}
//				String query2 ="insert into addtocart(productname,productimage,productprice,quantity,category_id) values(?,?,?,?,?)" ;
//				PreparedStatement statement2 = (PreparedStatement) conn.prepareStatement(query2);
////				ResultSet rs2 =  statement2.executeQuery();
//			 
//				 
//				 statement2.setString(1, key);
//				 statement2.setString(2, image);
//				 
//				 
//				 
//					 statement2.setString(3, brand);
//				 statement2.setInt(4, 1);
//				 statement2.setInt(5, 2);
//				 
//				 statement2.execute();			
//			 }
//			 catch(ClassNotFoundException | SQLException e){
//				 System.out.println(e);
//			 }
//	 }
 }

