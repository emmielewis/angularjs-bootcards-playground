/*
* Initialize Bootcards.
* 
* Parameters:
* - offCanvasBackdrop (boolean): show a backdrop when the offcanvas is shown
* - offCanvasHideOnMainClick (boolean): hide the offcanvas menu on clicking outside the off canvas
* - enableTabletPortraitMode (boolean): enable single pane mode for tablets in portraitmode
* - disableRubberBanding (boolean): disable the iOS rubber banding effect
* - disableBreakoutSelector (boolean) : for iOS apps that are added to the home screen:
jQuery selector to target links for which a fix should be added to not
allow those links to break out of fullscreen mode.
*/
bootcards.init({
    offCanvasHideOnMainClick: true,
    offCanvasBackdrop: true,
    enableTabletPortraitMode: false,
    disableRubberBanding: false
});

var devicejs = new MobileDetect(window.navigator.userAgent);

function toggleBasedOnMobile(groupItem, toggle) {
    //This controls the highlighting of the list item.
    if ($(groupItem) != null) {
        $('.list-group a.active').removeClass('active');
        if (!$(groupItem).hasClass('active')) {
            $(groupItem).addClass('active');
        }
    }

    if (devicejs.phone() != null && devicejs.phone() != '') {
        if (toggle) {
            $("#list").fadeOut();
            $("#menuBtn").hide();
            $("#backBtn").removeClass('hidden');
        } else {
            $("#list").show();
            $("#menuBtn").show();
            $("#backBtn").addClass('hidden');
        }
    }

    $("#listDetails").scrollTop(0);
}

$("#backBtn").on("click", function () {
    toggleBasedOnMobile(null, false);
});

//TODO: Test this with adding it to the directive.
//$(".list-group a.list-group-item").on("click", function () {
//    toggleBasedOnMobile(this, true);
//});














