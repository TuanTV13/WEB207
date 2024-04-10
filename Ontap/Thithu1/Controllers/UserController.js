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
    $scope.create = () => {
        $http.post(endpoint, $scope.form_user).then(
            (res) => {
                alert("Done");

                $location.path('/users');
            },
            (err) => {alert(err.statusText);}
        )
    }

    $scope.delete = (id) => {
        if (confirm("Bạn có chắc chắn muốn xóa?")) {
            $http.delete(endpoint + '/' + id)
                .then(
                    (res) => { 
                        alert("Đã xóa"); 
                        // Gọi hàm hoặc thực hiện các hành động khác sau khi xóa thành công

                        $location.path('/users');

                    },
                    (err) => { alert("Lỗi: " + err.statusText); }
                );
        }
    };
    
    $scope.update = (id) => {
        $http.put(endpoint + '/' + id, $scope.form_user)
            .then(
                (res) => { 
                    alert("Cập nhật thành công"); 
                    // Gọi hàm hoặc thực hiện các hành động khác sau khi cập nhật thành công

                    $location.path('/users');
                },
                (err) => { alert("Lỗi: " + err.statusText); }
            );
    };
    

});