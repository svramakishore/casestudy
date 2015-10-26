package servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONObject;

import com.mysql.jdbc.ResultSetMetaData;

/**
 * Servlet implementation class cart
 */
//@WebServlet("/cloth")
public class cloth extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public cloth() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		try{
//			String type = request.getParameter("type").toString();
//			System.out.println(type);
		Class.forName("com.mysql.jdbc.Driver");
		 Connection conn = DriverManager.getConnection("jdbc:mysql://localhost/dataweb","root","beehyv123");
			String query = "select * from cloth";
			PreparedStatement statement = conn.prepareStatement(query);
		statement.execute();
		ResultSet rs= statement.executeQuery();
		ResultSetMetaData rsmd = (ResultSetMetaData) rs.getMetaData();
		JSONArray json = new JSONArray();
		List<String> keys=new ArrayList<String>() ;
		
		while(rs.next()){
			int numColumns = rsmd.getColumnCount();
			JSONObject obj =new JSONObject();
			keys.add(rs.getString("productkey"));
			for (int i=1; i<numColumns; i++) {
		        String column_name = rsmd.getColumnName(i);
		        if((rsmd.getColumnType(i)==java.sql.Types.VARCHAR)&&(column_name != "productkey")){
		        obj.put(column_name, rs.getString(column_name));
		        }
		        else{
		        	continue;
		        }
			}
			json.put(obj);
		}
		JSONObject cloth_list = new JSONObject();
		for(int i=0;i<json.length();i++){
			cloth_list.put(keys.get(i), json.getJSONObject(i));
		}
		PrintWriter out =response.getWriter();
		out.println(cloth_list);
		
		}
		catch(ClassNotFoundException | SQLException e){
			System.out.println(e);
		}
	}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	


