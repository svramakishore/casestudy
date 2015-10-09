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
import javax.servlet.http.HttpSession;

import com.mysql.jdbc.PreparedStatement;

/**
 * Servlet implementation class Addtocart
 */
@WebServlet("/Addtocart")
public class Addtocart extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Addtocart() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		 try {
			 
		HttpSession session = request.getSession();
		String id= (String) session.getAttribute("key");
		System.out.println(id);
		String key=id.substring(0, id.length()-1);
		
		String isLogged = (String) session.getAttribute("islogged");
		
		 Class.forName("com.mysql.jdbc.Driver");
		
			Connection conn = DriverManager.getConnection("jdbc:mysql://localhost/dataweb","root","beehyv123");
			
			String username;
			if(isLogged=="yes"){
				username=(String) session.getAttribute("name");
			}
			else
				username="nouser";
			String query = ("select * from addtocart where productname=? and username=?");
			PreparedStatement statement = (PreparedStatement) conn.prepareStatement(query);
			statement.setString(1, id);
			statement.setString(2,username );
			ResultSet rs= statement.executeQuery();
			int i=1;
			boolean ispresent=false;
			
			while(rs.next()){
				
				ispresent=true;
				int quantity = rs.getInt("quantity");
				quantity=quantity+1;
				query = ("update addtocart set quantity = ? where productname=? and username=?");
				statement=(PreparedStatement) conn.prepareStatement(query);
				statement.setInt(1,quantity);
				statement.setString(2, id);
				statement.setString(3, username);
				int rs2=statement.executeUpdate();
				
			}
			
			if(!ispresent){
				
			CartTable.addtocarttable(id,username);
				
			}
			response.sendRedirect("mycart.jsp");
		 } catch (SQLException | ClassNotFoundException e) {
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
