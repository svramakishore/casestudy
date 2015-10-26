package servlet;

import java.io.IOException;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.mysql.jdbc.Connection;
import com.mysql.jdbc.PreparedStatement;

/**
 * Servlet implementation class BookDesc
 */
//@WebServlet("/BookDesc")
public class BookDesc extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public BookDesc() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		try{
			Class.forName("com.mysql.jdbc.Driver");
			String key = request.getParameter("id");
			 Connection conn =  (Connection) DriverManager.getConnection("jdbc:mysql://localhost/dataweb","root","beehyv123"); 
			 String query = "select * from book where productkey=?"; 
			 PreparedStatement statement = (PreparedStatement) conn.prepareStatement(query);
			 statement.setString(1,key);
			 statement.execute();
			 ResultSet rs = statement.executeQuery();
			 HttpSession session = request.getSession();
			 while(rs.next()){
			 session.setAttribute("image",rs.getString("image"));
			 session.setAttribute("bookname", rs.getString("bookname"));
			 session.setAttribute("price", rs.getString("price"));
			 session.setAttribute("pages", rs.getString("pages"));
			 session.setAttribute("key", key);
			 response.sendRedirect("bookcart.jsp");
			 }
		}
		 catch(ClassNotFoundException | SQLException e)
	      {
	          System.out.println(e);
	          
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
