package servlet;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mysql.jdbc.PreparedStatement;

/**
 * Servlet implementation class ChangeQuantity
 */
//@WebServlet("/ChangeQuantity")
public class ChangeQuantity extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ChangeQuantity() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		try{
		String value2 = request.getParameter("value");
		System.out.println(value2);
		int value  = Integer.parseInt(value2);
		String id= request.getParameter("id");
		 Class.forName("com.mysql.jdbc.Driver");
		 Connection conn = DriverManager.getConnection("jdbc:mysql://localhost/dataweb","root","beehyv123");
			String query = ("update addtocart set quantity = ? where productname=?");
			PreparedStatement statement = (PreparedStatement) conn.prepareStatement(query);
			statement.setInt(1,value);
			statement.setString(2, id);
			int rs= statement.executeUpdate();
		}
		 catch (SQLException | ClassNotFoundException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
