/**
 * Angular Scripts for www.republiced.org
 * @author Jeanine Kimball (jeanine.marie@me.com)
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('republicEdApp', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "pages/home.html", controller: "PageCtrl"})
    // Pages
    .when("/about", {templateUrl: "pages/about.html", controller: "PageCtrl"})
    .when("/topic", {templateUrl: "pages/topic.html", controller: "PageCtrl"})
    .when("/kidslearn", {templateUrl: "pages/kidslearn.html", controller: "PageCtrl"})
    .when("/recentnews", {templateUrl: "pages/recentnews.html", controller: "PageCtrl"})
    .when("/contact", {templateUrl: "pages/contact.html", controller: "PageCtrl"})
    // Blog
    .when("/blog", {templateUrl: "pages/blog.html", controller: "BlogCtrl"})
    .when("/blog/post", {templateUrl: "pages/blog_item.html", controller: "BlogCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "pages/404.html", controller: "PageCtrl"});
}]);

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });
    
$('.carousel-control.left').click(function() {
  $('#publicEdCarousel').carousel('prev');
});

$('.carousel-control.right').click(function() {
  $('#publicEdCarousel').carousel('next');
});

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});
