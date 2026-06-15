$(document).ready(function() {
    $('.gridbox').hover(
        function() {
            // On mouseenter: switch to long text
            var $box = $(this);
            var $text = $box.find('.gridtext');
            var longText = $box.attr('data-long');
            
            $text.fadeOut(150, function() {
                $(this).text(longText).fadeIn(150);
            });
        },
        function() {
            // On mouseleave: switch back to short text
            var $box = $(this);
            var $text = $box.find('.gridtext');
            var shortText = $box.attr('data-short');
            
            $text.fadeOut(150, function() {
                $(this).text(shortText).fadeIn(150);
            });
        }
    );
});
