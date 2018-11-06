app.controller('UserCtrl', ['$scope', 'UserService',
    // we inject StudentService  inject becuse we call getAll method for get all student  
function ($scope, UserService) {
    // this is base url   
    var baseUrl = '/api/User/';
    // get all student from databse  
    $scope.getUsers = function () {
        var apiRoute = baseUrl + 'GetUsers/';
        var _user = UserService.getAll(apiRoute);
        _user.then(function (response) {
            $scope.users = response.data;
        },
        function (error) {
            console.log("Error: " + error);
        });

    }
    $scope.getUsers();


    $scope.LoginCheck = function () {
     
        var User = {
            Name: $scope.name,
            Password: $scope.password
        };
        $("#divLoading").show();
        var getData = UserService.UserLogin(User);
        console.log(getData);
        getData.then(function (msg) {
            if (msg.data == "0") {
                console.log("0")
                $("#divLoading").hide();
                $scope.msg = "Password Incorrect !";
            }
            else if (msg.data == "-1") {
                console.log("-1")
                $("#divLoading").hide();
                $scope.msg = "Username Incorrect !";
            }
            else {
                uID = msg.data;
                $("#divLoading").hide();
                window.location.href = "/Home/Index";
            }
        });
    }

    function clearFields() {
        $scope.name = '';
        $scope.password = '';
    }

   

}]);