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
        .when("/kidslearn", {templateUrl: "pages/kidslearn.html", controller: "PageCtrl"})
        .when("/evaluate", {templateUrl: "pages/evaluate.html", controller: "PageCtrl"})
        .when("/challenges", {templateUrl: "pages/challenges.html", controller: "PageCtrl"})
        .when("/misguided", {templateUrl: "pages/misguided.html", controller: "PageCtrl"})
        .when("/benefits", {templateUrl: "pages/benefits.html", controller: "PageCtrl"})
        .when("/articles", {templateUrl: "pages/articles.html", controller: "PageCtrl"})
        .when("/videos", {templateUrl: "pages/videos.html", controller: "PageCtrl"})
        .when("/blogs", {templateUrl: "pages/blogs.html", controller: "PageCtrl"})
        .when("/info", {templateUrl: "pages/infographics.html", controller: "PageCtrl"})
        .when("/events", {templateUrl: "pages/events.html", controller: "PageCtrl"})
        .when("/recentnews", {templateUrl: "pages/recentnews.html", controller: "PageCtrl"})
        .when("/contact", {templateUrl: "pages/contact.html", controller: "PageCtrl"})
        .when("/donate", {templateUrl: "pages/donate.html", controller: "PageCtrl"})
        .when("/volunteer", {templateUrl: "pages/volunteer.html", controller: "PageCtrl"})
    // else 404
        .otherwise("/404", {templateUrl: "pages/404.html", controller: "PageCtrl"});
}]);

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function () {
    console.log("Page Controller reporting for duty.");

  // Activates the Carousel
    $('.carousel').carousel({
        interval: 5000
    });
    
    $('.carousel-control.left').click(function () {
        $('#publicEdCarousel').carousel('prev');
    });

    $('.carousel-control.right').click(function () {
        $('#publicEdCarousel').carousel('next');
    });
    
    $('.carousel-control.left').click(function () {
        $('#publicEdEvent').carousel('prev');
    });

    $('.carousel-control.right').click(function () {
        $('#publicEdEvent').carousel('next');
    });
    
    $('.carousel-control.left').click(function () {
        $('#eventFlyers').carousel('prev');
    });

    $('.carousel-control.right').click(function () {
        $('#eventFlyers').carousel('next');
    });

  // Activates Tooltips for Social Links
    $('.tooltip-social').tooltip({
        selector: "a[data-toggle=tooltip]"
    });
});
