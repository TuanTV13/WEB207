var url = "http://localhost:3000/san-pham";
app.controller("danhSachCtrl", function ($scope, $http) {
  // Hiển thị SP
  $scope.dsSP = [];
  $http.get(url).then(
    function (res) {
      $scope.dsSP = res.data;
    },
    function () {
      alert("Không tải được dữ liệu!");
    }
  );
  //   xóa sp
  $scope.xoa = function (id) {
    $http.delete(`${url}/${id}`).then(
      function () {
        alert("Xóa thành công.");
        return (document.location = "#!/san-pham");
      },
      function () {
        alert("Xóa thất bại");
      }
    );
  };
});
// Thêm sp
app.controller("addSanPhamCtrl", function ($scope, $http) {
  $scope.id = "";
  $scope.maSP = "";
  $scope.ten = "";
  $scope.soLuong = "";
  $scope.gia = "";
  $scope.themSP = function () {
    $http
      .post(url, {
        id: $scope.id,
        maSP: $scope.maSP,
        ten: $scope.ten,
        soLuong: $scope.soLuong,
        gia: $scope.gia,
      })
      .then(
        function () {
          alert("Thêm thành công.");
          return (document.location = "#!/san-pham");
        },
        function () {
          alert("Thêm thất bại!");
        }
      );
  };
});
// Sửa sp
app.controller("updateSanPhamCtrl", function ($scope, $http, $routeParams) {
  $scope.ojL = [];
  $scope.id = $routeParams.id;
  $http.get(`${url}/${$scope.id}`).then(
    function (res) {
      $scope.ojL = res.data;
    },
    function () {
      alert("Lấy dữ liệu thất bại!");
    }
  );
  $scope.suaSP = function () {
    $scope.oj = {
      id: $scope.ojL.id,
      maSP: $scope.ojL.maSP,
      ten: $scope.ojL.ten,
      soLuong: $scope.ojL.soLuong,
      gia: $scope.ojL.gia,
    };
    $http.put(`${url}/${$scope.id}`, $scope.oj).then(
      function () {
        alert("Sửa thành công.");
        return (document.location = "#!/san-pham");
      },
      function () {
        alert("Sửa thất bại!");
      }
    );
  };
});
