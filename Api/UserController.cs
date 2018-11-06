using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MvcApplication3.Api
{
    public class UserController : ApiController
    {
        UserEntities _ctx = null; // SchoolMangementEntities is data model name  
         
        public UserController()  
        {
            _ctx = new UserEntities();  
        }  
        public List<User> GetUsers()  
        {
            List<User> users = null;  
            try  
            {
                users = _ctx.Users.ToList();  
            }  
            catch   
            {
                users = null;  
            }
            return users;  
        }  
    }
}
