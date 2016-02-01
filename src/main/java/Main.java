import java.sql.*;
import java.util.HashMap;
import java.util.ArrayList;
import java.util.Map;

import java.net.URI;
import java.net.URISyntaxException;

import static spark.Spark.*;
import spark.template.freemarker.FreeMarkerEngine;
import spark.ModelAndView;
import static spark.Spark.get;

import com.heroku.sdk.jdbc.DatabaseUrl;

public class Main {

  public static void main(String[] args) {
    
    port(Integer.valueOf(System.getenv("PORT")));
    staticFileLocation("/public");
    
    post("/", (request, response) -> {
      response.redirect("/login.html");   
    });

    post("/login", (request, response) -> {
      if (request.queryParams("email") == null)
      {
        response.status(401);
        return "Email nao informado!";  
      }

      if (request.queryParams("password") == null)
      {
        response.status(401);
        return "Password nao informado!";  
      }

      String email = request.queryParams("email");
      String password = request.queryParams("password");
      if (email.equals("admin@tecvidya.com.br") && password.equals("admin")) {
          response.status(200);
          return "Hello: " + request.queryParams("email");
      }
      else
      {
        response.status(401);
        return "Failed login!";
      }
    });
  }

}
