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
 * Servlet implementation class ElectonicDesc
 */
@WebServlet("/ElectonicDesc")
public class ElectonicDesc extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ElectonicDesc() {
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
			 String query = "select * from electronics where productkey=?"; 
			 PreparedStatement statement = (PreparedStatement) conn.prepareStatement(query);
			 statement.setString(1,key);
			 statement.execute();
			 ResultSet rs = statement.executeQuery();
			 HttpSession session = request.getSession();
			 while(rs.next()){
			 session.setAttribute("image",rs.getString("image"));
			 session.setAttribute("elecname", rs.getString("displaybleName"));
			 session.setAttribute("weight", rs.getString("weight"));
			 session.setAttribute("brand", rs.getString("brand"));
			 session.setAttribute("key", key);
			 response.sendRedirect("electronicdesc.jsp");
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
