var app=angular.module('account', []);
app.controller('myaccount', function($scope) {
 
});
app.controller("myCtrl",function($scope)
  {
    $scope.visibility=true;
    $scope.onClick=function()
    {
      $scope.visibility=!$scope.visibility;
    }
  });
app.controller("nav",function($scope)
  {
    $(window).scroll(function() {
  var navbarColor = "121,147,59";//color attr for rgba
  //var navbarColor = "62,195,246";
  var smallLogoHeight = 30;
  var bigLogoHeight = 90;
  var navbarHeight = $('.navbar-inverse').height(); 
  
  var smallLogoEndPos = 0;
  var smallSpeed = (smallLogoHeight / bigLogoHeight);
  
  var ySmall = ($(window).scrollTop() * smallSpeed); 
  
  var smallPadding = navbarHeight - ySmall;
  if (smallPadding > navbarHeight) { smallPadding = navbarHeight; }
  if (smallPadding < smallLogoEndPos) { smallPadding = smallLogoEndPos; }
  if (smallPadding < 0) { smallPadding = 0; }
  
  
  
  var navOpacity = ySmall / smallLogoHeight;
  $('.navbar').css({ "height": 100*(1-navOpacity/8)});
  navOpacity/=10;
  navOpacity+=0.9;
  
  
  if(navOpacity!=0) 
 { if  (navOpacity > 1) { navOpacity = 1; }
  if (navOpacity < 0 ) { navOpacity = 0; }
  var navBackColor = 'rgba(' + navbarColor + ',' + navOpacity + ')';
  $('.navbar-inverse').css({"background": navBackColor});}
  else
  {
    $('.navbar-inverse').css({"background":"rgba(121,147,59,0.8)"});
  }
  
  var shadowOpacity = navOpacity * 0.4;
  if ( ySmall > 1) {
    $('.navbar-inverse').css({"box-shadow": "0 2px 3px rgba(0,0,0," + shadowOpacity + ")"});
  } else {
    $('.navbar-inverse').css({"box-shadow": "none"});
  }
  
  
  
});
});