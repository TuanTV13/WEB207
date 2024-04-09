app.controller('UserController', function( $scope, $http, $routeParams, $location){

    let endpoint = 'http://localhost:3000/users';

    if(! $routeParams.id){

        // Hien thi danh sach
        $http.get(endpoint).then(
            (res) => {$scope.users = res.data;},
            (err) => {alert(err.statusText);}
        );
    } else {
        //Xem chi tiet + Show data len form edit
        $http.get(endpoint +'/'+ $routeParams.id).then(
        (res) => {
            $scope.user = res.data;
            $scope.form_user = res.data;
        },
        (err) => {alert(err.statusText);}
    );
    }


    // Them moi

});