package servlet;
import java.io.*;
import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;



@WebServlet("/Login")
public class Login extends HttpServlet {
 
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
    	
        response.setContentType("text/html;charset=UTF-8");
        
        
        String name = request.getParameter("name");
        String pass = request.getParameter("pass");
        
        if(Validate.checkUser(name, pass))
        {
        	HttpSession session=request.getSession();  
            session.setAttribute("name",name); 
           
        	request.getRequestDispatcher("home.jsp").forward(request,response);
//           	response.setContentType("text/html");
//           	out.println("<div ><p>Welcome "+name+"</p><a href='LogoutServlet' class='text-right'>Logout</a></div>");
           	
        }
        else
        {
        	request.setAttribute("errormessage", "Invalid Password or username");
           request.getRequestDispatcher("login.jsp").forward(request, response);;
           
           
        }
    }  
}