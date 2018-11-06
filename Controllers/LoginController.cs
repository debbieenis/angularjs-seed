using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MvcApplication3.Controllers
{
    public class LoginController : Controller
    {
        //
        // GET: /Login/

        public ActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public string Login(User data)
        {
            //bool isPasswordCorrect = false;
            string un = data.Name;
            string Password = data.Password;
            using (UserEntities entity = new UserEntities())
            {
                var user = entity.Users.Where(u => u.Name == un).FirstOrDefault();
                if (user != null)
                {
                    if (Password == user.Password)
                    {
                        Session["LoginID"] = user.UserId;
                        Session["Username"] = user.Name + ' ' + user.FullName;
                        return user.UserId.ToString();
                    }
                    else
                    {
                        return "0";
                    }
                }
                else
                {
                    return "-1";
                }
            }
        }   


    }
}
