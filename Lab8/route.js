var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
  $routeProvider
    .when("/san-pham", {
      templateUrl: "view/DanhSach.html",
      controller: "danhSachCtrl",
    })
    .when("/san-pham/add", {
      templateUrl: "view/add.html",
      controller: "addSanPhamCtrl",
    })
    .when("/san-pham/update/:id", {
      templateUrl: "view/upate.html",
      controller: "updateSanPhamCtrl",
    })
    .otherwise({
      redirectTo: "/san-pham",
    });
});
