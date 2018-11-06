app.service('UserService', function ($http) {
    //**********----Get All Record----***************  
    var urlGet = '';
    this.getAll = function (apiRoute) {
        urlGet = apiRoute;
        return $http.get(urlGet);
    }

    this.UserLogin = function (User) {
        //debugger;
        var response = $http({  
            method: "post",  
            url: "/Login/Login",  
            data: JSON.stringify(User),  
            dataType: "json"  
        });  
        return response;  
    }  
  
});  
