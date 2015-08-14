var devicejs = new MobileDetect(window.navigator.userAgent);
var cssLink;
var isMobile = false;

if (devicejs.is("iOS")) {
    isMobile = true;
    cssLink = "<link href=\"Content/bootcards-ios-lite.css\" rel=\"stylesheet\" type=\"text/css\" />";
} else if (devicejs.is("AndroidOS")) {
    isMobile = true;
    cssLink = "<link href=\"Content/bootcards-android-lite.css\" rel=\"stylesheet\" type=\"text/css\" />";
} else if (devicejs.mobile() != null && devicejs.mobile() != "") {
    isMobile = true;
    cssLink = "<link href=\"Content/bootcards-ios-lite.css\" rel=\"stylesheet\" type=\"text/css\" />";
} else {
    cssLink = "<link href=\"Content/bootcards-desktop-lite.css\" rel=\"stylesheet\" type=\"text/css\" />";
}

$("head").append(cssLink);

if (isMobile) {
    $("head").append("<link href=\"Content/bootcards-mobile-shared.css\" rel=\"stylesheet\" type=\"text/css\" />");
}