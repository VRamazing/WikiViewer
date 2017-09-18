var app = angular.module("wikiApp", ['ngAnimate']);
app.controller("wikiCtrl", function($scope,$http) {
  $scope.input = false;
  $scope.toggle = function(){
    $scope.input = !$scope.input;
  }
  var api = "https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=extracts&exlimit=max&format=json&exsentences=1&exintro=&explaintext=&generator=search&gsrlimit=10&gsrsearch=";
  
  var data;
  var cb = '&callback=JSON_CALLBACK';
  var page = 'https://en.wikipedia.org/?curid=';
  $scope.keyword;
  $scope.data;
  document.getElementById("input").onfocus = function(){
     document.onkeydown = function(k){
        if(k.key == "Enter"){
          url = api + $scope.keyword + cb;
          //delete all child elements.
          
          // $scope.toggle();
          if ($('.data-card').length !== 0) {
    $(".data-card").remove();
}
          $scope.toggle();
          $.ajax({
              type: "GET",
              url: url,
              dataType: 'jsonp',
              success: function(data) {
                console.log(data);
                $scope.data = data.query.pages;
                $scope.$apply();
                console.log($scope.data);
              }
            });   
        }
     }
  }

});