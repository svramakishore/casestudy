package servlet;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;

import java.sql.SQLException;


import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mysql.jdbc.PreparedStatement;

/**
 * Servlet implementation class signup
 */
@WebServlet("/signup")
public class signup extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public signup() {
        super();
        // TODO Auto-generated constructor stub
    }

	
	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String name=request.getParameter("name");
		String pass=request.getParameter("password");
		String mailid=request.getParameter("email");
		String mobile=request.getParameter("mobile");
		String dob=request.getParameter("bday");
		String gender=request.getParameter("optradio");
		
		
		try{
			if(!VerifyName.check(name)){
			Class.forName("com.mysql.jdbc.Driver");
			
			Connection conn = DriverManager.getConnection("jdbc:mysql://localhost/dataweb","root","beehyv123");
			String query =" insert into tableweb(username,password,MobileNo,Email,Date,Gender) values(?,?,?,?,?,?)";
			PreparedStatement statement = (PreparedStatement) conn.prepareStatement(query);
			statement.setString(1, name);
			statement.setString(2, pass);
			statement.setString(3, mobile);
			statement.setString(4, mailid);
			statement.setString(5,dob);
			statement.setString(6, gender);
			statement.execute();
			conn.close();
//			ResultSet rs = statement .executeQuery(query);
//			while(rs.next()){
//				System.out.println(rs.getString("username"));
			
//			}
			response.sendRedirect("login.jsp");
			}
			 else
		        {
		        	request.setAttribute("errormessage", "User name already exist");
		           request.getRequestDispatcher("login.jsp").forward(request,response);
		           
		           
		        }
		}
		catch(SQLException | ClassNotFoundException e){
			System.out.println(e);
		}
		 
		
		 
	}

}
