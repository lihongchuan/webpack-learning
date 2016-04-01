(function ($) {
    const shade = "#00f";
    $.fn.greenify = function() {
        this.css( "color", shade );
        return this;
    };
}(jQuery));