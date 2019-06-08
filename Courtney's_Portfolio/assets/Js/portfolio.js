jQuery(document).ready(function($){
    //Toggle the nav menu on button click
    var $root = $("html", "body"),
        menu_toggle = $(".menu-toggle");

    menu_toggle.on("click", function(){
        var $this = $(this);

        $this.toggleClass("close");
        $(".menu, .menu-nav, .menu-nav-item").toggleClass("show");
    });
});
