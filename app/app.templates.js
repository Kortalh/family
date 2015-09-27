angular.module('templates-dist', ['../app/common/footer/footerView.html', '../app/common/header/headerView.html', '../app/components/forum/forumView.html', '../app/components/gallery/galleryView.html', '../app/components/genealogy/genealogyView.html', '../app/components/history/historyView.html', '../app/components/home/homeView.html']);

angular.module("../app/common/footer/footerView.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/common/footer/footerView.html",
    "This is my footer.");
}]);

angular.module("../app/common/header/headerView.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/common/header/headerView.html",
    "<nav>\n" +
    "	<ul>\n" +
    "		<li>\n" +
    "			<a class=\"home\" ng-href=\"./home\">Home</a>\n" +
    "		</li>\n" +
    "		<li>\n" +
    "			<a class=\"forum\" ng-href=\"./forum\">Forum</a>\n" +
    "		</li>\n" +
    "		<li>\n" +
    "			<a class=\"gallery\" ng-href=\"./gallery\">Gallery</a>\n" +
    "		</li>\n" +
    "		<li>\n" +
    "			<a class=\"genealogy\" ng-href=\"./genealogy\">Genealogy</a>\n" +
    "		</li>\n" +
    "		<li>\n" +
    "			<a class=\"history\" ng-href=\"./history\">History</a>\n" +
    "		</li>\n" +
    "	</ul>\n" +
    "</nav>");
}]);

angular.module("../app/components/forum/forumView.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/components/forum/forumView.html",
    "forumView");
}]);

angular.module("../app/components/gallery/galleryView.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/components/gallery/galleryView.html",
    "galleryView");
}]);

angular.module("../app/components/genealogy/genealogyView.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/components/genealogy/genealogyView.html",
    "genealogyView");
}]);

angular.module("../app/components/history/historyView.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/components/history/historyView.html",
    "History View");
}]);

angular.module("../app/components/home/homeView.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/components/home/homeView.html",
    "<div class=\"home\">\n" +
    "	{{test}}\n" +
    "</div>");
}]);
