package Controller;

import com.example.fitbot.HelloServlet;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class Demo extends HelloServlet {
    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
//        super.doGet(request, response);
        PrintWriter out = response.getWriter();
        out.println("<h1>Hello Yohan</h1>");
    }
}
